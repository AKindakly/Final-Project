import React from "react";

import Logo from "./header/Logo.jsx";
import Nav from "./header/Nav.jsx";
import Intro from "./intro/Intro.jsx";
import Footer from "./footer/Footer.jsx";

const Rooms = () => {
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
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Rooms;
