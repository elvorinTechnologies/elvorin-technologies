import "./ContactHero.css";
import contactHeroImage from "../../assets/images/contact-hero.webp";

import {

    Sparkles,

    Phone,

    Mail,

    MapPin,

    Globe,

    Bot,

    Orbit,

} from "lucide-react";

/* ==========================================================
                    CONTACT TAGS
========================================================== */

const contactTags = [

    {

        id: 1,

        icon: <Phone size={20} />,

        title: "Quick Response",

        description: "Replies within 24 hours."

    },

    {

        id: 2,

        icon: <Mail size={20} />,

        title: "Professional Support",

        description: "Dedicated business assistance."

    },

    {

        id: 3,

        icon: <Globe size={20} />,

        title: "Worldwide Service",

        description: "Serving clients globally."

    },

    {

        id: 4,

        icon: <Bot size={20} />,

        title: "AI Driven Solutions",

        description: "Modern digital innovation."

    }

];

function ContactHero() {
    return (

        <section className="contpage-section">

            {/* ======================================
                    Background
        ====================================== */}

            <div className="contpage-grid"></div>

            <div className="contpage-glow"></div>

            {/* ======================================
                    Container
        ====================================== */}

            <div className="contpage-container">

                {/* ======================================
                        LEFT
            ====================================== */}

                <div className="contpage-left">

                    <div className="contpage-badge">

                        <Sparkles size={16} />

                        <span>

                            CONTACT ELVORIN

                        </span>

                    </div>

                    <h1 className="contpage-title">

                        Let's Build

                        <span>

                            Something Amazing

                        </span>

                    </h1>

                    <p className="contpage-description">

                        Have an idea, a project, or simply want to connect?
                        We'd love to hear from you. Let's collaborate and
                        create intelligent digital experiences that help
                        your business grow and stay future-ready.

                    </p>

                    {/* ======================================
                            Contact Tags
                ====================================== */}

                    <div className="contpage-tags">

                        {

                            contactTags.map((item) => (

                                <div

                                    key={item.id}

                                    className="contpage-tag"

                                >

                                    <div className="contpage-icon">

                                        {item.icon}

                                    </div>

                                    <div className="contpage-tag-content">

                                        <h4>

                                            {item.title}

                                        </h4>

                                        <p>

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                </div>

                {/* ======================================
                        RIGHT
            ====================================== */}

                <div className="contpage-right">

                    <div className="contpage-right">

                        <div className="contpage-image-wrapper">

                            <img

                                src={contactHeroImage}

                                alt="Contact Hero"

                                className="contpage-image"

                            />

                            

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default ContactHero;