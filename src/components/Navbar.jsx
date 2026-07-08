import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    HiBars3,
    HiXMark,
    HiChevronDown,
} from "react-icons/hi2";

import Logo from "../assets/images/nav-icon.png";
import "../styles/navbar.css";

function Navbar() {

    /* ===============================
        STATES
    =============================== */

    const [mobileMenu, setMobileMenu] = useState(false);

    const [servicesOpen, setServicesOpen] = useState(false);

    const [navbarScrolled, setNavbarScrolled] = useState(false);

    /* ===============================
        SCROLL EFFECT
    =============================== */

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 40) {

                setNavbarScrolled(true);

            } else {

                setNavbarScrolled(false);

            }

        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    /* ===============================
        BODY SCROLL LOCK
    =============================== */

    useEffect(() => {

        document.body.style.overflow = mobileMenu
            ? "hidden"
            : "auto";

        return () => {

            document.body.style.overflow = "auto";

        };

    }, [mobileMenu]);

    /* ===============================
        HELPERS
    =============================== */

    const closeMenu = () => {

        setMobileMenu(false);

        setServicesOpen(false);

    };

    /* ===============================
        JSX
    =============================== */

    return (

        <header
            className={
                navbarScrolled
                    ? "navbar scrolled"
                    : "navbar"
            }
        >

            <div className="nav-container">

                <NavLink
                    to="/"
                    className="logo"
                    onClick={closeMenu}
                >

                    <img
                        src={Logo}
                        alt="Elvorin Technologies"
                    />

                </NavLink>


                <nav className="desktop-menu">

                    <NavLink to="/">
                        Home
                    </NavLink>

                    <NavLink to="/about">
                        About
                    </NavLink>

                    {/* ===============================
                SERVICES MEGA MENU
          =============================== */}

                    <div
                        className="mega-parent"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >

                        <button className="mega-trigger">

                            <span>Services</span>

                            <HiChevronDown
                                className={
                                    servicesOpen
                                        ? "rotate"
                                        : ""
                                }
                            />

                        </button>

                        <div
                            className={
                                servicesOpen
                                    ? "mega-menu active"
                                    : "mega-menu"
                            }
                        >

                            {/* Column 1 */}

                            <div className="mega-column">

                                <h4>Development</h4>

                                <NavLink to="/services/web-development">
                                    Website Development
                                </NavLink>

                                <NavLink to="/services/wordpress">
                                    WordPress Development
                                </NavLink>

                                <NavLink to="/services/ecommerce">
                                    E-Commerce
                                </NavLink>

                                <NavLink to="/services/web-app">
                                    Web Applications
                                </NavLink>

                            </div>

                            {/* Column 2 */}

                            <div className="mega-column">

                                <h4>AI Solutions</h4>

                                <NavLink to="/services/ai-chatbot">
                                    AI Chatbot
                                </NavLink>

                                <NavLink to="/services/automation">
                                    Workflow Automation
                                </NavLink>

                                <NavLink to="/services/api">
                                    API Integration
                                </NavLink>

                                <NavLink to="/services/consulting">
                                    AI Consulting
                                </NavLink>

                            </div>

                            {/* Column 3 */}

                            <div className="mega-column">

                                <h4>Marketing</h4>

                                <NavLink to="/services/seo">
                                    SEO
                                </NavLink>

                                <NavLink to="/services/google-ads">
                                    Google Ads
                                </NavLink>

                                <NavLink to="/services/social-media">
                                    Social Media Marketing
                                </NavLink>

                                <NavLink to="/services/branding">
                                    Branding
                                </NavLink>

                            </div>

                        </div>

                    </div>

                    {/* <NavLink to="/portfolio">
                        Portfolio
                    </NavLink> */}

                    <NavLink to="/contact">
                        Contact
                    </NavLink>

                </nav>

                {/* ===============================
              CTA BUTTON
        =============================== */}

                <NavLink
                    to="/contact"
                    className="nav-btn"
                >
                    Let's Talk
                </NavLink>

                {/* ===============================
              MOBILE MENU ICON
        =============================== */}

                <button
                    className="menu-toggle"
                    onClick={() =>
                        setMobileMenu(!mobileMenu)
                    }
                >

                    {

                        mobileMenu

                            ?

                            <HiXMark />

                            :

                            <HiBars3 />

                    }

                </button>
                {/* ===============================
            OVERLAY
      =============================== */}

                <div
                    className={mobileMenu ? "overlay active" : "overlay"}
                    onClick={closeMenu}
                ></div>

                {/* ===============================
            MOBILE DRAWER
      =============================== */}

                <aside
                    className={
                        mobileMenu
                            ? "mobile-menu open"
                            : "mobile-menu"
                    }
                >

                    <div className="mobile-header">

                        <img
                            src={Logo}
                            alt="Elvorin Technologies"
                        />

                        <button
                            className="close-btn"
                            onClick={closeMenu}
                        >

                            <HiXMark />

                        </button>

                    </div>

                    <NavLink
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                    >
                        About
                    </NavLink>

                    {/* ===============================
              MOBILE SERVICES
        =============================== */}

                    <div className="mobile-services">

                        <button
                            className="mobile-service-btn"
                            onClick={() =>
                                setServicesOpen(!servicesOpen)
                            }
                        >

                            <span>Services</span>

                            <HiChevronDown
                                className={
                                    servicesOpen ? "rotate" : ""
                                }
                            />

                        </button>

                        <div
                            className={
                                servicesOpen
                                    ? "mobile-submenu open"
                                    : "mobile-submenu"
                            }
                        >

                            <NavLink
                                to="/services/web-development"
                                onClick={closeMenu}
                            >
                                Website Development
                            </NavLink>

                            <NavLink
                                to="/services/wordpress"
                                onClick={closeMenu}
                            >
                                WordPress Development
                            </NavLink>

                            <NavLink
                                to="/services/ecommerce"
                                onClick={closeMenu}
                            >
                                E-Commerce Development
                            </NavLink>

                            <NavLink
                                to="/services/web-app"
                                onClick={closeMenu}
                            >
                                Web Applications
                            </NavLink>

                            <NavLink
                                to="/services/ai-chatbot"
                                onClick={closeMenu}
                            >
                                AI Chatbot
                            </NavLink>

                            <NavLink
                                to="/services/automation"
                                onClick={closeMenu}
                            >
                                Workflow Automation
                            </NavLink>

                            <NavLink
                                to="/services/api"
                                onClick={closeMenu}
                            >
                                API Integration
                            </NavLink>

                            <NavLink
                                to="/services/seo"
                                onClick={closeMenu}
                            >
                                SEO
                            </NavLink>

                        </div>

                    </div>

                    <NavLink
                        to="/portfolio"
                        onClick={closeMenu}
                    >
                        Portfolio
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="mobile-btn"
                        onClick={closeMenu}
                    >
                        Let's Talk
                    </NavLink>

                </aside>
            </div>
        </header>

    );

}

export default Navbar;