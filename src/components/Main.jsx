import React from "react";

import Logo from "./hif/header/Logo.jsx";
import Nav from "./hif/header/Nav.jsx";
import Intro from "./hif/intro/Intro.jsx";
// import Checker from "./main-page/Checker.jsx";
import RoomsBtn from "./main-page/RoomsBtn.jsx";
import Welcome from "./main-page/Welcome.jsx";
import Features from "./main-page/Features.jsx";
import RoomsPhotos from "./main-page/RoomsPhotos.jsx";
import Restaurant from "./main-page/Restaurant.jsx";
import Pool from "./main-page/Pool.jsx";
import Footer from "./hif/footer/Footer.jsx";

function Main() {
    const slides = [
        { url: "photo1.jpg" },
        { url: "photo2.jpg" },
        { url: "photo3.jpg" },
        { url: "photo4.jpg" },
        { url: "photo5.jpg" },
    ];

    return (
        <>
            <div>
                <div className="site-header">
                    <div className="header-cont">
                        <Logo />
                        <Nav />
                    </div>
                </div>
                <div>
                    <Intro />
                    {/* <Checker /> */}
                    <RoomsBtn />
                    <Welcome />
                    <Features />
                    <RoomsPhotos slides={slides} />
                    <Restaurant />
                    <Pool />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Main;
