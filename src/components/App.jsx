import React from "react";

import Logo from "./header/Logo.jsx";
import Nav from "./header/Nav.jsx";
import Intro from "./main-page/Intro.jsx";
import Checker from "./main-page/Checker.jsx";
import Welcome from "./main-page/Welcome.jsx";
import Features from "./main-page/Features.jsx";
import RoomsPhotos from "./main-page/RoomsPhotos.jsx";
import Resturant from "./main-page/Restaurant.jsx";
import Pool from "./main-page/Pool.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
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
                    <Checker />
                    <Welcome />
                    <Features />
                    <RoomsPhotos slides={slides} />
                    <Resturant />
                    <Pool />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
