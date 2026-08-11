import ServiceHero from "./Service-page-components/ServiceHero";
import ServicesGrid from "./Service-page-components/ServicesGrid";

import SEO from "../components/SEO";

function Services() {
  return (
    <>

      <SEO
        title="Services | Web Development, AI & Digital Solutions | Elvorin Technologies"
        description="Explore Elvorin Technologies services including web development,WordPress, AI automation, mobile apps, SEO, digital marketing and more.."
        keywords="WordPress, AI automation, mobile apps, SEO, digital marketing and more."
        canonical="https://elvorintech.com/services"
      />
      <ServiceHero />
      <ServicesGrid />
    </>
  );
}

export default Services;