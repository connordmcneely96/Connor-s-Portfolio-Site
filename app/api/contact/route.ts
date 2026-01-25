import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Honeypot check - if this field is filled, it's likely a bot
function isBot(honeypot?: string): boolean {
  return !!honeypot;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, honeypot } = body as ContactFormData & { honeypot?: string };

    // Bot detection
    if (isBot(honeypot)) {
      // Return success to not alert the bot, but don't process
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 100 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Field length exceeds limit' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Store in D1 database
    // 2. Send notification email
    // 3. Send to a webhook (Slack, Discord, etc.)

    // For now, log the submission (in production, replace with actual storage)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      message: message.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    });

    // Example D1 integration (uncomment when D1 is configured):
    // const db = (request as any).env?.DB;
    // if (db) {
    //   await db.prepare(
    //     'INSERT INTO contacts (name, email, phone, subject, message, created_at) VALUES (?, ?, ?, ?, ?, ?)'
    //   ).bind(name, email, phone || null, subject, message, new Date().toISOString()).run();
    // }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. I will respond within 24-48 hours.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
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
