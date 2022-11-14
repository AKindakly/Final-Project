import React from "react";

import Logo from "./hif/header/Logo.jsx";
import Nav from "./hif/header/Nav.jsx";
import Intro from "./hif/intro/Intro.jsx";
import Footer from "./hif/footer/Footer.jsx";
import ContactForm from "./contact-page/ContactForm.jsx";
import ContactBtn from "./contact-page/ContactBtn.jsx";

const Contact = () => {
    return (
        <div>
            <div className="site-header">
                <div className="header-cont">
                    <Logo />
                    <Nav />
                </div>
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
