import React from "react";

import Logo from "./hif/header/Logo.jsx";
import Nav from "./hif/header/Nav.jsx";
import Intro from "./hif/intro/Intro.jsx";
import Footer from "./hif/footer/Footer.jsx";
import AboutUsBtn from "./aboutus-page/AboutUsBtn.jsx";
import AboutUsTxt from "./aboutus-page/AboutUsTxt.jsx";
import AboutUsVid from "./aboutus-page/AboutUsVid.jsx";
import AboutUsStaff from "./aboutus-page/AboutUsStaff.jsx";

const AboutUs = () => {
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
                <AboutUsBtn />
                <AboutUsTxt />
                <AboutUsVid />
                <AboutUsStaff />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default AboutUs;
