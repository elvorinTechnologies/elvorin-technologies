import AboutHero from "./About-page-components/AboutHero";
import CompanyOverview from "./About-page-components/CompanyOverview";
import CoreValues from "./About-page-components/CoreValues";
import HowWeWork from "./About-page-components/HowWeWork";
import WhoWeAre from "./About-page-components/WhoWeAre";
import AboutCTA from "./About-page-components/AboutCTA"


function About() {
  return (
    <>

      <SEO
        title="About Elvorin Technologies | AI & Digital Solutions Company"
        description="Learn about Elvorin Technologies, our mission, vision, team and expertise in AI, Web Development, Branding and Digital Transformation."
        keywords="About Elvorin Technologies, AI Company, Web Agency"
        canonical="https://elvorintech.com/about"
      />
      <AboutHero />
      <CompanyOverview />
      <WhoWeAre />
      <HowWeWork />
      <CoreValues />
      <AboutCTA />
    </>
  );
}

export default About;