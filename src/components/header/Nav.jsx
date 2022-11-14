import React from "react";

import "../../index.css";

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="nav">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <div className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="/about" target="_blank">
                            About Us
                        </a>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                    <li>
                        <a href="/contact" target="_blank">
                            Contact
                        </a>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Nav;
