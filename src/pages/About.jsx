import AboutHero from "./About-page-components/AboutHero";
import CompanyOverview from "./About-page-components/CompanyOverview";
import CoreValues from "./About-page-components/CoreValues";
import HowWeWork from "./About-page-components/HowWeWork";
import WhoWeAre from "./About-page-components/WhoWeAre";
import AboutCTA from "./About-page-components/AboutCTA"


function About() {
  return (
    <>
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