import React from "react";
import playIcon from "../../assets/play.png";

const AboutUsVid = () => {
    return (
        <section>
            <div className="aboutus-vid">
                <a
                    className="aboutus-vid-btn"
                    href="https://www.youtube.com/watch?v=FSNcXegRhcE&t=2692s"
                >
                    <h3>Galaxy Hotel Tour</h3>
                    <img
                        className="aboutus-vid-btn-sml"
                        src={playIcon}
                        alt=""
                    />
                </a>
            </div>
        </section>
    );
};

export default AboutUsVid;
