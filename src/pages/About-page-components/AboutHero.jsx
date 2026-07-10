import "./AboutHero.css";

import { Link } from "react-router-dom";

import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  BriefcaseBusiness,
  Bot,
  Globe,
  MonitorSmartphone,
  ShieldCheck,
  Rocket,
  Layers3,
} from "lucide-react";

/* ==========================================================
                STATS
========================================================== */

const stats = [

    {
        id:1,
        number:"120+",
        title:"Projects Delivered",
        icon:<BriefcaseBusiness size={24}/>
    },

    {
        id:2,
        number:"95%",
        title:"Client Satisfaction",
        icon:<ShieldCheck size={24}/>
    },

    {
        id:3,
        number:"24/7",
        title:"Support",
        icon:<Rocket size={24}/>
    },

    {
        id:4,
        number:"100%",
        title:"Commitment",
        icon:<Layers3 size={24}/>
    }

];

/* ==========================================================
                FLOATING CARDS
========================================================== */

const floatingCards = [

    {
        id:1,
        icon:<Bot size={22}/>,
        title:"AI Solutions",
        description:"Intelligent automation powered by AI."
    },

    {
        id:2,
        icon:<Globe size={22}/>,
        title:"Web Development",
        description:"Modern websites built for performance."
    },

    {
        id:3,
        icon:<MonitorSmartphone size={22}/>,
        title:"UI / UX Design",
        description:"Beautiful digital experiences that convert."
    }

];

function AboutHero() {

        return (

        <section className="ab-hero-section">

            {/* ======================================
                    Background
            ======================================= */}

            <div className="ab-hero-grid"></div>

            <div className="ab-hero-glow"></div>

            <div className="ab-hero-overlay"></div>

            {/* ======================================
                    Container
            ======================================= */}

            <div className="ab-hero-container">

                {/* ======================================
                        LEFT
                ======================================= */}

                <div className="ab-hero-left">

                    {/* Breadcrumb */}

                    <div className="ab-hero-breadcrumb">

                        <Link to="/">

                            Home

                        </Link>

                        <ChevronRight size={16}/>

                        <span>

                            About

                        </span>

                    </div>

                    {/* Badge */}

                    <div className="ab-hero-badge">

                        <Sparkles size={16}/>

                        <span>

                            ABOUT ELVORIN TECHNOLOGIES

                        </span>

                    </div>

                    {/* Small Title */}

                    <h5 className="ab-hero-subtitle">

                        COMPANY STORY

                    </h5>

                    {/* Heading */}

                    <h1 className="ab-hero-heading">

                        <span>

                            Future-Ready

                        </span>

                        Digital Experiences

                        That Inspire

                        Innovation.

                    </h1>

                    {/* Description */}

                    <p className="ab-hero-description">

                        Elvorin Technologies delivers premium websites,
                        AI-powered solutions, automation systems,
                        and digital products designed to help ambitious
                        businesses scale faster with innovation,
                        performance, and exceptional user experiences.

                    </p>

                    {/* Buttons */}

                    <div className="ab-hero-buttons">

                        <Link
                            to="/contact"
                            className="ab-hero-btn-primary"
                        >

                            Start Your Project

                            <ArrowRight size={18}/>

                        </Link>

                        <Link
                            to="/services"
                            className="ab-hero-btn-secondary"
                        >

                            Explore Services

                        </Link>

                    </div>

                </div>

                {/* ======================================
                        RIGHT
                ======================================= */}

                <div className="ab-hero-right">

                    {/* AI Orb */}

                    <div className="ab-hero-orb">

                        <div className="ab-hero-orb-core"></div>

                        <div className="ab-hero-ring"></div>

                        <div className="ab-hero-ring ring-two"></div>

                    </div>

                    {/* Floating Cards */}

                    {

                        floatingCards.map((card)=>(

                            <div
                                key={card.id}
                                className={`ab-hero-card ab-card-${card.id}`}
                            >

                                <div className="ab-hero-card-icon">

                                    {card.icon}

                                </div>

                                <h4>

                                    {card.title}

                                </h4>

                                <p>

                                    {card.description}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default AboutHero;