import "./ServicesGrid.css";

import {

    Globe,
    Bot,
    Palette,
    ShoppingCart,
    Smartphone,
    Search,
    Megaphone,
    PenTool,
    Server,
    ShieldCheck,
    Workflow,
    Code2,
    ArrowRight,

} from "lucide-react";
/* ==========================================================
                    SERVICES DATA
========================================================== */

const services = [

    {

        id: 1,

        number: "01",

        icon: <Globe size={28} />,

        title: "Website Development",

        description:
            "Premium business websites built for speed, performance and conversions."

    },

    {

        id: 2,

        number: "02",

        icon: <Bot size={28} />,

        title: "AI Solutions",

        description:
            "Custom AI chatbots, automation workflows and intelligent business tools."

    },

    {

        id: 3,

        number: "03",

        icon: <Palette size={28} />,

        title: "UI / UX Design",

        description:
            "Modern user experiences designed for engagement and business growth."

    },

    {

        id: 4,

        number: "04",

        icon: <ShoppingCart size={28} />,

        title: "E-Commerce",

        description:
            "Scalable online stores with secure payments and premium shopping experiences."

    },

    {

        id: 5,

        number: "05",

        icon: <Smartphone size={28} />,

        title: "Mobile Apps",

        description:
            "Cross-platform mobile applications for Android and iOS businesses."

    },

    {

        id: 6,

        number: "06",

        icon: <Search size={28} />,

        title: "SEO Optimization",

        description:
            "Technical SEO and content strategies that improve rankings and visibility."

    },

    {

        id: 7,

        number: "07",

        icon: <Megaphone size={28} />,

        title: "Digital Marketing",

        description:
            "Performance marketing campaigns that generate leads and measurable growth."

    },

    {

        id: 8,

        number: "08",

        icon: <PenTool size={28} />,

        title: "Brand Identity",

        description:
            "Professional branding systems that create a lasting business impression."

    },

    {

        id: 9,

        number: "09",

        icon: <Workflow size={28} />,

        title: "Business Automation",

        description:
            "Automate repetitive tasks and optimize operations with intelligent workflows."

    },

    {

        id: 10,

        number: "10",

        icon: <Server size={28} />,

        title: "Hosting & Cloud",

        description:
            "Reliable hosting, cloud deployment and infrastructure management."

    },

    {

        id: 11,

        number: "11",

        icon: <ShieldCheck size={28} />,

        title: "Website Maintenance",

        description:
            "Continuous updates, monitoring and security for uninterrupted performance."

    },

    {

        id: 12,

        number: "12",

        icon: <Code2 size={28} />,

        title: "Custom Software",

        description:
            "Tailor-made software solutions built specifically for your business."

    }

];

function ServicesGrid() {

    return (

        <>
            <section className="sergrid-section">

                {/* ==========================================
                    CONTAINER
        ========================================== */}

                <div className="sergrid-container">

                    {/* ======================================
                        HEADER
            ====================================== */}

                    <div className="sergrid-header">

                        <span className="sergrid-badge">

                            OUR EXPERTISE

                        </span>

                        <h2 className="sergrid-heading">

                            Premium Digital Services

                            <span>

                                Built For Modern Businesses

                            </span>

                        </h2>

                        <p className="sergrid-description">

                            We combine strategy, creativity and cutting-edge
                            technology to build digital experiences that help
                            businesses grow faster and stand out from the
                            competition.

                        </p>

                    </div>

                    {/* ======================================
                        SERVICES GRID
            ====================================== */}

                    <div className="sergrid-grid">

                        {

                            services.map((service) => (

                                <article

                                    key={service.id}

                                    className="sergrid-card"

                                >

                                    {/* Number */}

                                    <span className="sergrid-number">

                                        {service.number}

                                    </span>

                                    {/* Icon */}

                                    <div className="sergrid-icon">

                                        {service.icon}

                                    </div>

                                    {/* Content */}

                                    <div className="sergrid-content">

                                        <h3 className="sergrid-title">

                                            {service.title}

                                        </h3>

                                        <p className="sergrid-text">

                                            {service.description}

                                        </p>

                                    </div>

                                    

                                </article>

                            ))

                        }

                    </div>

                </div>

            </section>
        </>

    );

}

export default ServicesGrid;