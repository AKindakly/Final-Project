import React from "react";
import { Link } from "react-router-dom";

import "../../index.css";

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="welcome-txts-cont">
                <div className="welcome-txt1">
                    <h2>Welcome to Galaxy Hotel</h2>
                </div>
                <div className="welcome-txt2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="welcome-txt3">
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        <br />
                        For More info. <Link to="/about">Press Here</Link>
                    </p>
                </div>
            </div>

            <div className="welcome-imgs-cont">
                <img className="welcome-img1" src="../hotel3.jpg" alt="" />
                <img className="welcome-img2" src="../hotel4.jpg" alt="" />
            </div>
        </section>
    );
};

export default Welcome;
