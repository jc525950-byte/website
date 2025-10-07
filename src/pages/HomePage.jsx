import HeroSection from '../sections/HeroSection.jsx';
import PartnersSection from '../sections/PartnersSection.jsx';
import FeaturesSection from '../sections/FeaturesSection.jsx';
import SolutionsSection from '../sections/SolutionsSection.jsx';
import PricingSection from '../sections/PricingSection.jsx';
import TestimonialsSection from '../sections/TestimonialsSection.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import CallToActionSection from '../sections/CallToActionSection.jsx';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <SolutionsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CallToActionSection />
    </>
  );
}
