type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  category: 'pageview' | 'interaction' | 'error' | 'performance' | 'navigation' | 'custom';
  timestamp: string;
  url: string;
  userAgent?: string;
  referrer?: string;
  metadata?: Record<string, unknown>;
}

interface PerformanceMetrics {
  pageLoadTime?: number;
  domContentLoaded?: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  timeToInteractive?: number;
}

class FrontendLogger {
  private queue: LogEntry[] = [];
  private flushInterval: number = 5000; // 5 seconds
  private maxQueueSize: number = 10;
  private isClient: boolean = typeof window !== 'undefined';
  private flushTimer: NodeJS.Timeout | null = null;

  constructor() {
    if (this.isClient) {
      this.setupAutoFlush();
      this.setupErrorHandlers();
      this.setupPerformanceObserver();
      this.setupUnloadHandler();
    }
  }

  private setupAutoFlush() {
    this.flushTimer = setInterval(() => {
      this.flush();
    }, this.flushInterval);
  }

  private setupErrorHandlers() {
    // Catch unhandled errors
    window.addEventListener('error', (event) => {
      this.error('Unhandled error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
      });
    });

    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.error('Unhandled promise rejection', {
        reason: String(event.reason),
        stack: event.reason?.stack,
      });
    });
  }

  private setupPerformanceObserver() {
    if ('PerformanceObserver' in window) {
      // Observe Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.logPerformance({
            largestContentfulPaint: lastEntry.startTime,
          });
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        // LCP not supported
      }

      // Observe First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.logPerformance({
                firstContentfulPaint: entry.startTime,
              });
            }
          });
        });
        fcpObserver.observe({ type: 'paint', buffered: true });
      } catch (e) {
        // Paint timing not supported
      }
    }

    // Log page load timing when ready
    if (document.readyState === 'complete') {
      this.logPageLoadTiming();
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => this.logPageLoadTiming(), 0);
      });
    }
  }

  private logPageLoadTiming() {
    const timing = performance.timing || (performance as any).getEntriesByType?.('navigation')?.[0];
    if (timing) {
      const navStart = timing.navigationStart || 0;
      this.logPerformance({
        pageLoadTime: timing.loadEventEnd - navStart,
        domContentLoaded: timing.domContentLoadedEventEnd - navStart,
      });
    }
  }

  private setupUnloadHandler() {
    window.addEventListener('beforeunload', () => {
      this.flush(true);
    });

    // Also handle visibility change for mobile
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.flush(true);
      }
    });
  }

  private createEntry(
    level: LogLevel,
    message: string,
    category: LogEntry['category'],
    metadata?: Record<string, unknown>
  ): LogEntry {
    return {
      level,
      message,
      category,
      timestamp: new Date().toISOString(),
      url: this.isClient ? window.location.href : '',
      userAgent: this.isClient ? navigator.userAgent : undefined,
      referrer: this.isClient ? document.referrer || 'direct' : undefined,
      metadata,
    };
  }

  private addToQueue(entry: LogEntry) {
    this.queue.push(entry);
    
    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      const consoleMethod = entry.level === 'error' ? 'error' : 
                           entry.level === 'warn' ? 'warn' : 'log';
      console[consoleMethod](`[${entry.category}] ${entry.message}`, entry.metadata);
    }

    if (this.queue.length >= this.maxQueueSize) {
      this.flush();
    }
  }

  async flush(useBeacon = false) {
    if (this.queue.length === 0) return;

    const entries = [...this.queue];
    this.queue = [];

    const payload = JSON.stringify({ logs: entries });

    try {
      if (useBeacon && navigator.sendBeacon) {
        // Use sendBeacon for unload events (more reliable)
        navigator.sendBeacon('/api/log', payload);
      } else {
        await fetch('/api/log', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true,
        });
      }
    } catch (error) {
      // Re-add to queue if flush fails (but limit retries)
      if (entries.length < 50) {
        this.queue.push(...entries);
      }
      console.error('Failed to flush logs:', error);
    }
  }

  // Public logging methods
  debug(message: string, metadata?: Record<string, unknown>) {
    if (!this.isClient) return;
    this.addToQueue(this.createEntry('debug', message, 'custom', metadata));
  }

  info(message: string, metadata?: Record<string, unknown>) {
    if (!this.isClient) return;
    this.addToQueue(this.createEntry('info', message, 'custom', metadata));
  }

  warn(message: string, metadata?: Record<string, unknown>) {
    if (!this.isClient) return;
    this.addToQueue(this.createEntry('warn', message, 'custom', metadata));
  }

  error(message: string, metadata?: Record<string, unknown>) {
    if (!this.isClient) return;
    this.addToQueue(this.createEntry('error', message, 'error', metadata));
  }

  // Specialized logging methods
  pageView(pageName: string, metadata?: Record<string, unknown>) {
    if (!this.isClient) return;
    this.addToQueue(this.createEntry('info', `Page view: ${pageName}`, 'pageview', {
      pageName,
      ...metadata,
    }));
  }

  interaction(action: string, element: string, metadata?: Record<string, unknown>) {
    if (!this.isClient) return;
    this.addToQueue(this.createEntry('info', `${action}: ${element}`, 'interaction', {
      action,
      element,
      ...metadata,
    }));
  }

  navigation(from: string, to: string, metadata?: Record<string, unknown>) {
    if (!this.isClient) return;
    this.addToQueue(this.createEntry('info', `Navigation: ${from} -> ${to}`, 'navigation', {
      from,
      to,
      ...metadata,
    }));
  }

  logPerformance(metrics: PerformanceMetrics) {
    if (!this.isClient) return;
    this.addToQueue(this.createEntry('info', 'Performance metrics', 'performance', metrics as Record<string, unknown>));
  }

  // Track external link clicks
  trackExternalLink(url: string, linkText?: string) {
    this.interaction('external_link_click', url, { linkText });
  }

  // Track search queries
  trackSearch(query: string, resultsCount?: number) {
    this.interaction('search', query, { resultsCount });
  }

  // Track file downloads
  trackDownload(filename: string, fileType?: string) {
    this.interaction('download', filename, { fileType });
  }

  // Cleanup
  destroy() {
    if (this.flushTimer) {
      clearInterval(this.flushTimer);
    }
    this.flush(true);
  }
}

// Singleton instance
export const logger = new FrontendLogger();

// Export types for use in components
export type { LogLevel, LogEntry, PerformanceMetrics };
