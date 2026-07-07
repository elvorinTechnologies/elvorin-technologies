import "../styles/whychoose.css";

import {
  Bot,
  ShieldCheck,
  Gauge,
  Palette,
  Headphones,
  Search,
  ArrowRight,
} from "lucide-react";

import MacbookFrame from "../assets/images/macbook.jpg";
// import WebsiteScreen from "../assets/images/website-screen.png";

const features = [

  {
    id: 1,
    title: "AI Solutions",
    desc: "Smart AI automation & intelligent workflows.",
    icon: <Bot size={22} />,
    className: "node-ai",
  },

  {
    id: 2,
    title: "Enterprise Security",
    desc: "Modern architecture with enterprise protection.",
    icon: <ShieldCheck size={22} />,
    className: "node-security",
  },

  {
    id: 3,
    title: "High Performance",
    desc: "Fast loading & Core Web Vitals optimized.",
    icon: <Gauge size={22} />,
    className: "node-performance",
  },

  {
    id: 4,
    title: "Premium UI / UX",
    desc: "Beautiful interfaces users love.",
    icon: <Palette size={22} />,
    className: "node-design",
  },

  {
    id: 5,
    title: "SEO Optimized",
    desc: "Built for visibility and organic growth.",
    icon: <Search size={22} />,
    className: "node-seo",
  },

  {
    id: 6,
    title: "Dedicated Support",
    desc: "Reliable technical support whenever you need it.",
    icon: <Headphones size={22} />,
    className: "node-support",
  },

];
function WhyChoose() {

  return (

    <section className="elv-why">

      <div className="elv-why-container">

        {/* ===========================
                  Heading
          =========================== */}

        <div
          className="elv-why-heading"
          data-aos="fade-up"
        >

          <span>

            WHY CHOOSE ELVORIN

          </span>

          <h2>

            We Don't Just Build Websites.
            <br />
            We Build Digital Growth Systems.

          </h2>

          <p>

            Every solution we create is engineered for
            performance, scalability, security and long-term
            business growth.

          </p>

        </div>

        <div className="elv-showcase">

          <div className="elv-showcase-glow"></div>

          {/* MacBook */}

          <div className="elv-macbook">

            <img
              src={MacbookFrame}
              alt="MacBook"
              className="elv-macbook-frame"
            />

            {/* Website Screen */}

            <div className="elv-screen">

              {/* <img
                src={WebsiteScreen}
                alt="Elvorin Website"
              /> */}

            </div>

          </div>

          {/* Feature Nodes */}

          {features.map((item) => (

            <div
              key={item.id}
              className={`elv-node ${item.className}`}
            >

              <span className="elv-node-line"></span>

              <div className="elv-node-card">

                <div className="elv-node-icon">

                  {item.icon}

                </div>

                <div className="elv-node-content">

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="elv-why-cta">

          <button className="elv-why-btn">

            Explore Our Solutions

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>

  );

}

export default WhyChoose;