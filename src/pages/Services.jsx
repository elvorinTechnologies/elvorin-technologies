import ServiceHero from "./Service-page-components/ServiceHero";
import ServicesGrid from "./Service-page-components/ServicesGrid";

import SEO from "../components/SEO";

function Services() {
  return (
    <>

      <SEO
        title="Web Development, AI Automation & SEO Services | Elvorin Technologies"
        description="Explore our professional AI Automation, Website Development, SEO, UI/UX, Branding and Digital Marketing services."
        keywords="Web Development Services, AI Automation Services, SEO Services"
        canonical="https://elvorintech.com/services"
      />
      <ServiceHero />
      <ServicesGrid />
    </>
  );
}

export default Services;