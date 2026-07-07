import "../styles/process.css";

import {
  Search,
  ClipboardCheck,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

/* ===========================
        Process Steps
=========================== */

const processSteps = [

  {
    id: "01",
    title: "Discovery",
    desc: "We understand your business goals, audience and project requirements to build the perfect digital strategy.",
    icon: <Search size={30} />,
  },

  {
    id: "02",
    title: "Strategy",
    desc: "We create a roadmap, define the user journey and choose the best technologies for your project.",
    icon: <ClipboardCheck size={30} />,
  },

  {
    id: "03",
    title: "UI / UX Design",
    desc: "Modern interfaces focused on user experience, accessibility and high conversion rates.",
    icon: <PenTool size={30} />,
  },

  {
    id: "04",
    title: "Development",
    desc: "Our developers build scalable, secure and lightning-fast websites using modern technologies.",
    icon: <Code2 size={30} />,
  },

  {
    id: "05",
    title: "Launch",
    desc: "After testing and optimization, your website goes live with complete deployment support.",
    icon: <Rocket size={30} />,
  },

  {
    id: "06",
    title: "Growth & Support",
    desc: "Continuous maintenance, SEO improvements and performance monitoring for long-term success.",
    icon: <TrendingUp size={30} />,
  },

];

function ProcessSection() {

  return (

    <section className="elv-pro-section">

      <div className="elv-pro-container">

        {/* ===========================
                Heading
        =========================== */}

        <div
          className="elv-pro-heading"
          data-aos="fade-up"
        >

          <span>

            OUR PROCESS

          </span>

          <h2>

            From Vision
            <br />
            To Digital Success.

          </h2>

          <p>

            Every successful project begins with a structured
            workflow. Our proven process ensures every website
            is strategic, scalable and built for long-term growth.

          </p>

        </div>

        {/* ===========================
                Process Wrapper
        =========================== */}

        <div
          className="elv-pro-workflow"
          data-aos="zoom-in"
        >

          {/* Background Glow */}

          <div className="elv-pro-glow"></div>

          {/* Center Core */}

          <div className="elv-pro-core">

            <div className="elv-pro-core-circle">

              <span>

                ELVORIN

              </span>

            </div>

          </div>

          {/* ===========================
                  Process Cards
          =========================== */}

          {processSteps.map((step, index) => (

            <div
              key={step.id}
              className={`elv-pro-card elv-pro-card-${index + 1}`}
            >

              {/* Connecting Line */}

              <span className="elv-pro-line"></span>

              {/* Number */}

              <div className="elv-pro-number">

                {step.id}

              </div>

              {/* Icon */}

              <div className="elv-pro-icon">

                {step.icon}

              </div>

              {/* Content */}

              <div className="elv-pro-content">

                <h3>

                  {step.title}

                </h3>

                <p>

                  {step.desc}

                </p>

              </div>

            </div>

          ))}

        </div>

        {/* ===========================
                CTA
        =========================== */}

        <div
          className="elv-pro-footer"
          data-aos="fade-up"
        >

          <button className="elv-pro-btn">

            Start Your Project

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </section>

  );

}

export default ProcessSection;