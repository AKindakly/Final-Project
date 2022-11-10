import React from "react";

import Logo from "./header/Logo.jsx";
import Nav from "./header/Nav.jsx";
import Intro from "./main-page/Intro.jsx";

function App() {
    return (
        <>
            <div>
                <div className="site-header">
                    <div className="header-cont">
                        <Logo />

                        <Nav />
                    </div>
                </div>
                <Intro />
            </div>
        </>
    );
}

export default App;
