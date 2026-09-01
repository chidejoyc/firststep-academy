import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Eye, Heart, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | FirstStep Academy',
  description: 'Read tips, tutorials, and insights about digital skills and online learning.',
};

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
    views: 3542,
    likes: 245,
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
    views: 5621,
    likes: 412,
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
    views: 8234,
    likes: 621,
  },
  {
    id: 4,
    title: 'Content Creation Tips: How to Write Articles That Convert',
    excerpt: 'Master the art of persuasive writing and create content that drives results for your business or blog.',
    category: 'Content Marketing',
    author: 'Michael Chen',
    date: 'Aug 25, 2024',
    readTime: '7 min read',
    image: '✍️',
    views: 4156,
    likes: 338,
  },
  {
    id: 5,
    title: 'Building Your First Freelance Client: A Beginner's Roadmap',
    excerpt: 'Everything you need to know to land your first freelance client and start earning money online.',
    category: 'Freelancing',
    author: 'Lisa Wong',
    date: 'Aug 22, 2024',
    readTime: '9 min read',
    image: '💼',
    views: 6789,
    likes: 554,
  },
  {
    id: 6,
    title: 'Web Development Trends 2024: What You Need to Know',
    excerpt: 'Stay ahead of the curve with the latest web development trends and technologies shaping the industry.',
    category: 'Web Development',
    author: 'Alex Turner',
    date: 'Aug 20, 2024',
    readTime: '6 min read',
    image: '🌐',
    views: 7213,
    likes: 489,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Tips, tutorials, and insights from our experts</p>
        </div>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href={`/blog/${articles[0].id}`}>
          <article className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
              <div>
                <span className="inline-block px-3 py-1 bg-primary-600 text-white rounded text-xs font-semibold mb-4">
                  {articles[0].category}
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-3">{articles[0].title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">{articles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>by {articles[0].author}</p>
                    <p>{articles[0].date}</p>
                  </div>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition flex items-center gap-2">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center text-8xl">{articles[0].image}</div>
            </div>
          </article>
        </Link>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`}>
              <article className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-soft-lg transition overflow-hidden h-full hover:translate-y-[-4px] duration-300 cursor-pointer">
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
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
