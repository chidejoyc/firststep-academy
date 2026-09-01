import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | FirstStep Academy',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: September 1, 2024</p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Introduction</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          FirstStep Academy ("we" or "us" or "our") operates the www.firststepacademy.com website (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Information Collection and Use</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          We collect several different types of information for various purposes to provide and improve our Site and services.
        </p>
        <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 mb-6">
          <li>Personal Data: Email address, name, profile information</li>
          <li>Usage Data: Device information, IP address, browser type, pages visited</li>
          <li>Cookies: Tracking and analytics cookies</li>
          <li>Google Analytics: Web traffic analysis</li>
          <li>Google AdSense: Advertisement serving and tracking</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Use of Data</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">FirstStep Academy uses the collected data for various purposes:</p>
        <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 mb-6">
          <li>To provide and maintain our Site</li>
          <li>To notify you about changes to our Site</li>
          <li>To allow you to participate in interactive features</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so we can improve our Site</li>
          <li>To monitor the usage of our Site</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Security of Data</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The security of your data is important to us but remember that no method of transmission over the Internet is 100% secure. We strive to use commercially acceptable means to protect your Personal Data, but we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          If you have any questions about this Privacy Policy, please contact us at: support@firststepacademy.com
        </p>
      </div>
    </div>
  );
}
