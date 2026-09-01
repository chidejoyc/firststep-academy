import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, BarChart3, Users, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Online Courses | FirstStep Academy',
  description: 'Learn digital skills with our free, beginner-friendly courses. Web development, SEO, affiliate marketing, and more.',
};

const courses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    description: 'Learn HTML, CSS, and JavaScript basics to build stunning websites.',
    category: 'Web Development',
    difficulty: 'Beginner',
    duration: '4 weeks',
    students: 2500,
    rating: 4.9,
    image: '🌐',
    lessons: 12,
  },
  {
    id: 2,
    title: 'SEO Mastery for Beginners',
    description: 'Master search engine optimization and drive organic traffic to your content.',
    category: 'SEO',
    difficulty: 'Beginner',
    duration: '3 weeks',
    students: 1800,
    rating: 4.8,
    image: '🔍',
    lessons: 10,
  },
  {
    id: 3,
    title: 'Affiliate Marketing Blueprint',
    description: 'Learn how to build a profitable affiliate business from scratch.',
    category: 'Marketing',
    difficulty: 'Beginner',
    duration: '5 weeks',
    students: 3200,
    rating: 4.9,
    image: '💰',
    lessons: 15,
  },
  {
    id: 4,
    title: 'Content Creation Masterclass',
    description: 'Create engaging content that converts readers into customers.',
    category: 'Content',
    difficulty: 'Beginner',
    duration: '4 weeks',
    students: 1500,
    rating: 4.7,
    image: '✍️',
    lessons: 12,
  },
  {
    id: 5,
    title: 'AI Tools for Productivity',
    description: 'Discover and master the best AI tools to boost your productivity.',
    category: 'AI/Tools',
    difficulty: 'Beginner',
    duration: '2 weeks',
    students: 4100,
    rating: 4.9,
    image: '🤖',
    lessons: 8,
  },
  {
    id: 6,
    title: 'Freelancing Essentials',
    description: 'Build a sustainable freelance career and earn from home.',
    category: 'Business',
    difficulty: 'Beginner',
    duration: '3 weeks',
    students: 2800,
    rating: 4.8,
    image: '💼',
    lessons: 10,
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Free Courses</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Learn digital skills from industry experts. All courses are completely free.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {['All', 'Web Development', 'SEO', 'Marketing', 'Content', 'AI/Tools', 'Business'].map((filter) => (
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

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-soft hover:shadow-soft-lg transition overflow-hidden h-full hover:translate-y-[-8px] duration-300 cursor-pointer">
                {/* Image */}
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 h-48 flex items-center justify-center text-6xl">
                  {course.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full">
                      {course.difficulty}
                    </span>
                    <span className="text-xs font-semibold text-yellow-600 dark:text-yellow-400">⭐ {course.rating}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2">
                    Enroll Now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
