import "../styles/industries.css";

import {
  ArrowUpRight,
  Rocket,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Building,
  Factory,
  Landmark,
  Hotel,
  Truck,
  Scale,
  MonitorSmartphone,
} from "lucide-react";

/* ===========================
        Images
=========================== */

import StartupImg from "../assets/images/startup.jpg";
import CorporateImg from "../assets/images/corporate.jpg";
import HealthcareImg from "../assets/images/healthcare.jpg";
import EducationImg from "../assets/images/education.jpg";
import EcommerceImg from "../assets/images/ecommerce.jpg";
import RealEstateImg from "../assets/images/realestate.jpg";
import ManufacturingImg from "../assets/images/manufacturing.jpg";
import FinanceImg from "../assets/images/finance.jpg";
import HospitalityImg from "../assets/images/hospitality.jpg";
import LogisticsImg from "../assets/images/logistics.jpg";
import LegalImg from "../assets/images/legal.jpg";
import SaasImg from "../assets/images/saas.jpg";

/* ===========================
        Industries
=========================== */

const industries = [

  {
    title: "Healthcare",
    desc: "Digital healthcare platforms & hospital websites.",
    image: HealthcareImg,
    icon: <HeartPulse size={26} />,
    className: "elv-ind-large",
  },

  {
    title: "Education",
    desc: "Schools, colleges & e-learning platforms.",
    image: EducationImg,
    icon: <GraduationCap size={26} />,
    className: "elv-ind-small",
  },

  {
    title: "Startups",
    desc: "Launch fast with scalable digital products.",
    image: StartupImg,
    icon: <Rocket size={26} />,
    className: "elv-ind-tall",
  },

  {
    title: "Corporate",
    desc: "Enterprise websites & business solutions.",
    image: CorporateImg,
    icon: <Building2 size={26} />,
    className: "elv-ind-wide",
  },

  {
    title: "E-Commerce",
    desc: "Online stores that convert visitors into customers.",
    image: EcommerceImg,
    icon: <ShoppingCart size={26} />,
    className: "elv-ind-square",
  },

  {
    title: "Real Estate",
    desc: "Property portals & real estate branding.",
    image: RealEstateImg,
    icon: <Building size={26} />,
    className: "elv-ind-square",
  },

  {
    title: "Manufacturing",
    desc: "Industrial websites with modern automation.",
    image: ManufacturingImg,
    icon: <Factory size={26} />,
    className: "elv-ind-square",
  },

  {
    title: "Finance",
    desc: "Secure fintech & banking solutions.",
    image: FinanceImg,
    icon: <Landmark size={26} />,
    className: "elv-ind-large",
  },

  {
    title: "Hospitality",
    desc: "Hotels, restaurants & travel experiences.",
    image: HospitalityImg,
    icon: <Hotel size={26} />,
    className: "elv-ind-small",
  },

  {
    title: "Logistics",
    desc: "Transport, delivery & supply chain platforms.",
    image: LogisticsImg,
    icon: <Truck size={26} />,
    className: "elv-ind-wide",
  },

  {
    title: "Legal Services",
    desc: "Professional law firm & legal consultancy websites.",
    image: LegalImg,
    icon: <Scale size={26} />,
    className: "elv-ind-small",
  },

  {
    title: "IT & SaaS",
    desc: "Cloud software, AI & enterprise applications.",
    image: SaasImg,
    icon: <MonitorSmartphone size={26} />,
    className: "elv-ind-tall",
  },

];

function IndustriesSection() {

  return (

    <section className="elv-ind-section">

      <div className="elv-ind-container">

        {/* ===========================
                Heading
        =========================== */}

        <div
          className="elv-ind-heading"
          data-aos="fade-up"
        >

          <span>

            Industries We Serve

          </span>

          <h2>

            Digital Solutions
            Tailored For Every Industry.

          </h2>

          <p>

            From startups to enterprises, we build
            scalable, secure and high-performing digital
            experiences designed to solve industry-specific
            challenges.

          </p>

        </div>

        {/* ===========================
                Mosaic Grid
        =========================== */}

        <div
          className="elv-ind-grid"
          data-aos="fade-up"
          data-aos-delay="150"
        >

          {industries.map((industry, index) => (

            <article
              key={index}
              className={`elv-ind-card ${industry.className}`}
            >

              {/* Background Image */}

              <div className="elv-ind-image">

                <img
                  src={industry.image}
                  alt={industry.title}
                />

              </div>

              {/* Overlay */}

              <div className="elv-ind-overlay"></div>

              {/* Content */}

              <div className="elv-ind-content">

                <div className="elv-ind-icon">

                  {industry.icon}

                </div>

                <h3>

                  {industry.title}

                </h3>

                <p>

                  {industry.desc}

                </p>

                {/* <button className="elv-ind-btn">

                  Explore

                  <ArrowUpRight size={18} />

                </button> */}

              </div>

            </article>

          ))}

        </div>

        {/* ===========================
                Bottom CTA
        =========================== */}

        <div
          className="elv-ind-footer"
          data-aos="fade-up"
        >

          {/* <button className="elv-ind-main-btn">

            View All Industries

            <ArrowUpRight size={20} />

          </button> */}

        </div>

      </div>

    </section>

  );

}

export default IndustriesSection;