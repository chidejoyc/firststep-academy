import { Metadata } from 'next';
import { ArrowRight, BookOpen, Users, Trophy, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard | FirstStep Academy',
  description: 'Track your learning progress, view certificates, and manage your profile.',
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Welcome back!</h1>
          <p className="text-gray-600 dark:text-gray-400">Here's your learning progress overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Courses in Progress</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
              </div>
              <BookOpen size={32} className="text-primary-600" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total XP</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">2,450</p>
              </div>
              <Zap size={32} className="text-secondary-600" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Certificates Earned</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">2</p>
              </div>
              <Trophy size={32} className="text-yellow-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Daily Streak</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">7 days</p>
              </div>
              <Users size={32} className="text-orange-500" />
            </div>
          </div>
        </div>

        {/* Current Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Courses in Progress</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 hover:shadow-soft-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Web Development Fundamentals</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Lesson {i} of 12</p>
                    </div>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">Beginner</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="text-gray-900 dark:text-white font-medium">{i * 20}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${i * 20}%` }}></div>
                    </div>
                  </div>
                  <Link href={`/courses/web-dev-${i}`} className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium flex items-center gap-1 transition">
                    Continue Learning <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Badges & Achievements */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Achievements</h2>
            <div className="space-y-4">
              {[
                { icon: '🏆', name: 'First Lesson', desc: 'Completed first lesson' },
                { icon: '⭐', name: 'Rising Star', desc: '100 XP earned' },
                { icon: '🔥', name: '3-Day Streak', desc: 'Learned 3 days in a row' },
              ].map((badge, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{badge.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{badge.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{badge.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
