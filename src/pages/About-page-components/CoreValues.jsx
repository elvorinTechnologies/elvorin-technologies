import "./CoreValues.css";

import { Link } from "react-router-dom";

import {

    Sparkles,

    Infinity,

    Lightbulb,

    ShieldCheck,

    Gem,

    Handshake,

    Rocket,

    HeartHandshake,

    ChevronRight,

} from "lucide-react";

/* ==========================================================
                    CORE VALUES DATA
========================================================== */

const coreValuesData = [

    {

        id:1,

        icon:<Lightbulb size={26}/>,

        title:"Innovation",

        description:

        "We embrace creativity and continuously explore modern technologies to build future-ready digital solutions."

    },

    {

        id:2,

        icon:<Gem size={26}/>,

        title:"Excellence",

        description:

        "Every project is crafted with precision, premium quality, and attention to every detail."

    },

    {

        id:3,

        icon:<ShieldCheck size={26}/>,

        title:"Integrity",

        description:

        "Transparency, honesty, and trust are at the core of every client relationship we build."

    },

    {

        id:4,

        icon:<Rocket size={26}/>,

        title:"Future Ready",

        description:

        "We build scalable digital ecosystems designed to evolve with tomorrow's technology."

    },

    {

        id:5,

        icon:<HeartHandshake size={26}/>,

        title:"Customer First",

        description:

        "Understanding our clients' vision and delivering measurable business value is always our highest priority."

    },

    {

        id:6,

        icon:<Handshake size={26}/>,

        title:"Growth",

        description:

        "We believe long-term partnerships and continuous innovation drive sustainable business success."

    }

];

function CoreValues() {
    return (

    <section className="ab-values-section">

        {/* ======================================
                    Background
        ====================================== */}

        <div className="ab-values-grid"></div>

        <div className="ab-values-glow"></div>

        {/* ======================================
                    Container
        ====================================== */}

        <div className="ab-values-container">

            {/* ======================================
                        Header
            ====================================== */}

            <div className="ab-values-header">

                <div className="ab-values-breadcrumb">

                    <Link to="/">

                        Home

                    </Link>

                    <ChevronRight size={15}/>

                    <span>

                        Core Values

                    </span>

                </div>

                <div className="ab-values-badge">

                    <Sparkles size={16}/>

                    <span>

                        OUR CORE VALUES

                    </span>

                </div>

                <h2 className="ab-values-title">

                    Values That Shape

                    <span>

                        Every Innovation

                    </span>

                </h2>

                <p className="ab-values-description">

                    Our culture is built around innovation, trust,
                    collaboration and continuous improvement.
                    These principles guide every project,
                    every decision, and every client relationship.

                </p>

            </div>

            

            <div className="ab-values-quote">

                <h3>

                    "Engineering Trust Through Innovation."

                </h3>

            </div>

        </div>

    </section>

);

}

export default CoreValues;