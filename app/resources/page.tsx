import { Metadata } from 'next';
import Link from 'next/link';
import { Download, FileText, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Resources | FirstStep Academy',
  description: 'Download free templates, checklists, guides, and resources to accelerate your learning.',
};

const resources = [
  {
    id: 1,
    title: 'SEO Checklist',
    description: 'Complete checklist for optimizing your website for search engines.',
    type: 'Checklist',
    category: 'SEO',
    downloads: 2450,
    icon: '✓',
    image: '📋',
  },
  {
    id: 2,
    title: 'Content Calendar Template',
    description: 'Monthly content planning template for bloggers and content creators.',
    type: 'Template',
    category: 'Content',
    downloads: 3120,
    icon: '📅',
    image: '📆',
  },
  {
    id: 3,
    title: 'Affiliate Marketing Guide',
    description: 'Comprehensive guide to starting and growing your affiliate business.',
    type: 'Guide',
    category: 'Marketing',
    downloads: 4560,
    icon: '📖',
    image: '📚',
  },
  {
    id: 4,
    title: 'Blog Post Template',
    description: 'Professional blog post template with formatting and structure.',
    type: 'Template',
    category: 'Writing',
    downloads: 2890,
    icon: '✍️',
    image: '📝',
  },
  {
    id: 5,
    title: 'Email Marketing Cheatsheet',
    description: 'Quick reference guide for effective email marketing campaigns.',
    type: 'Cheatsheet',
    category: 'Marketing',
    downloads: 1950,
    icon: '📧',
    image: '✉️',
  },
  {
    id: 6,
    title: 'Goal Setting Worksheet',
    description: 'Interactive worksheet to set and track your learning and business goals.',
    type: 'Worksheet',
    category: 'Planning',
    downloads: 3340,
    icon: '🎯',
    image: '🎪',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Free Resources</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Templates, checklists, guides, and tools to accelerate your learning and business growth</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {['All', 'Template', 'Checklist', 'Guide', 'Cheatsheet', 'Worksheet'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filter === 'All'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-soft-lg transition overflow-hidden hover:translate-y-[-8px] duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 h-32 flex items-center justify-center text-5xl">
                {resource.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full">
                    {resource.type}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{resource.category}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{resource.description}</p>

                {/* Stats and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-xs text-gray-600 dark:text-gray-400">{resource.downloads.toLocaleString()} downloads</span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition text-sm">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
