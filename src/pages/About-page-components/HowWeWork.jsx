import "./HowWeWork.css";

import { Link } from "react-router-dom";

import {

    Sparkles,

    Search,

    Lightbulb,

    PenTool,

    Code2,

    Rocket,

    Headphones,

    ArrowRight,

    ChevronRight,

} from "lucide-react";

/* ==========================================================
                    WORKFLOW DATA
========================================================== */

const workflowData = [

    {

        id:1,

        number:"01",

        icon:<Search size={26}/>,

        title:"Discover",

        description:

        "We understand your business, audience, challenges, goals, and project requirements to build the right digital strategy.",

        duration:"1–2 Days"

    },

    {

        id:2,

        number:"02",

        icon:<Lightbulb size={26}/>,

        title:"Strategy",

        description:

        "Our team prepares the project roadmap, technology stack, UI strategy, and execution plan for maximum business impact.",

        duration:"2–3 Days"

    },

    {

        id:3,

        number:"03",

        icon:<PenTool size={26}/>,

        title:"Design",

        description:

        "We create premium UI/UX experiences with modern interfaces focused on usability, aesthetics, and conversions.",

        duration:"3–5 Days"

    },

    {

        id:4,

        number:"04",

        icon:<Code2 size={26}/>,

        title:"Development",

        description:

        "Our developers build fast, scalable, SEO-friendly, and secure digital products using modern technologies.",

        duration:"1–3 Weeks"

    },

    {

        id:5,

        number:"05",

        icon:<Rocket size={26}/>,

        title:"Launch",

        description:

        "After rigorous testing and optimization, we deploy your project with performance, security, and scalability in mind.",

        duration:"Go Live"

    },

    {

        id:6,

        number:"06",

        icon:<Headphones size={26}/>,

        title:"Support",

        description:

        "We continuously monitor, optimize, maintain, and improve your digital ecosystem to ensure long-term growth.",

        duration:"Ongoing"

    }

];

function HowWeWork() {
    return (

    <section className="ab-work-section">

        {/* ======================================
                    Background
        ====================================== */}

        <div className="ab-work-grid"></div>

        <div className="ab-work-glow"></div>

        {/* ======================================
                    Container
        ====================================== */}

        <div className="ab-work-container">

            {/* ======================================
                        Header
            ====================================== */}

            <div className="ab-work-header">

                <div className="ab-work-breadcrumb">

                    <Link to="/">

                        Home

                    </Link>

                    <ChevronRight size={15} />

                    <span>

                        How We Work

                    </span>

                </div>

                <div className="ab-work-badge">

                    <Sparkles size={16} />

                    <span>

                        OUR PROCESS

                    </span>

                </div>

                <h2 className="ab-work-title">

                    From Idea To

                    <span>

                        Digital Excellence

                    </span>

                </h2>

                <p className="ab-work-description">

                    Every successful project follows a structured process.
                    We combine strategy, creativity, technology, and continuous
                    collaboration to transform your vision into a premium digital experience.

                </p>

            </div>

            {/* ======================================
                        Workflow
            ====================================== */}

            <div className="ab-work-process">

                {/* SVG Connections */}

                <svg

                    className="ab-work-svg"

                    viewBox="0 0 1200 650"

                    preserveAspectRatio="none"

                >

                    <path
                        d="M170 120
                           C280 120 280 120 390 120
                           C520 120 520 120 630 120
                           C760 120 760 120 870 120
                           C930 120 930 240 870 310
                           C760 420 520 420 390 420
                           C280 420 280 420 170 420"
                    />

                </svg>

                {

                    workflowData.map((item)=>(

                        <div

                            key={item.id}

                            className={`ab-work-card work-${item.id}`}

                        >

                            <div className="ab-work-number">

                                {item.number}

                            </div>

                            <div className="ab-work-icon">

                                {item.icon}

                            </div>

                            <h3>

                                {item.title}

                            </h3>

                            <p>

                                {item.description}

                            </p>

                            <span className="ab-work-duration">

                                {item.duration}

                            </span>

                        </div>

                    ))

                }

            </div>

            {/* ======================================
                        CTA
            ====================================== */}

            <div className="ab-work-cta">

                <Link

                    to="/contact"

                    className="ab-work-button"

                >

                    Start Your Project

                    <ArrowRight size={18} />

                </Link>

            </div>

        </div>

    </section>

);

}

export default HowWeWork;   