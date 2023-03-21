import React from "react";
import { Link } from "react-router-dom";

// import "../../index.css";

const RoomsList = ({ rooms }) => {
    const Room = ({ room }) => {
        const { id, name, mainImg, price, capacity } = room;
        // console.log("room",room);
        return (
            <div>
                <div className="room-list-cont">
                    <div className="room-list-img-cont">
                        <Link to={`/rooms/${id}`}>
                            <img
                                className="room-list-img"
                                src={mainImg}
                                alt=""
                            />
                        </Link>
                    </div>
                    <span className="room-list-price">${price} per Night</span>
                </div>
                <Link to={`/rooms/${id}`}>
                    <div className="room-list-name">
                        <p>{name} </p>
                        <h4>
                            for {""}
                            {capacity > 1
                                ? `${capacity} People`
                                : `${capacity} Person`}
                        </h4>
                    </div>
                </Link>
            </div>
        );
    };

    if (rooms.length === 0) {
        return (
            <div className="room-list-err">
                <h3>Ohh No! No Room Matched</h3>
            </div>
        );
    }

    return (
        <section className="rooms-list">
            {rooms.map((item) => {
                return <Room key={item.id} room={item} />;
            })}
        </section>
    );
};

export default RoomsList;
