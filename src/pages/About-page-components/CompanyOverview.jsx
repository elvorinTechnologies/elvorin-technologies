import "./CompanyOverview.css";

import {

    Cpu,

    Globe,

    Bot,

    PenTool,

    Megaphone,

    Workflow,

    Rocket,

    Sparkles,

    ChevronRight,

} from "lucide-react";

import { Link } from "react-router-dom";

/* ==========================================================
                    NETWORK DATA
========================================================== */

const overviewNodes = [

    {

        id:1,

        icon:<Bot size={24}/>,

        title:"AI Solutions",

        description:"Smart AI-powered automation."

    },

    {

        id:2,

        icon:<Globe size={24}/>,

        title:"Web Development",

        description:"Fast, scalable web experiences."

    },

    {

        id:3,

        icon:<PenTool size={24}/>,

        title:"UI / UX Design",

        description:"Elegant user-first interfaces."

    },

    {

        id:4,

        icon:<Workflow size={24}/>,

        title:"Automation",

        description:"Streamlined business workflows."

    },

    {

        id:5,

        icon:<Megaphone size={24}/>,

        title:"Digital Marketing",

        description:"SEO, Ads & growth strategies."

    },

    {

        id:6,

        icon:<Cpu size={24}/>,

        title:"Technology",

        description:"Modern development ecosystem."

    }

];

/* ==========================================================
                    CORE INFORMATION
========================================================== */

const companyCore = {

    title:"ELVORIN",

    subtitle:"Digital Innovation Hub",

    description:

    "Building intelligent digital ecosystems through innovation, technology, automation, and premium user experiences."

};

function CompanyOverview() {
        return (

        <section className="ab-com-overview-section">

            {/* ======================================
                    Background
            ======================================= */}

            <div className="ab-com-overview-grid"></div>

            <div className="ab-com-overview-glow"></div>

            {/* ======================================
                    Container
            ======================================= */}

            <div className="ab-com-overview-container">

                {/* ======================================
                        Header
                ======================================= */}

                <div className="ab-com-overview-header">

                    <div className="ab-com-overview-breadcrumb">

                        <Link to="/">

                            Home

                        </Link>

                        <ChevronRight size={15}/>

                        <span>

                            Company Overview

                        </span>

                    </div>

                    <div className="ab-com-overview-badge">

                        <Sparkles size={16}/>

                        <span>

                            COMPANY OVERVIEW

                        </span>

                    </div>

                    <h2 className="ab-com-overview-title">

                        Building Intelligent

                        <span>

                            Digital Ecosystems

                        </span>

                    </h2>

                    <p className="ab-com-overview-description">

                        Every solution we create is connected by innovation,
                        technology, strategy, and measurable business growth.
                        Our ecosystem helps brands build faster, scale smarter,
                        and stay future-ready.

                    </p>

                </div>

                {/* ======================================
                        NETWORK
                ======================================= */}

                <div className="ab-com-overview-network">

                    {/* SVG CONNECTIONS */}

                    <svg

                        className="ab-com-overview-svg"

                        viewBox="0 0 900 900"

                    >

                        <line x1="450" y1="450" x2="450" y2="170"/>

                        <line x1="450" y1="450" x2="690" y2="280"/>

                        <line x1="450" y1="450" x2="690" y2="620"/>

                        <line x1="450" y1="450" x2="450" y2="730"/>

                        <line x1="450" y1="450" x2="210" y2="620"/>

                        <line x1="450" y1="450" x2="210" y2="280"/>

                    </svg>

                    {/* ======================================
                            CORE
                    ======================================= */}

                    <div className="ab-com-overview-core">

                        <div className="ab-com-overview-core-circle">

                            <Rocket size={38}/>

                        </div>

                        <h3>

                            {companyCore.title}

                        </h3>

                        <p>

                            {companyCore.subtitle}

                        </p>

                    </div>

                    {/* ======================================
                            NODES
                    ======================================= */}

                    {

                        overviewNodes.map((nodes)=>(

                            <div

                                key={nodes.id}

                                className={`ab-com-overview-node nodes-${nodes.id}`}

                            >

                                <div className="ab-com-overview-node-icon">

                                    {nodes.icon}

                                </div>

                                <h4>

                                    {nodes.title}

                                </h4>

                                <p>

                                    {nodes.description}

                                </p>

                            </div>

                        ))

                    }

                </div>

                {/* ======================================
                        FOOTER
                ======================================= */}

                {/* <div className="ab-com-overview-footer">

                    <span>

                        Future

                    </span>

                    <span>

                        Innovation

                    </span>

                    <span>

                        Technology

                    </span>

                    <span>

                        Growth

                    </span>

                </div> */}

            </div>

        </section>

    );

}

export default CompanyOverview;