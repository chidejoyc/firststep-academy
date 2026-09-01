'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubscribed(true);
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {!subscribed ? (
          <>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-white/90 mb-8">
              Get weekly tips, course updates, and exclusive resources delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            <p className="text-sm text-white/80 mt-4">No spam. Unsubscribe anytime.</p>
          </>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <CheckCircle size={64} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Welcome aboard!</h3>
            <p className="text-xl text-white/90">Check your email for exclusive resources and our first newsletter.</p>
            <button
              onClick={() => setSubscribed(false)}
              className="text-white hover:text-white/80 underline font-medium mt-4"
            >
              Subscribe another email
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
