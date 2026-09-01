import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Course | FirstStep Academy',
};

export default function CoursePage({ params }: { params: { id: string } }) {
  // Mock course data
  const course = {
    id: params.id,
    title: 'Web Development Fundamentals',
    description: 'Master the basics of web development and build your first website.',
    longDescription:
      'This comprehensive course covers everything you need to know to start your web development journey. From HTML basics to interactive JavaScript, youll learn through practical projects and real-world examples.',
    category: 'Web Development',
    difficulty: 'Beginner',
    duration: '4 weeks',
    students: 2500,
    rating: 4.9,
    image: '🌐',
    lessons: 12,
    instructor: 'Sarah Johnson',
    instructorImage: '👩‍🏫',
    lessons_list: [
      { id: 1, title: 'Introduction to HTML', duration: '45 min' },
      { id: 2, title: 'HTML Structure & Semantics', duration: '60 min' },
      { id: 3, title: 'CSS Styling Basics', duration: '90 min' },
      { id: 4, title: 'Responsive Design', duration: '75 min' },
      { id: 5, title: 'JavaScript Fundamentals', duration: '120 min' },
      { id: 6, title: 'DOM Manipulation', duration: '100 min' },
    ],
    whatYouLearn: [
      'Write semantic HTML5 markup',
      'Style websites with modern CSS',
      'Create interactive experiences with JavaScript',
      'Build responsive, mobile-first websites',
      'Use developer tools and debugging techniques',
      'Deploy your projects online',
    ],
    requirements: ['Basic computer skills', 'A text editor (VS Code recommended)', 'Curiosity and willingness to learn'],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header with Image */}
      <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/courses" className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 mb-6">
            <ArrowLeft size={20} />
            Back to Courses
          </Link>
          <div className="flex items-end gap-8">
            <div className="text-9xl">{course.image}</div>
            <div className="flex-1">
              <span className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold mb-4">{course.difficulty}</span>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-6 text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Course Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{course.longDescription}</p>
            </section>

            {/* What You'll Learn */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouLearn.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Curriculum */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Course Curriculum</h2>
              <div className="space-y-3">
                {course.lessons_list.map((lesson, i) => (
                  <div key={lesson.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </span>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{lesson.title}</h3>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{lesson.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Requirements</h2>
              <ul className="space-y-2">
                {course.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-primary-600">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Sidebar */}
          <div>
            {/* Course Card */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-soft p-6 sticky top-20 space-y-6">
              {/* Instructor */}
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Instructor</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{course.instructorImage}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{course.instructor}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expert Instructor</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="py-6 border-y border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{course.rating}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">2,543 reviews</p>
              </div>

              {/* CTA */}
              <button className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
                Enroll Now - Free
              </button>
              <button className="w-full py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:border-primary-600 hover:text-primary-600 transition">
                Add to Wishlist
              </button>

              {/* Info */}
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                <p>✓ Lifetime access</p>
                <p>✓ Downloadable resources</p>
                <p>✓ Certificate of completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
