import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | FirstStep Academy',
};

export default function AffiliateDisclosure() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Affiliate Disclosure</h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 mb-8">
          <p className="text-blue-900 dark:text-blue-400 font-semibold">Important Notice:</p>
          <p className="text-blue-900 dark:text-blue-400 mt-2">
            FirstStep Academy may earn a commission from affiliate links featured in reviews, recommendations, and resource pages.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What Are Affiliate Links?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Affiliate links are unique URLs that track when you click through to a third-party website. If you make a purchase after clicking an affiliate link, FirstStep Academy may receive a small commission at no additional cost to you.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Where We Use Affiliate Links</h2>
        <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 mb-6 space-y-2">
          <li>AI Tools Directory - Links to paid tools like Midjourney, Copy.ai, etc.</li>
          <li>Product Reviews - Recommendations for software, courses, and services</li>
          <li>Resource Pages - Links to tools and resources we recommend</li>
          <li>Blog Articles - Relevant product recommendations within guides</li>
          <li>Course Content - Recommended tools for course projects</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Our Commitment to Transparency</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We only recommend products and services we genuinely believe will benefit you. When we share affiliate links, we clearly disclose this relationship. We prioritize your interests above earning commissions.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Your Rights</h2>
        <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 mb-6 space-y-2">
          <li>You can choose to purchase directly from the provider without using our affiliate link</li>
          <li>Using our affiliate link does not affect the price you pay</li>
          <li>You have the right to know about our affiliate relationships</li>
          <li>You can contact us with any questions about affiliate links</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          If you have any questions about our affiliate relationships or would like to know more about a specific disclosure, please contact us at: support@firststepacademy.com
        </p>
      </div>
    </div>
  );
}
