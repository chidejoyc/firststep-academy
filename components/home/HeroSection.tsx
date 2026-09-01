'use client';

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Learn Digital Skills. Build Confidence. Start Earning.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Helping beginners master valuable digital skills through practical learning paths, tutorials, and trusted resources.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition shadow-soft-lg"
              >
                Start Learning
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/roadmaps"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition"
              >
                Explore Roadmaps
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✨</span>
                <span className="text-gray-600 dark:text-gray-400">1000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="text-gray-600 dark:text-gray-400">4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="text-gray-600 dark:text-gray-400">100% Free</span>
              </div>
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-soft-xl p-8">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-32"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
