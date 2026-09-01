import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db/client';
import { slugify } from '@/lib/utils/helpers';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '6');

    let queryText = 'SELECT * FROM courses WHERE published = true';
    const params: any[] = [];

    if (category) {
      queryText += ' AND category = $1';
      params.push(category);
      queryText += ` LIMIT $${params.length + 1}`;
      params.push(limit);
    } else {
      queryText += ` LIMIT $${params.length + 1}`;
      params.push(limit);
    }

    queryText += ' ORDER BY created_at DESC';

    const result = await query(queryText, params);

    return NextResponse.json({
      courses: result.rows,
      count: result.rowCount,
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, description, category, difficulty, estimatedTime, instructorId } = await request.json();

    if (!title || !description || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const slug = slugify(title);

    const result = await query(
      `INSERT INTO courses (title, description, slug, category, difficulty, estimated_time, instructor_id, published, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, false, NOW(), NOW())
       RETURNING *`,
      [title, description, slug, category, difficulty || 'beginner', estimatedTime || 0, instructorId || null]
    );

    return NextResponse.json(
      { course: result.rows[0], success: true },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating course:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
