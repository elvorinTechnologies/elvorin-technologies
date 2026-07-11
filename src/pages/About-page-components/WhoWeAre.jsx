import "./WhoWeAre.css";

import { Link } from "react-router-dom";

import {

    Sparkles,

    Target,

    Eye,

    Rocket,

    ArrowRight,

    ChevronRight,

} from "lucide-react";

/* ==========================================================
                    TIMELINE DATA
========================================================== */

const whoWeAreData = [

    {

        id:1,

        icon:<Target size={26}/>,

        title:"Our Mission",

        description:

        "To empower businesses with premium digital experiences, AI-powered solutions, and innovative technologies that accelerate sustainable business growth."

    },

    {

        id:2,

        icon:<Eye size={26}/>,

        title:"Our Vision",

        description:

        "To become a globally trusted technology partner by delivering world-class digital products that inspire innovation and create long-term value."

    },

    {

        id:3,

        icon:<Rocket size={26}/>,

        title:"Our Future",

        description:

        "Our vision extends beyond websites. We are building an intelligent ecosystem of AI, automation, cloud technologies, and scalable digital platforms for the future."

    }

];

function WhoWeAre() {
    return (

    <section className="ab-who-section">

        {/* ======================================
                Background
        ====================================== */}

        <div className="ab-who-grid"></div>

        <div className="ab-who-glow"></div>

        {/* ======================================
                Container
        ====================================== */}

        <div className="ab-who-container">

            {/* ======================================
                    Header
            ====================================== */}

            <div className="ab-who-header">

                <div className="ab-who-breadcrumb">

                    <Link to="/">

                        Home

                    </Link>

                    <ChevronRight size={15} />

                    <span>

                        Who We Are

                    </span>

                </div>

                <div className="ab-who-badge">

                    <Sparkles size={16} />

                    <span>

                        OUR PURPOSE

                    </span>

                </div>

                <h2 className="ab-who-title">

                    Turning Ideas Into

                    <span>

                        Digital Excellence

                    </span>

                </h2>

                <p className="ab-who-description">

                    We believe every successful business starts with a bold vision.
                    At Elvorin Technologies, we combine creativity, technology,
                    and innovation to build intelligent digital solutions that
                    empower businesses to grow with confidence.

                </p>

            </div>

            {/* ======================================
                    Timeline
            ====================================== */}

            <div className="ab-who-timeline">

                <div className="ab-who-line"></div>

                {

                    whoWeAreData.map((item) => (

                        <div

                            key={item.id}

                            className="ab-who-item"

                        >

                            <div className="ab-who-dot">

                                {item.icon}

                            </div>

                            <div className="ab-who-card">

                                <div className="ab-who-card-number">

                                    0{item.id}

                                </div>

                                <h3 className="ab-who-card-title">

                                    {item.title}

                                </h3>

                                <p className="ab-who-card-description">

                                    {item.description}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

            {/* ======================================
                    CTA
            ====================================== */}

            <div className="ab-who-cta">

                <Link

                    to="/contact"

                    className="ab-who-button"

                >

                    Start Your Project

                    <ArrowRight size={18} />

                </Link>

            </div>

        </div>

    </section>

);

}

export default WhoWeAre;