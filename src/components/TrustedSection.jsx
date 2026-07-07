import "../styles/trusted.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaAws,
  FaFigma,
  FaRobot,
  FaFacebook,
  FaShoppingCart,
} from "react-icons/fa";

import {
  SiCloudflare,
  SiGooglecloud,
  SiStripe,
} from "react-icons/si";

const technologies = [

  {
    icon: <FaReact />,
    name: "React",
    desc: "Frontend Framework",
  },

  {
    icon: <FaWordpress />,
    name: "WordPress",
    desc: "CMS Development",
  },

  {
    icon: <FaNodeJs />,
    name: "Node.js",
    desc: "Backend Runtime",
  },

  {
    icon: <FaRobot />,
    name: "OpenAI",
    desc: "AI Integration",
  },

  {
    icon: <FaAws />,
    name: "AWS",
    desc: "Cloud Platform",
  },

  {
    icon: <SiGooglecloud />,
    name: "Google Cloud",
    desc: "Cloud Infrastructure",
  },

  {
    icon: <SiCloudflare />,
    name: "Cloudflare",
    desc: "Performance & Security",
  },

  {
    icon: <SiStripe />,
    name: "Stripe",
    desc: "Online Payments",
  },

  {
    icon: <FaShoppingCart />,
    name: "WooCommerce",
    desc: "E-Commerce Platform",
  },

  {
    icon: <FaWordpress />,
    name: "Elementor",
    desc: "WordPress Builder",
  },

  {
    icon: <FaFigma />,
    name: "Figma",
    desc: "UI / UX Design",
  },

  {
    icon: <FaFacebook />,
    name: "Meta",
    desc: "Marketing Platform",
  },

];

function TrustedSection() {

  useEffect(() => {

    AOS.init({

      duration:1000,

      once:true,

      offset:120,

      easing:"ease-out-cubic",

    });

  }, []);

  return (

    <section className="trusted">

      <div className="trusted-container">

        {/* Heading */}

        <div  className="trusted-heading" data-aos="fade-up">

          <span>
            Trusted Technologies
          </span>

          <h2>
            Built With Modern Technologies Trusted Worldwide.
          </h2>

          <p>
            We leverage industry-leading platforms, cloud services,
            AI tools and modern development frameworks to build
            scalable digital solutions.
          </p>

        </div>

        {/* Marquee */}

        <div className="marquee"
    data-aos="fade-up"
    data-aos-delay="250">

          <div className="marquee-track">

            {[...technologies, ...technologies].map((item, index) => (

              <div
                className="tech-card"
                key={index}
              >

                <div className="tech-icon">

                  {item.icon}

                </div>

                <div className="tech-content">

                  <h4>{item.name}</h4>

                  <span>{item.desc}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default TrustedSection;