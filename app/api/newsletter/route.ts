import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db/client';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const result = await query(
      'INSERT INTO newsletter_subscribers (email, name, subscribed, subscribed_at) VALUES ($1, $2, true, NOW()) RETURNING id, email, name, subscribed_at',
      [email, name || null]
    );

    return NextResponse.json(
      {
        success: true,
        subscriber: result.rows[0],
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    if (error.code === '23505') {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const result = await query(
      'SELECT COUNT(*) as count FROM newsletter_subscribers WHERE subscribed = true'
    );

    return NextResponse.json({
      totalSubscribers: parseInt(result.rows[0].count),
    });
  } catch (error) {
    console.error('Error fetching subscribers count:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
