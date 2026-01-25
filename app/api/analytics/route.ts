import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

interface AnalyticsEvent {
  projectId?: string;
  action: 'view' | 'click' | 'download' | 'scroll';
  metadata?: Record<string, string | number>;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectId, action, metadata } = body as AnalyticsEvent;

    // Validation
    if (!action) {
      return NextResponse.json(
        { error: 'Missing action field' },
        { status: 400 }
      );
    }

    const validActions = ['view', 'click', 'download', 'scroll'];
    if (!validActions.includes(action)) {
      return NextResponse.json(
        { error: 'Invalid action type' },
        { status: 400 }
      );
    }

    // Get client info from headers
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referer = request.headers.get('referer') || 'direct';
    const ip = request.headers.get('cf-connecting-ip') ||
               request.headers.get('x-forwarded-for') ||
               'unknown';

    // Log analytics event
    const event = {
      projectId,
      action,
      metadata,
      userAgent: userAgent.substring(0, 200),
      referer,
      timestamp: new Date().toISOString(),
    };

    console.log('Analytics event:', event);

    // Example D1 integration (uncomment when D1 is configured):
    // const db = (request as any).env?.DB;
    // if (db) {
    //   await db.prepare(
    //     'INSERT INTO analytics (project_id, action, metadata, user_agent, referer, created_at) VALUES (?, ?, ?, ?, ?, ?)'
    //   ).bind(
    //     projectId || null,
    //     action,
    //     JSON.stringify(metadata || {}),
    //     event.userAgent,
    //     referer,
    //     event.timestamp
    //   ).run();
    // }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { error: 'Failed to process analytics' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
