import "./AboutHero.css";

import { Link } from "react-router-dom";

import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  Briefcase,
  Users,
  ShieldCheck,
  Trophy,
} from "lucide-react";

/* ==========================================================
        TRUST DATA
========================================================== */

const trustData = [

  {
    id: 1,
    icon: <Briefcase size={26} />,
    number: "120+",
    title: "Projects Delivered",
  },

  {
    id: 2,
    icon: <Users size={26} />,
    number: "95%",
    title: "Client Satisfaction",
  },

  {
    id: 3,
    icon: <ShieldCheck size={26} />,
    number: "24/7",
    title: "Dedicated Support",
  },

  {
    id: 4,
    icon: <Trophy size={26} />,
    number: "100%",
    title: "Commitment",
  },

];

function AboutHero() {

    return (

        <section className="about-page-hero">

            {/* =====================================
                    Background
            ====================================== */}

            <div className="about-page-grid"></div>

            <div className="about-page-glow"></div>

            {/* =====================================
                    Container
            ====================================== */}

            <div className="about-page-container">

                {/* =====================================
                        LEFT
                ====================================== */}

                <div className="about-page-left">

                    {/* Breadcrumb */}

                    <div className="about-page-breadcrumb">

                        <Link to="/">Home</Link>

                        <ChevronRight size={15}/>

                        <span>About</span>

                    </div>

                    {/* Badge */}

                    <div className="about-page-badge">

                        <Sparkles size={16}/>

                        <span>

                            COMPANY STORY

                        </span>

                    </div>

                    {/* Heading */}

                    <h1>

                        Engineering

                        <span>

                            Future-Ready

                        </span>

                        Digital Experiences

                        <br/>

                        That Create

                        Lasting Impact.

                    </h1>

                    {/* Description */}

                    <p>

                        At Elvorin Technologies, we transform ideas
                        into premium digital experiences through
                        innovative web development, AI-powered
                        solutions, automation, and modern technology
                        that helps businesses grow confidently.

                    </p>

                    {/* Buttons */}

                    <div className="about-page-buttons">

                        <Link
                            to="/contact"
                            className="about-page-btn-primary"
                        >

                            Start Your Project

                            <ArrowRight size={18}/>

                        </Link>

                        <Link
                            to="/services"
                            className="about-page-btn-secondary"
                        >

                            Explore Services

                        </Link>

                    </div>

                </div>

                {/* =====================================
                        RIGHT
                ====================================== */}

                <div className="about-page-right">

                    {/* Main Visual */}

                    <div className="about-page-image">

                        <img
                            src="/images/about-hero.webp"
                            alt="Elvorin Technologies"
                        />

                    </div>

                    {/* Floating Card 1 */}

                    <div className="about-page-card card-one">

                        <h3>

                            AI Solutions

                        </h3>

                        <p>

                            Smart automation &
                            intelligent workflows.

                        </p>

                    </div>

                    {/* Floating Card 2 */}

                    <div className="about-page-card card-two">

                        <h3>

                            Web Excellence

                        </h3>

                        <p>

                            Modern websites built
                            for speed & growth.

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default AboutHero;