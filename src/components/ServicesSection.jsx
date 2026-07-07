import "../styles/services.css";

import {
  ArrowRight,
  Globe,
  Bot,
  Palette,
  TrendingUp,
  Smartphone,
  Cloud,
} from "lucide-react";

import WebImage from "../assets/images/web-development.jpg";
import AIImage from "../assets/images/ai-solutions.jpg";
import UIUXImage from "../assets/images/uiux.jpg";
import SEOImage from "../assets/images/seo.jpg";
import MobileImage from "../assets/images/mobile-app.jpg";
import HostingImage from "../assets/images/hosting.jpg";

const services = [

  {
    title: "Website Development",
    desc: "Modern, responsive and high-converting business websites built for performance.",
    icon: <Globe size={34} />,
    image: WebImage,
    className: "elv-svc-large",
  },

  {
    title: "AI Solutions",
    desc: "AI automation, chatbots and intelligent workflows for business growth.",
    icon: <Bot size={32} />,
    image: AIImage,
    className: "elv-svc-wide",
  },

  {
    title: "UI / UX Design",
    desc: "Beautiful user experiences that improve engagement and conversions.",
    icon: <Palette size={28} />,
    image: UIUXImage,
  },

  {
    title: "SEO Optimization",
    desc: "Technical SEO and content strategies to improve visibility.",
    icon: <TrendingUp size={28} />,
    image: SEOImage,
  },

  {
    title: "Mobile App Development",
    desc: "Android & iOS applications built with modern technologies.",
    icon: <Smartphone size={28} />,
    image: MobileImage,
  },

  {
    title: "Hosting & Support",
    desc: "Secure hosting, maintenance and enterprise-grade support.",
    icon: <Cloud size={28} />,
    image: HostingImage,
  },

];

function ServicesSection() {

  return (

    <section className="elv-svc-section">

      <div className="elv-svc-container">

        {/* Heading */}

        <div
          className="elv-svc-heading"
          data-aos="fade-up"
        >

          <span>
            Our Services
          </span>

          <h2>

            Powerful Digital Solutions
            Built For Modern Businesses.

          </h2>

          <p>

            We combine creativity, technology and innovation
            to deliver premium digital experiences that help
            businesses grow faster.

          </p>

        </div>

        {/* Services Grid */}

        <div
          className="elv-svc-grid"
          data-aos="fade-up"
          data-aos-delay="150"
        >

          {services.map((service, index) => (

            <div
              key={index}
              className={`elv-svc-card ${service.className || ""}`}
            >

              {/* Image */}

              <div className="elv-svc-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

              {/* Overlay */}

              <div className="elv-svc-overlay"></div>

              {/* Content */}

              <div className="elv-svc-content">

                <div className="elv-svc-icon">

                  {service.icon}

                </div>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

                <button className="elv-svc-btn">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default ServicesSection;