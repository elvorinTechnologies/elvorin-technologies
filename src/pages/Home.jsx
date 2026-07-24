import Hero from "../components/Hero";
import TrustedSection from "../components/TrustedSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChoose from "../components/WhyChoose";  
import IndustriesSection from "../components/IndustriesSection";
import ProcessSection from "../components/ProcessSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";

import SEO from "../components/SEO";


function Home() {
  return (
    <>

      <SEO
        title="AI, Web Development & Digital Marketing | Elvorin Technologies"
        description="Elvorin Technologies delivers AI Automation, Web Development, SEO, Branding, Mobile Apps and Digital Marketing services for startups and businesses."
        keywords="AI Automation, Website Development, SEO Company, Digital Marketing, Branding"
        canonical="https://elvorintech.com/"
      />

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