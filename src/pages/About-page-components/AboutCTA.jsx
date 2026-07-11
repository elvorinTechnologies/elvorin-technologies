import "./AboutCTA.css";

import { Link } from "react-router-dom";

import {

    Sparkles,

    ArrowRight,

    ShieldCheck,

    Bot,

    Globe,

    Workflow,

} from "lucide-react";

/* ==========================================================
                    TRUST BADGES
========================================================== */

const trustBadges = [

    {

        id:1,

        icon:<Bot size={22}/>,

        title:"AI Powered",

    },

    {

        id:2,

        icon:<Globe size={22}/>,

        title:"Premium Websites",

    },

    {

        id:3,

        icon:<Workflow size={22}/>,

        title:"Business Automation",

    },

    {

        id:4,

        icon:<ShieldCheck size={22}/>,

        title:"Secure & Scalable",

    }

];

function AboutCTA() {

    return (

    <section className="ab-cta-section">

        {/* ======================================
                    Background
        ====================================== */}

        <div className="ab-cta-grid"></div>

        <div className="ab-cta-glow"></div>

        {/* ======================================
                    Container
        ====================================== */}

        <div className="ab-cta-container">

            {/* ======================================
                        Header
            ====================================== */}

            <div className="ab-cta-header">

                <div className="ab-cta-badge">

                    <Sparkles size={16}/>

                    <span>

                        LET'S BUILD THE FUTURE

                    </span>

                </div>

                <h2 className="ab-cta-title">

                    Ready To Build

                    <span>

                        Your Next Digital Success?

                    </span>

                </h2>

                <p className="ab-cta-description">

                    Whether you're launching a startup, scaling a business,
                    or transforming your digital presence, our team is ready
                    to turn your vision into powerful digital experiences.

                </p>

            </div>

            {/* ======================================
                        AI ORB
            ====================================== */}

            {/* <div className="ab-cta-orb-wrapper">

                <div className="ab-cta-orb">

                    <div className="ab-cta-orb-ring ring-one"></div>

                    <div className="ab-cta-orb-ring ring-two"></div>

                    <div className="ab-cta-orb-core">

                        ELVORIN

                    </div>

                </div>

            </div> */}

            {/* ======================================
                        CTA BUTTONS
            ====================================== */}

            <div className="ab-cta-buttons">

                <Link

                    to="/contact"

                    className="ab-cta-primary"

                >

                    Start Your Project

                    <ArrowRight size={18}/>

                </Link>

                <Link

                    to="/contact"

                    className="ab-cta-secondary"

                >

                    Book Free Consultation

                </Link>

            </div>

        </div>

    </section>

);

}

export default AboutCTA;