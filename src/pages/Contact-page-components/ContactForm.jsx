import "./ContactForm.css";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";



import {

    Mail,

    Phone,

    MapPin,

    Clock3,

    Globe,

    Briefcase,

    Wallet,

    Send,

} from "lucide-react";

import {

    FaLinkedinIn,

    FaInstagram,

    FaFacebookF,

} from "react-icons/fa6";

/* ==========================================================
                    CONTACT INFORMATION
========================================================== */

const contactInfo = [

    {

        id:1,

        icon:<Mail size={20}/>,

        title:"Email",

        value:"info@elvorintech.com"

    },

    {

        id:2,

        icon:<Phone size={20}/>,

        title:"Phone",

        value:"+91 93613 54283"

    },

    {

        id:3,

        icon:<MapPin size={20}/>,

        title:"Location",

        value:"Chidambaram, Tamil Nadu"

    },

    {

        id:4,

        icon:<Clock3 size={20}/>,

        title:"Working Hours",

        value:"Mon - Sat | 9:00 AM - 6:00 PM"

    }

];

/* ==========================================================
                    SERVICES
========================================================== */

const services=[

    "Website Development",

    "UI / UX Design",

    "AI Solutions",

    "Business Automation",

    "Mobile App Development",

    "E-Commerce",

    "SEO",

    "Digital Marketing",

    "Brand Identity",

    "Hosting & Maintenance",

    "Custom Software",

    "Other"

];

/* ==========================================================
                    BUDGET
========================================================== */

const budgets=[

    "Below ₹25,000",

    "₹25,000 - ₹50,000",

    "₹50,000 - ₹1,00,000",

    "₹1,00,000 - ₹3,00,000",

    "Above ₹3,00,000"

];

/* ==========================================================
                    SOCIAL LINKS
========================================================== */

const socialLinks=[

    {

        id:1,

        icon:<FaLinkedinIn size={18}/>,

        url:"https://linkedin.com"

    },

    {

        id:2,

        icon:<FaInstagram size={18}/>,

        url:"https://instagram.com"

    },

    {

        id:3,

        icon:<FaFacebookF size={18}/>,

        url:"https://facebook.com"

    }

];

function ContactForm(){

    const form=useRef(null);

    const [loading,setLoading]=useState(false);

    const [success,setSuccess]=useState(false);

    const [error,setError]=useState("");
/* ==========================================================
                    EMAILJS CONFIG
========================================================== */

const SERVICE_ID = "service_kuve3gu";

const TEMPLATE_ID = "template_fmjgm09";

const PUBLIC_KEY = "rGNuLCLDjnkGolWMr";

/* ==========================================================
                    SEND EMAIL
========================================================== */

const sendEmail = async (e) => {

    e.preventDefault();

    setError("");

    setSuccess(false);

    /* ==========================================
                VALIDATION
    ========================================== */

    const formData = new FormData(form.current);

    const name = formData.get("user_name")?.trim();

    const email = formData.get("user_email")?.trim();

    const phone = formData.get("user_phone")?.trim();

    const service = formData.get("service")?.trim();

    const message = formData.get("message")?.trim();

    if (

        !name ||

        !email ||

        !phone ||

        !service ||

        !message

    ){

        setError("Please fill all required fields.");

        return;

    }

    const emailRegex =

        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){

        setError("Please enter a valid email address.");

        return;

    }

    try{

        setLoading(true);

        await emailjs.sendForm(

            SERVICE_ID,

            TEMPLATE_ID,

            form.current,

            PUBLIC_KEY

        );

        setSuccess(true);

        form.current.reset();

    }

    catch(error){

        console.error(error);

        setError(

            "Failed to send message. Please try again."

        );

    }

    finally{

        setLoading(false);

    }

};
return (

    <section className="contform-section">

        {/* ==========================================
                    BACKGROUND
        ========================================== */}

        <div className="contform-grid"></div>

        <div className="contform-glow"></div>

        {/* ==========================================
                    CONTAINER
        ========================================== */}

        <div className="contform-container">

            {/* ==========================================
                        HEADER
            ========================================== */}

            <div className="contform-header">

                <span className="contform-badge">

                    Get In Touch

                </span>

                <h2 className="contform-title">

                    Let's Build Something Amazing Together

                </h2>

                <p className="contform-description">

                    Whether you're launching a startup, scaling your
                    business, or transforming digitally, our team is
                    ready to help you build modern, high-performing
                    digital solutions.

                </p>

            </div>

            {/* ==========================================
                        WRAPPER
            ========================================== */}

            <div className="contform-wrapper">

                {/* ======================================
                            LEFT
                ====================================== */}

                <div className="contform-left">

                    <div className="contform-card">

                        <h3>

                            Contact Information

                        </h3>

                        <p>

                            Reach out anytime.
                            We'll get back to you within
                            24 hours.

                        </p>

                        {/* ==========================
                                INFO
                        ========================== */}

                        <div className="contform-list">

                            {

                                contactInfo.map((item)=>(

                                    <div

                                        key={item.id}

                                        className="contform-item"

                                    >

                                        <div className="contform-icon">

                                            {item.icon}

                                        </div>

                                        <div className="contform-content">

                                            <h4>

                                                {item.title}

                                            </h4>

                                            <span>

                                                {item.value}

                                            </span>

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                        {/* ==========================
                                SOCIAL
                        ========================== */}

                        <div className="contform-social">

                            <h4>

                                Follow Us

                            </h4>

                            <div className="contform-social-wrapper">

                                {

                                    socialLinks.map((item)=>(

                                        <a

                                            key={item.id}

                                            href={item.url}

                                            target="_blank"

                                            rel="noopener noreferrer"

                                            className="contform-social-btn"

                                        >

                                            {item.icon}

                                        </a>

                                    ))

                                }

                            </div>

                        </div>

                    </div>

                </div>

                {/* ======================================
                            RIGHT
                ====================================== */}

                <div className="contform-right">

                    <div className="contform-form-card">

                        <h3>

                            Send Us A Message

                        </h3>

                        <p>

                            Fill out the form below and
                            we'll contact you shortly.

                        </p>

                        <form

                            ref={form}

                            onSubmit={sendEmail}

                            className="contform-form"

                        >
                                                        {/* ==========================================
                                        NAME & EMAIL
                            ========================================== */}

                            <div className="contform-row">

                                <div className="contform-group">

                                    <label>

                                        Full Name

                                    </label>

                                    <input

                                        type="text"

                                        name="user_name"

                                        placeholder="John Doe"

                                        required

                                    />

                                </div>

                                <div className="contform-group">

                                    <label>

                                        Business Email

                                    </label>

                                    <input

                                        type="email"

                                        name="user_email"

                                        placeholder="john@example.com"

                                        required

                                    />

                                </div>

                            </div>

                            {/* ==========================================
                                        PHONE & COMPANY
                            ========================================== */}

                            <div className="contform-row">

                                <div className="contform-group">

                                    <label>

                                        Phone Number

                                    </label>

                                    <input

                                        type="tel"

                                        name="user_phone"

                                        placeholder="+91 9876543210"

                                        required

                                    />

                                </div>

                                <div className="contform-group">

                                    <label>

                                        Company Name

                                    </label>

                                    <input

                                        type="text"

                                        name="company"

                                        placeholder="Company Name"

                                    />

                                </div>

                            </div>

                            {/* ==========================================
                                        SERVICE & BUDGET
                            ========================================== */}

                            <div className="contform-row">

                                <div className="contform-group">

                                    <label>

                                        Service Required

                                    </label>

                                    <input

                                        type="text"

                                        name="service"

                                        placeholder="e.g. Website Development"

                                        list="service-list"

                                        required

                                    />

                                </div>

                                {/* <div className="contform-group">

                                    <label>

                                        Project Budget

                                    </label>

                                    <input

                                        type="text"

                                        name="budget"

                                        placeholder="e.g. ₹50,000 - ₹1,00,000"

                                        list="budget-list"

                                    />

                                </div> */}

                            </div>

                            <datalist id="service-list">
                                {services.map((item, index) => (
                                    <option key={index} value={item} />
                                ))}
                            </datalist>
                            <datalist id="budget-list">
                                {budgets.map((item, index) => (
                                    <option key={index} value={item} />
                                ))}
                            </datalist>

                            {/* ==========================================
                                        MESSAGE
                            ========================================== */}

                            <div className="contform-group">

                                <label>

                                    Project Details

                                </label>

                                <textarea

                                    rows="7"

                                    name="message"

                                    placeholder="Tell us about your project..."

                                    required

                                ></textarea>

                            </div>

                            {/* ==========================================
                                    ERROR MESSAGE
                            ========================================== */}

                            {

                                error && (

                                    <div className="contform-error">

                                        {error}

                                    </div>

                                )

                            }

                            {/* ==========================================
                                    SUCCESS MESSAGE
                            ========================================== */}

                            {

                                success && (

                                    <div className="contform-success">

                                        ✅ Your message has been sent successfully.

                                        We'll contact you within 24 hours.

                                    </div>

                                )

                            }

                            {/* ==========================================
                                        BUTTON
                            ========================================== */}

                            <button

                                type="submit"

                                className="contform-button"

                                disabled={loading}

                            >

                                {

                                    loading

                                    ?

                                    "Sending..."

                                    :

                                    <>

                                        <Send size={18}/>

                                        Send Message

                                    </>

                                }

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </section>

);

}

export default ContactForm;