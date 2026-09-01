'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Is FirstStep Academy really free?',
    answer: 'Yes! All our courses, tutorials, and resources are completely free. We believe everyone should have access to quality education.',
  },
  {
    id: 2,
    question: 'Do I need any prior experience?',
    answer: 'No! Our courses are designed for complete beginners. We start from the basics and gradually progress to more advanced topics.',
  },
  {
    id: 3,
    question: 'Can I earn certificates?',
    answer: 'Yes! After completing a course or learning roadmap, you can earn certificates that you can add to your portfolio and LinkedIn profile.',
  },
  {
    id: 4,
    question: 'How much time does each course take?',
    answer: 'It varies by course. Most beginner courses take 2-4 weeks if you dedicate 1-2 hours per day. You can go at your own pace.',
  },
  {
    id: 5,
    question: 'Is there community support?',
    answer: 'Absolutely! Join our forum to ask questions, share knowledge, and connect with other learners on their journey.',
  },
  {
    id: 6,
    question: 'Can I download course materials?',
    answer: 'Yes! You can download lessons, resources, templates, and guides to learn offline and refer back to them anytime.',
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Got questions? We've got answers</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 dark:text-gray-400 transition-transform ${expandedId === faq.id ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedId === faq.id && (
                <div className="px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
