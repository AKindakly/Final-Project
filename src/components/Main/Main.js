import React from "react";

import Header from "../hif/Header/Header";
import Hero from "../hif/Hero/Hero";
// import Checker from "./Checker";
import RoomsBtn from "./RoomsBtn";
import Welcome from "./Welcome";
import Features from "./Features";
import MainCarousel from "./MainCarousel";
import Restaurant from "./Restaurant";
import Pool from "./Pool";
import Footer from "../hif/Footer/Footer";

const Main = () => {
    return (
        <>
            <div>
                <Header />

                <div>
                    <Hero />
                    {/* <Checker /> */}
                    <RoomsBtn />
                    <Welcome />
                    <Features />
                    <MainCarousel />
                    <Restaurant />
                    <Pool />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Main;
