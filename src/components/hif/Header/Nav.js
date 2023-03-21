import React from "react";
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
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Nav;
