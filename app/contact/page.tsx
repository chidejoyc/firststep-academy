import { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | FirstStep Academy',
  description: 'Get in touch with our team. We\'d love to hear from you.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2 text-center">Contact Us</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12">We'd love to hear from you. Send us a message!</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 text-center">
            <Mail size={40} className="text-primary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <a href="mailto:support@firststepacademy.com" className="text-primary-600 dark:text-primary-400 hover:text-primary-700">
              support@firststepacademy.com
            </a>
          </div>

          {/* Response Time */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 text-center">
            <Phone size={40} className="text-secondary-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
            <p className="text-gray-600 dark:text-gray-400">24-48 hours</p>
          </div>

          {/* Community */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 text-center">
            <MapPin size={40} className="text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
            <p className="text-gray-600 dark:text-gray-400">Ask in our forum</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-8 max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
