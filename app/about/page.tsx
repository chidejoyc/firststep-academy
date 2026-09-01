import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About FirstStep Academy',
  description: 'Learn more about our mission to democratize digital education',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About FirstStep Academy</h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-400">
          <p className="text-lg leading-relaxed">
            FirstStep Academy is a free online learning platform dedicated to helping beginners master digital skills, overcome their fears, build confidence, and start making money online.
          </p>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p>
              We believe that quality education should be accessible to everyone, regardless of their background or financial situation. Our mission is to democratize digital learning and provide a clear path for beginners to transition from novice to skilled professionals.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>Structured learning roadmaps for 10+ digital skill areas</li>
              <li>Free courses with practical, hands-on projects</li>
              <li>In-depth blog articles and tutorials</li>
              <li>AI tools directory with beginner-friendly reviews</li>
              <li>Resource library with templates, guides, and checklists</li>
              <li>Supportive community forum</li>
              <li>Certificates of completion for courses and roadmaps</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why FirstStep Academy?</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li><strong>100% Free:</strong> No hidden fees, no paywalls, no premium tiers for basic content</li>
              <li><strong>Beginner-Focused:</strong> Every course and article is designed with beginners in mind</li>
              <li><strong>Practical:</strong> Learn by doing with real-world projects and assignments</li>
              <li><strong>Supportive Community:</strong> Connect with other learners and get help when you need it</li>
              <li><strong>Transparent:</strong> Clear affiliate disclosures and honest product reviews</li>
              <li><strong>Quality Content:</strong> Original, well-researched, and regularly updated materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>Education for All: Breaking down barriers to learning</li>
              <li>Honesty: Transparent practices and genuine recommendations</li>
              <li>Quality: Excellence in every course and resource we create</li>
              <li>Community: Building a supportive network of learners</li>
              <li>Growth: Continuous improvement of our platform and content</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
