import { Hero } from '../components/Hero';
import { PartnerBar } from '../components/PartnerBar';
import { ProductFeatures } from '../components/ProductFeatures';
import { ComparisonMatrix } from '../components/ComparisonMatrix';
import { WomenSafety } from '../components/WomenSafety';
import { HowItWorks } from '../components/HowItWorks';
import { Faq } from '../components/Faq';
import { Waitlist } from '../components/Waitlist';

export function LandingPage() {
  return (
    <>
      <Hero />
      <PartnerBar />
      <ProductFeatures />
      <ComparisonMatrix />
      <WomenSafety />
      <HowItWorks />
      <Faq />
      <Waitlist />
    </>
  );
}
