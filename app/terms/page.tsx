import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | FirstStep Academy',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: September 1, 2024</p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Agreement to Terms</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Use License</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Permission is granted to temporarily download one copy of the materials (information or software) on FirstStep Academy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 mb-6">
          <li>Modifying or copying the materials</li>
          <li>Using the materials for any commercial purpose or for any public display</li>
          <li>Attempting to decompile or reverse engineer any software contained on the website</li>
          <li>Removing any copyright or other proprietary notations from the materials</li>
          <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Disclaimer</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The materials on FirstStep Academy's website are provided on an 'as is' basis. FirstStep Academy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Limitations</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          In no event shall FirstStep Academy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FirstStep Academy's website, even if FirstStep Academy or an authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Accuracy of Materials</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The materials appearing on FirstStep Academy's website could include technical, typographical, or photographic errors. FirstStep Academy does not warrant that any of the materials on its website are accurate, complete, or current. FirstStep Academy may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Links</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          FirstStep Academy has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by FirstStep Academy of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Modifications</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          FirstStep Academy may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Governing Law</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </div>
    </div>
  );
}
