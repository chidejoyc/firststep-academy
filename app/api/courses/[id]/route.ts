import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db/client';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await query('SELECT * FROM courses WHERE id = $1', [params.id]);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    // Fetch lessons
    const lessonsResult = await query('SELECT * FROM lessons WHERE course_id = $1 ORDER BY lesson_order ASC', [params.id]);

    return NextResponse.json({
      course: {
        ...result.rows[0],
        lessons: lessonsResult.rows,
      },
    });
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { title, description, category, difficulty, published } = await request.json();

    const result = await query(
      `UPDATE courses SET title = $1, description = $2, category = $3, difficulty = $4, published = $5, updated_at = NOW()
       WHERE id = $6 RETURNING *`,
      [title, description, category, difficulty, published, params.id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json({ course: result.rows[0], success: true });
  } catch (error) {
    console.error('Error updating course:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await query('DELETE FROM courses WHERE id = $1 RETURNING id', [params.id]);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, deletedId: result.rows[0].id });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
