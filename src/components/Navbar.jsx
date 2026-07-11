import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    HiBars3,
    HiXMark,
} from "react-icons/hi2";

import Logo from "../assets/images/nav-icon.png";
import "../styles/navbar.css";

function Navbar() {

    /* ===============================
        STATES
    =============================== */

    const [mobileMenu, setMobileMenu] = useState(false);

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

                    <NavLink to="/services">
                        Services
                    </NavLink>

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

                    <NavLink
                        to="/services"
                        onClick={closeMenu}
                    >
                        Services
                    </NavLink>

                    {/* <NavLink
                        to="/portfolio"
                        onClick={closeMenu}
                    >
                        Portfolio
                    </NavLink> */}

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