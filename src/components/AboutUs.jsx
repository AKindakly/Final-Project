import React from "react";

import Logo from "./hif/Header/Logo";
import Nav from "./hif/Header/Nav";
import Intro from "./hif/Hero/Hero";
import Footer from "./hif/Footer/Footer";

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
