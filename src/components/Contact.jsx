import React from "react";

import Header from "./hif/Header/Header";
import Intro from "./hif/Hero/Hero";
import Footer from "./hif/Footer/Footer";

import ContactForm from "./contact-page/ContactForm.jsx";
import ContactBtn from "./contact-page/ContactBtn.jsx";

const Contact = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Intro />
                <ContactBtn />
                <ContactForm />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
