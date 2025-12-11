import { NextRequest, NextResponse } from 'next/server';

interface LogEntry {
  level: string;
  message: string;
  category: string;
  timestamp: string;
  url: string;
  userAgent?: string;
  referrer?: string;
  metadata?: Record<string, unknown>;
}

interface LogPayload {
  logs: LogEntry[];
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    const body: LogPayload = await request.json();
    
    if (!body.logs || !Array.isArray(body.logs)) {
      return NextResponse.json(
        { error: 'Invalid payload: logs array required' },
        { status: 400 }
      );
    }

    // Process each log entry
    body.logs.forEach((entry) => {
      const enrichedLog = {
        source: 'frontend',
        clientIp: ip.replace('::ffff:', ''),
        serverTimestamp: new Date().toISOString(),
        ...entry,
        // Sanitize any sensitive data in metadata
        metadata: sanitizeMetadata(entry.metadata),
      };

      // Output as JSON for log aggregation tools
      // Your admin can configure the server to capture these logs
      console.log(JSON.stringify(enrichedLog));
    });

    return NextResponse.json({ success: true, count: body.logs.length });
  } catch (error) {
    console.error('Error processing frontend logs:', error);
    return NextResponse.json(
      { error: 'Failed to process logs' },
      { status: 500 }
    );
  }
}

function sanitizeMetadata(metadata?: Record<string, unknown>): Record<string, unknown> | undefined {
  if (!metadata) return undefined;

  const sanitized = { ...metadata };
  const sensitiveKeys = ['password', 'token', 'secret', 'key', 'authorization', 'cookie', 'session'];

  for (const key of Object.keys(sanitized)) {
    const lowerKey = key.toLowerCase();
    if (sensitiveKeys.some(sensitive => lowerKey.includes(sensitive))) {
      sanitized[key] = '[REDACTED]';
    }
    // Truncate long string values
    if (typeof sanitized[key] === 'string' && (sanitized[key] as string).length > 500) {
      sanitized[key] = (sanitized[key] as string).substring(0, 500) + '...[TRUNCATED]';
    }
  }

  return sanitized;
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
