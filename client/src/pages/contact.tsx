import React from 'react';
import ContactForm from "../components/Contact/Contact";
import {SEO} from "../components/Others/seo";

const Contact = () => {
    return (
        <>
            <SEO title="Contact - WiseCart" description="F.A.Q Details"/>
            <ContactForm/>

        </>
    );
};

export default Contact;