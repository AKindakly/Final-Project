import React from "react";

import Header from "../hif/Header/Header";
import Hero from "../hif/Hero/Hero";
import Footer from "../hif/Footer/Footer";
import AboutUsBtn from "./AboutUsBtn";
import AboutUsTxt from "./AboutUsTxt";
import AboutUsVid from "./AboutUsVid";
import AboutUsStaff from "./AboutUsStaff";

const AboutUs = () => {
    return (
        <>
            <Header />

            <Hero />
            <AboutUsBtn />
            <AboutUsTxt />
            <AboutUsVid />
            <AboutUsStaff />

            <Footer />
        </>
    );
};

export default AboutUs;
