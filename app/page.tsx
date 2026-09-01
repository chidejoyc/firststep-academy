import HeroSection from '@/components/home/HeroSection';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import LatestArticles from '@/components/home/LatestArticles';
import LearningRoadmaps from '@/components/home/LearningRoadmaps';
import Testimonials from '@/components/home/Testimonials';
import NewsletterSignup from '@/components/home/NewsletterSignup';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <LearningRoadmaps />
      <LatestArticles />
      <Testimonials />
      <FAQ />
      <NewsletterSignup />
    </>
  );
}
