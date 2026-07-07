import Hero from "../components/Hero";
import TrustedSection from "../components/TrustedSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChoose from "../components/WhyChoose";  
import IndustriesSection from "../components/IndustriesSection";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";


function Home() {
  return (
    <>
      <Hero />
      <TrustedSection />
      <AboutSection />
      <ServicesSection />
      <WhyChoose />
      <IndustriesSection />
      <ProcessSection />
      <CTASection />
      <ContactSection />
    </>
  );
}

export default Home;