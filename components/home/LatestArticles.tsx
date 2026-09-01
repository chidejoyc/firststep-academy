'use client';

import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: '10 AI Tools That Will Transform Your Workflow in 2024',
    excerpt: 'Discover the best artificial intelligence tools designed for beginners to boost productivity and automate tasks.',
    category: 'AI Tools',
    author: 'Sarah Mitchell',
    date: 'Sep 1, 2024',
    readTime: '5 min read',
    image: '🤖',
  },
  {
    id: 2,
    title: 'The Complete SEO Guide for Beginners: Rank Higher in Google',
    excerpt: 'Learn the fundamentals of search engine optimization and start driving organic traffic to your website.',
    category: 'SEO',
    author: 'John Davis',
    date: 'Aug 30, 2024',
    readTime: '8 min read',
    image: '🔍',
  },
  {
    id: 3,
    title: 'How to Start Affiliate Marketing With Zero Experience',
    excerpt: 'A step-by-step guide to building a profitable affiliate marketing business from the ground up.',
    category: 'Affiliate Marketing',
    author: 'Emma Rodriguez',
    date: 'Aug 28, 2024',
    readTime: '10 min read',
    image: '💰',
  },
];

export default function LatestArticles() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">Latest Articles</h2>
            <p className="text-gray-600 dark:text-gray-400">Stay updated with tips, tutorials, and insights</p>
          </div>
          <Link href="/blog" className="hidden md:block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-lg">
            View All →
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`}>
              <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-soft-lg transition overflow-hidden h-full hover:translate-y-[-4px] duration-300">
                {/* Thumbnail */}
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 h-48 flex items-center justify-center text-5xl">
                  {article.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-12 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition"
          >
            Read More Articles
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
