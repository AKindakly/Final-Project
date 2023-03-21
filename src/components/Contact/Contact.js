import React from "react";

import Header from "../hif/Header/Header";
import Hero from "../hif/Hero/Hero";
import Footer from "../hif/Footer/Footer";
import ContactBtn from "./ContactBtn";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Hero />
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
