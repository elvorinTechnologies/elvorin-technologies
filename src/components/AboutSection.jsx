import "../styles/about.css";

import AboutImage from "../assets/images/about-image.webp";

import {
  ArrowRight,
  BadgeCheck,
  Globe,
  Sparkles,
  ShieldCheck,
  Rocket,
} from "lucide-react";

function AboutSection() {

  return (

    <section className="about">

      <div className="about-container">

        {/* ================= LEFT ================= */}

        <div
          className="about-image"
          data-aos="fade-right"
        >

          <div className="image-glow"></div>

          <img
            src={AboutImage}
            alt="Elvorin Technologies"
          />

          {/* Floating Card 1 */}

          <div className="floating-box box-one">

            <Rocket size={20} />

            <div>

              <h4>Innovation</h4>

              <span>Future Ready</span>

            </div>

          </div>

          {/* Floating Card 2 */}

          <div className="floating-box box-two">

            <ShieldCheck size={20} />

            <div>

              <h4>Secure</h4>

              <span>Enterprise Grade</span>

            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div
          className="about-content"
          data-aos="fade-left"
        >

          {/* Badge */}

          <div className="about-badge">

            <Sparkles size={18} />

            <span>Who We Are</span>

          </div>

          {/* Heading */}

          <h2>

            Building

            <span> Future-Ready </span>

            Digital Experiences.

          </h2>

          {/* Description */}

          <p>

            At Elvorin Technologies, we create premium websites,
            AI-powered business solutions, and digital experiences
            that help startups, businesses, and enterprises
            grow with confidence.

          </p>

          {/* Features */}

          <div className="about-features">

            <div className="feature-item">

              <BadgeCheck size={20} />

              <span>Premium Website Development</span>

            </div>

            <div className="feature-item">

              <Globe size={20} />

              <span>AI & Business Automation</span>

            </div>

            <div className="feature-item">

              <BadgeCheck size={20} />

              <span>SEO & Performance Optimization</span>

            </div>

            <div className="feature-item">

              <ShieldCheck size={20} />

              <span>Secure & Scalable Solutions</span>

            </div>

          </div>

          {/* Stats */}

          
          {/* Button */}

          <button className="about-btn">

            Learn More

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>

  );

}

export default AboutSection;