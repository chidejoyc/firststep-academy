import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Eye, Heart, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Article | FirstStep Academy Blog',
};

export default function ArticlePage({ params }: { params: { id: string } }) {
  // Mock article data
  const article = {
    id: params.id,
    title: '10 AI Tools That Will Transform Your Workflow in 2024',
    excerpt: 'Discover the best artificial intelligence tools designed for beginners to boost productivity and automate tasks.',
    category: 'AI Tools',
    author: 'Sarah Mitchell',
    authorImage: '👩\u200d💼',
    authorBio: 'Tech writer and AI enthusiast. Exploring how AI is changing the way we work.',
    date: 'September 1, 2024',
    readTime: '5 min read',
    views: 3542,
    likes: 245,
    image: '🤖',
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is no longer just a buzzword – it's a practical tool that can revolutionize your daily workflow. Whether you're a content creator, marketer, developer, or entrepreneur, AI tools can help you work smarter and faster.</p>

      <p>In this guide, we'll explore 10 AI tools that are perfect for beginners and can immediately boost your productivity.</p>

      <h2>1. ChatGPT</h2>
      <p>ChatGPT is one of the most versatile AI tools available. Use it for content writing, brainstorming, answering questions, and even coding help.</p>
      <ul>
        <li>Perfect for: Content creation, brainstorming, learning</li>
        <li>Pricing: Free and paid plans available</li>
        <li>Best for: Beginners who need a general-purpose AI assistant</li>
      </ul>

      <h2>2. Midjourney</h2>
      <p>Create stunning AI-generated images from text descriptions. Perfect if you need custom graphics without design skills.</p>
      <ul>
        <li>Perfect for: Creating visuals, marketing materials, illustrations</li>
        <li>Pricing: Paid plans starting at $10/month</li>
        <li>Best for: Marketers and content creators</li>
      </ul>

      <h2>3. Jasper</h2>
      <p>An AI copywriter that can help you create marketing copy, blog posts, and social media content quickly.</p>
      <ul>
        <li>Perfect for: Blog writing, marketing copy, social media</li>
        <li>Pricing: Paid plans available</li>
        <li>Best for: Bloggers and marketers</li>
      </ul>

      <h2>4. Synthesia</h2>
      <p>Generate video content with AI avatars reading your script. No camera, no actors needed.</p>
      <ul>
        <li>Perfect for: Video content creation, tutorials, presentations</li>
        <li>Pricing: Paid plans available</li>
        <li>Best for: Content creators and businesses</li>
      </ul>

      <h2>5. Copy.ai</h2>
      <p>Similar to Jasper but more affordable. Great for generating marketing content and social media posts.</p>
      <ul>
        <li>Perfect for: Copywriting, social media content</li>
        <li>Pricing: Free plan available, paid plans from $49/month</li>
        <li>Best for: Budget-conscious creators</li>
      </ul>

      <h2>Conclusion</h2>
      <p>These AI tools represent just the beginning of what's possible with artificial intelligence. Start experimenting with a few of them to see which ones fit your workflow best.</p>

      <p>Remember, AI is a tool to augment your skills, not replace them. Use these tools to automate repetitive tasks and focus on what makes your work unique.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 mb-6">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <span className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold mb-4">{article.category}</span>

          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-700 dark:text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={18} />
              <span>{article.views.toLocaleString()} views</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-8 border-b border-gray-200 dark:border-gray-700">
            <span className="text-4xl">{article.authorImage}</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{article.author}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{article.authorBio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-xl h-96 flex items-center justify-center text-9xl mb-12">
              {article.image}
            </div>

            {/* Article Content */}
            <article className="prose dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">{article.excerpt}</p>
              <p>
                Artificial Intelligence is no longer just a buzzword – it's a practical tool that can revolutionize your daily workflow. Whether you're a content creator, marketer, developer, or entrepreneur, AI tools can help you work smarter and faster.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. ChatGPT</h2>
              <p>
                ChatGPT is one of the most versatile AI tools available. Use it for content writing, brainstorming, answering questions, and even coding help.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Perfect for: Content creation, brainstorming, learning</li>
                <li>Pricing: Free and paid plans available</li>
                <li>Best for: Beginners who need a general-purpose AI assistant</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Midjourney</h2>
              <p>Create stunning AI-generated images from text descriptions. Perfect if you need custom graphics without design skills.</p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Conclusion</h2>
              <p>
                These AI tools represent just the beginning of what's possible with artificial intelligence. Start experimenting with a few of them to see which ones fit your workflow best.
              </p>
            </article>
          </div>

          {/* Sidebar */}
          <div>
            {/* Share & Engagement */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sticky top-20 space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Share This Article</h3>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                    Twitter
                  </button>
                  <button className="flex-1 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition text-sm font-medium">
                    LinkedIn
                  </button>
                </div>
              </div>

              {/* Like Button */}
              <button className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2">
                <Heart size={20} />
                Like ({article.likes})
              </button>

              {/* Table of Contents */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Introduction</a></li>
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">1. ChatGPT</a></li>
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">2. Midjourney</a></li>
                  <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400">Conclusion</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
