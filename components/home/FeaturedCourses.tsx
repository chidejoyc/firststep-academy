'use client';

import Link from 'next/link';
import { Clock, BarChart3, Award } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    description: 'Learn HTML, CSS, and JavaScript basics to build stunning websites.',
    image: '🌐',
    difficulty: 'Beginner',
    time: '4 weeks',
    students: 2500,
  },
  {
    id: 2,
    title: 'SEO Mastery for Beginners',
    description: 'Master search engine optimization and drive organic traffic to your content.',
    image: '🔍',
    difficulty: 'Beginner',
    time: '3 weeks',
    students: 1800,
  },
  {
    id: 3,
    title: 'Affiliate Marketing Blueprint',
    description: 'Learn how to build a profitable affiliate business from scratch.',
    image: '💰',
    difficulty: 'Beginner',
    time: '5 weeks',
    students: 3200,
  },
  {
    id: 4,
    title: 'Content Creation Masterclass',
    description: 'Create engaging content that converts readers into customers.',
    image: '✍️',
    difficulty: 'Beginner',
    time: '4 weeks',
    students: 1500,
  },
  {
    id: 5,
    title: 'AI Tools for Productivity',
    description: 'Discover and master the best AI tools to boost your productivity.',
    image: '🤖',
    difficulty: 'Beginner',
    time: '2 weeks',
    students: 4100,
  },
  {
    id: 6,
    title: 'Freelancing Essentials',
    description: 'Build a sustainable freelance career and earn from home.',
    image: '💼',
    difficulty: 'Beginner',
    time: '3 weeks',
    students: 2800,
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Courses</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Start learning digital skills with our most popular courses</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-soft hover:shadow-soft-lg transition overflow-hidden h-full hover:translate-y-[-4px] duration-300">
                {/* Image */}
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 h-40 flex items-center justify-center text-6xl">
                  {course.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full">
                      {course.difficulty}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{course.students.toLocaleString()} enrolled</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{course.description}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{course.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={16} />
                      <span>Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition"
          >
            Browse All Courses
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
