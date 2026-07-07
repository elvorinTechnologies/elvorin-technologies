import "../styles/contact.css";

import { useRef } from "react";

import emailjs from "@emailjs/browser";

import {
    Mail,
    Phone,
    MapPin,
    Clock3,
    ArrowRight,
    Send,
    Globe,
} from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

// arrays...



const services = [

    "Website Development",

    "UI / UX Design",

    "AI Solutions",

    "E-Commerce Development",

    "Mobile App Development",

    "SEO Optimization",

    "Digital Marketing",

    "Brand Identity",

    "Website Maintenance",

    "Hosting & Support",

    "Custom Web Applications",

    "Other",

];

/* ==========================================================
        CONTACT INFO
========================================================== */

const contactInfo = [

    {

        id: 1,

        icon: <Mail size={22} />,

        title: "Email Address",

        value: "info@elvorintech.com",

    },

    {

        id: 2,

        icon: <Phone size={22} />,

        title: "Phone Number",

        value: "+91 9361354283",

    },

    {

        id: 3,

        icon: <MapPin size={22} />,

        title: "Office Location",

        value: "chidambaram, Tamil Nadu, India",

    },

    // {

    //     id: 4,

    //     icon: <Clock3 size={22} />,

    //     title: "Working Hours",

    //     value: "Mon - Sat | 9:00 AM - 7:00 PM",

    // },

];

/* ==========================================================
        SOCIAL LINKS
========================================================== */
const socialLinks = [

    {
        id: 1,
        icon: <FaLinkedinIn size={20} />,
        url: "https://linkedin.com/company/elvorin",
    },

    {
        id: 2,
        icon: <FaInstagram size={20} />,
        url: "https://instagram.com/elvorin",
    },

    {
        id: 3,
        icon: <FaFacebookF size={20} />,
        url: "https://facebook.com/elvorin",
    },

];

function ContactSection() {

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(

            "service_kuve3gu",

            "template_fmjgm09",

            form.current,

            "rGNuLCLDjnkGolWMr"

        )

            .then(() => {

                alert("Message Sent Successfully!");

                form.current.reset();

            })

            .catch((error) => {

                console.log(error);

                alert("Failed to send message.");

            });

    };


    return (

        <section className="elv-contact-section">

            <div className="elv-contact-container">

                {/* ===========================
                        Heading
                =========================== */}

                <div
                    className="elv-contact-heading"
                    data-aos="fade-up"
                >

                    <span>

                        CONTACT US

                    </span>

                    <h2>

                        Let's Build Something
                        <br />

                        Extraordinary Together.

                    </h2>

                    <p>

                        Have a project in mind? We'd love to hear
                        your ideas. Tell us about your business and
                        we'll craft a solution that drives real
                        growth.

                    </p>

                </div>

                {/* ===========================
                        Contact Grid
                =========================== */}

                <div
                    className="elv-contact-grid"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >

                    {/* ======================================
                            LEFT
                    ====================================== */}

                    <div className="elv-contact-left">

                        <div className="elv-contact-card">

                            <h3>

                                Get In Touch

                            </h3>

                            <p>

                                We're always excited to discuss new
                                ideas, creative projects and digital
                                opportunities.

                            </p>

                            {/* Contact Cards */}

                            <div className="elv-contact-list">

                                {contactInfo.map((item) => (

                                    <div
                                        key={item.id}
                                        className="elv-contact-item"
                                    >

                                        <div className="elv-contact-icon">

                                            {item.icon}

                                        </div>

                                        <div className="elv-contact-content">

                                            <h4>

                                                {item.title}

                                            </h4>

                                            <span>

                                                {item.value}

                                            </span>

                                        </div>

                                    </div>

                                ))}

                            </div>

                            {/* Social */}

                            <div className="elv-contact-social">

                                <h4>

                                    Follow Us

                                </h4>

                                <div className="elv-social-wrapper">

                                    {socialLinks.map((item) => (

                                        <a

                                            key={item.id}

                                            href={item.url}

                                            className="elv-social-btn"

                                        >

                                            {item.icon}

                                        </a>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ======================================
                            RIGHT
                    ====================================== */}

                    <div className="elv-contact-right">

                        <div className="elv-form-card">

                            <h3>

                                Send a Message

                            </h3>

                            <form ref={form} onSubmit={sendEmail} className="elv-contact-form">

                                {/* Row */}

                                <div className="elv-form-row">

                                    <div className="elv-input-group">

                                        <input

                                            type="text"

                                            name="user_name"

                                            placeholder="Full Name"

                                        />

                                    </div>

                                    <div className="elv-input-group">

                                        <input

                                            type="email"

                                            name="user_email"

                                            placeholder="Business Email"

                                        />

                                    </div>

                                </div>

                                {/* Row */}

                                <div className="elv-form-row">

                                    <div className="elv-input-group">

                                        <input

                                            type="tel"

                                            name="user_phone"

                                            placeholder="Phone Number"

                                        />

                                    </div>

                                    <div className="elv-input-group">

                                        <select name="service"
                                            defaultValue=""
                                        >

                                            <option
                                                value=""
                                                disabled
                                            >

                                                Select Service

                                            </option>

                                            {services.map((service, index) => (

                                                <option
                                                    key={index}
                                                    value={service}
                                                >

                                                    {service}

                                                </option>

                                            ))}

                                        </select>

                                    </div>

                                </div>

                                {/* Message */}

                                <div className="elv-input-group">

                                    <textarea

                                        name="message"

                                        placeholder="Tell us about your project..."

                                    ></textarea>
                                </div>

                                {/* Button */}

                                <button

                                    type="submit"

                                    className="elv-contact-btn"

                                >

                                    Send Message

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default ContactSection;