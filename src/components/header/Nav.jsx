import React from "react";
import "../../index.css";

// import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div class="nav">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <div class="menu">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about" target="_blank">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="/rooms" target="_blank">
                            Rooms
                        </a>
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
