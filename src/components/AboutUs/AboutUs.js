import React from "react";

import Header from "../hif/Header/Header";
import Intro from "../hif/Hero/Hero";
import Footer from "../hif/Footer/Footer";
import AboutUsBtn from "./AboutUsBtn";
import AboutUsTxt from "./AboutUsTxt";
import AboutUsVid from "./AboutUsVid";
import AboutUsStaff from "./AboutUsStaff";

const AboutUs = () => {
    return (
        <div>
            <div>
                <Header />
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
