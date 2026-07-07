import "../styles/hero.css";

import {
  ArrowRight,
  Play,
  Sparkles,
  Globe,
  ShieldCheck,
  Bot,
  MonitorSmartphone,
  TrendingUp,
  Star,
  ChevronDown
} from "lucide-react";

function Hero() {

  return (

    <section className="hero">

      <div className="hero-container">

        {/* ================= LEFT ================= */}

        <div className="hero-left">

          <div className="hero-badge">

            <Sparkles size={18} />

            <span>
              AI Powered Digital Solutions
            </span>

          </div>

          <h1>

            Build

            <span> Premium Websites </span>

            That Drive

            <br />

            Business Growth.

          </h1>

          <p>

            We build premium websites, AI automation,
            SEO strategies and digital experiences
            that help businesses scale faster.

          </p>

          <div className="hero-buttons">

            <button className="primary-btn">

              Start Your Project

              <ArrowRight size={18} />

            </button>

            <button className="secondary-btn">

              <Play size={18} />

              View Portfolio

            </button>

          </div>

          {/* Stats */}

          <div className="hero-stats">

            <div>

              <h3>50+</h3>

              <span>Projects</span>

            </div>

            <div>

              <h3>100%</h3>

              <span>Client Satisfaction</span>

            </div>

            <div>

              <h3>24/7</h3>

              <span>Support</span>

            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="hero-right">

          <div className="dashboard">

            <div className="dashboard-header">

              <div className="dot red"></div>

              <div className="dot yellow"></div>

              <div className="dot green"></div>

            </div>

            <div className="dashboard-content">

              <div className="service-card">

                <MonitorSmartphone />

                <div>

                  <h4>Website Development</h4>

                  <span>Modern Responsive Websites</span>

                </div>

              </div>

              <div className="service-card">

                <Bot />

                <div>

                  <h4>AI Automation</h4>

                  <span>Smart Business Workflows</span>

                </div>

              </div>

              <div className="service-card">

                <TrendingUp />

                <div>

                  <h4>SEO Growth</h4>

                  <span>Rank Higher on Google</span>

                </div>

              </div>

              <div className="service-card">

                <ShieldCheck />

                <div>

                  <h4>Enterprise Security</h4>

                  <span>Secure & Reliable</span>

                </div>

              </div>

            </div>

          </div>

          {/* Floating Cards */}

          <div className="floating-card card-one">

            <Globe />

            <span>Global Ready</span>

          </div>

          <div className="floating-card card-two">

            <Star />

            <span>Premium Quality</span>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="scroll-down">

        <ChevronDown />

      </div>

    </section>

  );

}

export default Hero;