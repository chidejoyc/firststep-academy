import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db/client';
import { slugify } from '@/lib/utils/helpers';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');
    const offset = (page - 1) * limit;

    let queryText = 'SELECT * FROM articles WHERE published = true';
    const params: any[] = [];

    if (category) {
      queryText += ' AND category = $1';
      params.push(category);
    }

    queryText += ` ORDER BY published_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);

    const result = await query(queryText, params);

    // Get total count
    let countQuery = 'SELECT COUNT(*) as count FROM articles WHERE published = true';
    if (category) {
      countQuery += ` AND category = $1`;
    }
    const countResult = await query(countQuery, category ? [category] : []);

    return NextResponse.json({
      articles: result.rows,
      total: parseInt(countResult.rows[0].count),
      page,
      pages: Math.ceil(parseInt(countResult.rows[0].count) / limit),
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, excerpt, content, category, tags, authorId } = await request.json();

    if (!title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const slug = slugify(title);

    const result = await query(
      `INSERT INTO articles (title, slug, excerpt, content, category, author_id, published, published_at, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, true, NOW(), NOW(), NOW())
       RETURNING *`,
      [title, slug, excerpt || '', content, category || 'general', authorId || null]
    );

    // Insert tags
    if (tags && tags.length > 0) {
      for (const tag of tags) {
        await query('INSERT INTO article_tags (article_id, tag) VALUES ($1, $2)', [
          result.rows[0].id,
          tag,
        ]);
      }
    }

    return NextResponse.json({ article: result.rows[0], success: true }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
