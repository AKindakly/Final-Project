import React, { useContext } from "react";
import { RoomContext } from "../hotel/context.js";

import Header from "../hif/Header/Header";
import Hero from "../hif/Hero/Hero";
import Footer from "../hif/Footer/Footer";
import OneRoomBtn from "./OneRoomBtn";
import OneRoomBook from "./OneRoomBook";

const OneRoom = (props) => {
    const { id } = props.match.params;
    const { getRoom } = useContext(RoomContext);
    const room = getRoom(id);
    // console.log("room in OneRoom :", room);
    const {
        name,
        capacity,
        price,
        pets,
        description,
        mainImg,
        img1,
        img2,
        img3,
    } = room;
    return (
        <>
            <section>
                <div>
                    <div>
                        <Header />
                    </div>
                    <div>
                        <Hero />
                        <OneRoomBtn />
                    </div>
                </div>
                <div>
                    <div className="oneroom-name">
                        <h1>{name}</h1>
                    </div>
                    <div className="oneroom-mainImg">
                        <img src={mainImg} alt="" />
                    </div>
                    <hr style={{ width: "80%" }} />
                    <div className="oneroom-info">
                        <div>
                            <h6>Max</h6>
                            <h4>
                                {capacity > 1
                                    ? `${capacity} People`
                                    : `${capacity} Person`}
                            </h4>
                        </div>
                        <div className="oneroom-info-mid">
                            <h6>Pets:</h6>
                            <h4>{pets ? "Allowed" : "not Allowed"}</h4>
                        </div>
                        <div>
                            <h6>Price</h6>
                            <h4>ab ${price}</h4>
                        </div>
                    </div>
                    <div className="oneroom-desc">
                        <p>{description}</p>
                    </div>
                    <div>
                        <OneRoomBook />
                    </div>
                    <div className="oneroom-others-flex1">
                        <div className="oneroom-others-big">
                            <img src={img1} alt="" />
                        </div>
                        <div className="oneroom-others-flex2">
                            <div className="oneroom-others-sml">
                                <img src={img2} alt="" />
                            </div>
                            <div className="oneroom-others-sml">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
};

export default OneRoom;
