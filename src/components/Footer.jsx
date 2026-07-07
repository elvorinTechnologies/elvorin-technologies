import "../styles/footer.css";

import Logo from "../assets/images/nav-icon.png";

import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Globe,
} from "lucide-react";

import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
    FaXTwitter,
} from "react-icons/fa6";

/* ==========================================================
        COMPANY LINKS
========================================================== */

const companyLinks = [

    {
        id:1,
        title:"About Us",
        link:"#about",
    },

    {
        id:2,
        title:"Services",
        link:"#services",
    },

    {
        id:3,
        title:"Industries",
        link:"#industries",
    },

    {
        id:4,
        title:"Our Process",
        link:"#process",
    },

    {
        id:5,
        title:"Portfolio",
        link:"#portfolio",
    },

    {
        id:6,
        title:"Contact",
        link:"#contact",
    },

];

/* ==========================================================
        SERVICES
========================================================== */

const serviceLinks = [

    {
        id:1,
        title:"Website Development",
        link:"#",
    },

    {
        id:2,
        title:"UI / UX Design",
        link:"#",
    },

    {
        id:3,
        title:"AI Solutions",
        link:"#",
    },

    {
        id:4,
        title:"SEO Optimization",
        link:"#",
    },

    {
        id:5,
        title:"Digital Marketing",
        link:"#",
    },

    {
        id:6,
        title:"Website Maintenance",
        link:"#",
    },

];

/* ==========================================================
        QUICK LINKS
========================================================== */

const quickLinks = [

    {
        id:1,
        title:"Privacy Policy",
        link:"#",
    },

    {
        id:2,
        title:"Terms & Conditions",
        link:"#",
    },

    {
        id:3,
        title:"FAQs",
        link:"#",
    },

    {
        id:4,
        title:"Careers",
        link:"#",
    },

];

/* ==========================================================
        CONTACT INFO
========================================================== */

const contactInfo = [

    {

        id:1,

        icon:<Mail size={18}/>,

        title:"info@elvorintech.com",

        link:"mailto:info@elvorintech.com",

    },

    {

        id:2,

        icon:<Phone size={18}/>,

        title:"+91 93613 54283",

        link:"tel:+919361354283",

    },

    {

        id:3,

        icon:<MapPin size={18}/>,

        title:"Chidambaram, Tamil Nadu",

        link:"#",

    },

];

/* ==========================================================
        SOCIAL LINKS
========================================================== */

const socialLinks = [

    {

        id:1,

        icon:<FaLinkedinIn size={18}/>,

        link:"https://linkedin.com",

    },

    {

        id:2,

        icon:<FaInstagram size={18}/>,

        link:"https://instagram.com",

    },

    {

        id:3,

        icon:<FaFacebookF size={18}/>,

        link:"https://facebook.com",

    },

    {

        id:4,

        icon:<FaXTwitter size={18}/>,

        link:"https://x.com",

    },

];

function Footer() {

    return (

        <footer className="elv-footer">

            <div className="elv-footer-container">

                {/* ==========================================
                        CTA STRIP
                ========================================== */}

                <div
                    className="elv-footer-cta"
                    data-aos="fade-up"
                >

                    <div className="elv-footer-cta-content">

                        <span>

                            READY TO GROW YOUR BUSINESS?

                        </span>

                        <h2>

                            Let's Build Your Next
                            Digital Success Story.

                        </h2>

                        <p>

                            Premium websites, AI automation and
                            business-focused digital solutions
                            designed for long-term growth.

                        </p>

                    </div>

                    <button className="elv-footer-btn">

                        Start Your Project

                        <ArrowRight size={18}/>

                    </button>

                </div>

                {/* ==========================================
                        MAIN FOOTER
                ========================================== */}

                <div className="elv-footer-grid">

                    {/* ===========================
                            BRAND
                    =========================== */}

                    <div className="elv-footer-brand">

                        <img

                            src={Logo}

                            alt="Elvorin"

                        />

                        <p>

                            Elvorin Technologies delivers premium
                            websites, AI-powered solutions,
                            automation and digital experiences
                            that help businesses scale faster.

                        </p>

                        <div className="elv-footer-social">

                            {socialLinks.map((item)=>(

                                <a

                                    key={item.id}

                                    href={item.link}

                                    target="_blank"

                                    rel="noreferrer"

                                    className="elv-footer-social-icon"

                                >

                                    {item.icon}

                                </a>

                            ))}

                        </div>

                    </div>

                    {/* ===========================
                            COMPANY
                    =========================== */}

                    <div className="elv-footer-links">

                        <h3>

                            Company

                        </h3>

                        <ul>

                            {companyLinks.map((item)=>(

                                <li key={item.id}>

                                    <a href={item.link}>

                                        {item.title}

                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ===========================
                            SERVICES
                    =========================== */}

                    <div className="elv-footer-links">

                        <h3>

                            Services

                        </h3>

                        <ul>

                            {serviceLinks.map((item)=>(

                                <li key={item.id}>

                                    <a href={item.link}>

                                        {item.title}

                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ===========================
                            QUICK LINKS
                    =========================== */}

                    <div className="elv-footer-links">

                        <h3>

                            Resources

                        </h3>

                        <ul>

                            {quickLinks.map((item)=>(

                                <li key={item.id}>

                                    <a href={item.link}>

                                        {item.title}

                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* ===========================
                            CONTACT
                    =========================== */}

                    <div className="elv-footer-links">

                        <h3>

                            Contact

                        </h3>

                        <ul className="elv-footer-contact">

                            {contactInfo.map((item)=>(

                                <li key={item.id}>

                                    <a href={item.link}>

                                        <span>

                                            {item.icon}

                                        </span>

                                        {item.title}

                                    </a>

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

                {/* ==========================================
                        BOTTOM BAR
                ========================================== */}

                <div className="elv-footer-bottom">

                    <p>

                        © {new Date().getFullYear()} Elvorin Technologies.
                        All Rights Reserved.

                    </p>

                    <div className="elv-footer-bottom-links">

                        <a href="#">

                            Privacy Policy

                        </a>

                        <a href="#">

                            Terms of Service

                        </a>

                        <a href="#">

                            Sitemap

                        </a>

                    </div>

                </div>

            </div>

        </footer>

    );

}

export default Footer;