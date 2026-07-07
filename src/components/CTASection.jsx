import "../styles/cta.css";

import {
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    Users,
    BriefcaseBusiness,
    Award,
    Sparkles,
} from "lucide-react";

import CTAImage from "../assets/images/web-development.jpg";

/* ==========================================
        STATS
========================================== */

const stats = [

    {
        id: 1,
        icon: <BriefcaseBusiness size={22} />,
        number: "150+",
        title: "Projects Delivered",
    },

    {
        id: 2,
        icon: <Users size={22} />,
        number: "80+",
        title: "Happy Clients",
    },

    {
        id: 3,
        icon: <Award size={22} />,
        number: "99%",
        title: "Client Satisfaction",
    },

    {
        id: 4,
        icon: <CheckCircle2 size={22} />,
        number: "24/7",
        title: "Technical Support",
    },

];

function CTASection() {

    return (

        <section className="elv-cta-section">

            <div className="elv-cta-container">

                {/* ==========================================
                Background Elements
        ========================================== */}

                <div className="elv-cta-glow"></div>

                <div className="elv-cta-grid"></div>

                <span className="elv-shape elv-shape-1"></span>
                <span className="elv-shape elv-shape-2"></span>
                <span className="elv-shape elv-shape-3"></span>

                {/* ==========================================
                CTA CARD
        ========================================== */}

                <div
                    className="elv-cta-card"
                    data-aos="zoom-in"
                >

                    {/* ===========================
                  LEFT CONTENT
          =========================== */}

                    <div className="elv-cta-content">

                        {/* Badge */}

                        <span className="elv-cta-badge">

                            <Sparkles size={16} />

                            Let's Build Something Amazing

                        </span>

                        {/* Heading */}

                        <h2>

                            Ready To Transform
                            <br />

                            Your Business With
                            <span>

                                {" "}Modern Technology?

                            </span>

                        </h2>

                        {/* Description */}

                        <p>

                            From premium websites and AI automation to
                            scalable digital solutions, Elvorin helps
                            businesses accelerate growth with innovative
                            technology built for the future.

                        </p>

                        {/* Buttons */}

                        <div className="elv-cta-buttons">

                            <button className="elv-cta-primary">

                                Start Your Project

                                <ArrowRight size={18} />

                            </button>

                            <button className="elv-cta-secondary">

                                <CalendarDays size={18} />

                                Book Free Consultation

                            </button>

                        </div>

                    </div>

                    {/* ===========================
        RIGHT IMAGE
=========================== */}

                    <div className="elv-cta-image">

                        <img
                            src={CTAImage}
                            alt="Elvorin Technologies"
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default CTASection;