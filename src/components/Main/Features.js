import React from "react";
import icon1 from "../../assets/icon1.jpg";
import icon2 from "../../assets/icon2.jpg";
import icon3 from "../../assets/icon3.jpg";

const Features = () => {
    return (
        <section className="features">
            <div className="features-cont">
                <img src={icon1} alt="" />

                <p>Fabulous Resort</p>
                <span>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Suspendisse nec faucibus
                    velit. Quisque eleifend orci ipsum, a bibendum.
                </span>
            </div>
            <div className="features-cont">
                <img src={icon2} alt="" />
                <p>Pool & Yoga</p>
                <span>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Suspendisse nec faucibus
                    velit. Quisque eleifend orci ipsum, a bibendum.
                </span>
            </div>
            <div className="features-cont">
                <img src={icon3} alt="" />
                <p>Luxury Rooms</p>
                <span>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Suspendisse nec faucibus
                    velit. Quisque eleifend orci ipsum, a bibendum.
                </span>
            </div>
        </section>
    );
};

export default Features;
