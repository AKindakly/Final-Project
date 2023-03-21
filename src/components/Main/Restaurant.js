import React from "react";
import { useState } from "react";

import restaurant from "../../assets/restaurant.jpg";

const Restaurant = () => {
    const [is1Visible, setIs1Visible] = useState(false);
    const [is2Visible, setIs2Visible] = useState(false);
    const [is3Visible, setIs3Visible] = useState(false);

    const handle1Press = () => {
        // console.log("clicked");
        setIs1Visible((isVisible) => !isVisible);
        setIs2Visible(false);
        setIs3Visible(false);
    };

    const handle2Press = () => {
        // console.log("clicked");

        setIs2Visible((isVisible) => !isVisible);
        setIs1Visible(false);
        setIs3Visible(false);
    };
    const handle3Press = () => {
        // console.log("clicked");

        setIs3Visible((isVisible) => !isVisible);
        setIs1Visible(false);
        setIs2Visible(false);
    };

    return (
        <section className="restaurant">
            <div className="restaurant-left-cont">
                <img src={restaurant} alt="food-table inside hotel" />
            </div>
            <div className="restaurant-right-cont">
                <div>
                    <h2>Restaurants & Bars</h2>
                    <p>
                        Discover the amazing taste plus <br />
                        seasonal and international specialities.
                    </p>
                </div>
                <div className="restaurant-tabs">
                    <div>
                        <h3 onClick={handle1Press}>❱ Main Restaurant</h3>
                        <div>
                            {is1Visible && (
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h3 onClick={handle2Press}>❱ Lobby Lounge & Bar</h3>
                        <div>
                            {is2Visible && (
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h3 onClick={handle3Press}>❱ Galaxy To Go</h3>
                        <div>
                            {is3Visible && (
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Restaurant;
