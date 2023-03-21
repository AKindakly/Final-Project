import React from "react";

import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return (
        <section className="site-header">
            <div className="header-cont">
                <Logo />
                <Nav />
            </div>
        </section>
    );
};

export default Header;
