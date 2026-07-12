import "./ServiceHero.css";

import serviceHeroImage from "../../assets/images/service-hero.jpg";

import {

    Sparkles,

    FolderKanban,

    Users,

    BadgeCheck,

} from "lucide-react";

/* ==========================================================
                    STATISTICS DATA
========================================================== */

const statistics = [

    {

        id: 1,

        number: "150+",

        title: "Projects Completed",

        icon: <FolderKanban size={20} />

    },

    {

        id: 2,

        number: "50+",

        title: "Happy Clients",

        icon: <Users size={20} />

    },

    {

        id: 3,

        number: "99%",

        title: "Client Satisfaction",

        icon: <BadgeCheck size={20} />

    }

];

function ServiceHero() {

    return (

        <>

            <section className="serhero-section">

                {/* ==========================================
                    BACKGROUND
        ========================================== */}

                <div className="serhero-grid"></div>

                <div className="serhero-glow"></div>

                {/* ==========================================
                    CONTAINER
        ========================================== */}

                <div className="serhero-container">

                    <div className="serhero-wrapper">

                        {/* ======================================
                            LEFT
                ====================================== */}

                        <div className="serhero-left">

                            {/* Badge */}

                            <div className="serhero-badge">

                                <Sparkles size={16} />

                                <span>

                                    Premium Digital Solutions

                                </span>

                            </div>

                            {/* Heading */}

                            <h1 className="serhero-title">

                                Engineering

                                <span>

                                    Digital Experiences

                                </span>

                                That Drive Growth

                            </h1>

                            {/* Description */}

                            <p className="serhero-description">

                                We create premium websites, AI solutions,
                                business automation, branding, SEO,
                                and digital marketing strategies that
                                help businesses grow faster with modern
                                technology.

                            </p>

                            {/* Statistics */}

                            

                        </div>

                        {/* ======================================
                            RIGHT
                ====================================== */}

                        <div className="serhero-right">

                            <div className="serhero-image-wrapper">

                                {/* Floating Card */}

                                <div className="serhero-floating-card serhero-card-top">

                                    <span>

                                        AI Powered

                                    </span>

                                </div>

                                {/* Image */}

                                <img

                                    src={serviceHeroImage}

                                    alt="Elvorin Premium Services"

                                    className="serhero-image"

                                />

                                {/* Floating Card */}

                                <div className="serhero-floating-card serhero-card-bottom">

                                    <span>

                                        Enterprise Quality

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>  
        </>

    );

}

export default ServiceHero;