'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Web Developer',
    image: '👨‍💻',
    rating: 5,
    quote: 'FirstStep Academy helped me transition from beginner to landing my first freelance client. Highly recommended!',
  },
  {
    id: 2,
    name: 'Maria Santos',
    role: 'Content Creator',
    image: '👩‍💼',
    rating: 5,
    quote: 'The SEO course was incredibly practical. I improved my blog traffic by 300% in just 3 months.',
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Freelancer',
    image: '👨‍🎓',
    rating: 5,
    quote: 'Great content, supportive community, and best of all - completely free! A game-changer for beginners.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Real students, real results</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft p-8">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} fill="#FCD34D" className="text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonial.image}</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
