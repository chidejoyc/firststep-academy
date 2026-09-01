'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const roadmaps = [
  {
    id: 1,
    title: 'Web Development Path',
    description: 'Master HTML, CSS, JavaScript, and build modern websites',
    levels: 3,
    courses: 15,
    icon: '🌐',
    duration: '12 weeks',
  },
  {
    id: 2,
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, content marketing, and social media strategies',
    levels: 3,
    courses: 12,
    icon: '📱',
    duration: '10 weeks',
  },
  {
    id: 3,
    title: 'Freelancing Blueprint',
    description: 'Build a sustainable freelance career and find clients',
    levels: 3,
    courses: 10,
    icon: '💼',
    duration: '8 weeks',
  },
  {
    id: 4,
    title: 'AI & Automation',
    description: 'Learn to use AI tools and automate your workflows',
    levels: 2,
    courses: 8,
    icon: '🤖',
    duration: '6 weeks',
  },
];

export default function LearningRoadmaps() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Learning Roadmaps</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Structured paths to master digital skills</p>
        </div>

        {/* Roadmaps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmaps.map((roadmap) => (
            <Link key={roadmap.id} href={`/roadmaps/${roadmap.id}`}>
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-soft hover:shadow-soft-lg transition overflow-hidden h-full hover:translate-y-[-4px] duration-300 border border-gray-200 dark:border-gray-700">
                <div className="p-8">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{roadmap.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{roadmap.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{roadmap.description}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 my-6 py-6 border-y border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="text-2xl font-bold text-primary-600">{roadmap.levels}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Levels</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-secondary-600">{roadmap.courses}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Courses</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">{roadmap.duration}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Duration</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-green-600" />
                      <span>Beginner to Advanced</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-green-600" />
                      <span>Earn Certificate</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-green-600" />
                      <span>Lifetime Access</span>
                    </li>
                  </ul>

                  {/* CTA */}
                  <button className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
                    Start Roadmap
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition"
          >
            Explore All Roadmaps
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
