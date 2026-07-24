import ContactHero from "./Contact-page-components/ContactHero";
import ContactForm from "./Contact-page-components/ContactForm"

import SEO from "../components/SEO";

function Contact() {
    return (
        <>

            <SEO
                title="Contact Elvorin Technologies | Get Free Consultation"
                description="Contact Elvorin Technologies for AI Automation, Website Development, SEO and Digital Marketing solutions."
                keywords="Contact AI Company, Website Development Contact"
                canonical="https://elvorintech.com/contact"
            />
            <ContactHero />
            <ContactForm />
        </>
    );
}

export default Contact;