"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { logger } from '@/lib/logger';

interface LoggerProviderProps {
  children: React.ReactNode;
}

export default function LoggerProvider({ children }: LoggerProviderProps) {
  const pathname = usePathname();

  // Log page views on route changes
  useEffect(() => {
    logger.pageView(pathname, {
      title: typeof document !== 'undefined' ? document.title : '',
    });
  }, [pathname]);

  // Log when user leaves the site
  useEffect(() => {
    const handleBeforeUnload = () => {
      logger.info('User leaving site', {
        timeOnPage: performance.now(),
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return <>{children}</>;
}
