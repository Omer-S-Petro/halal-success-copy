import HeroSection from "@/components/HeroSection";
import BookOverview from "@/components/BookOverview";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BookOverview />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
