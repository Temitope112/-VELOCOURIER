
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import DeliveryCTA from "@/components/sections/DeliveryCTA";
import Footer from "@/components/layout/Footer";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <DeliveryCTA />
      <Footer />
    </main>
  );
}
