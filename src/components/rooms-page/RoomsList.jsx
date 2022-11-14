import React from "react";

import "../../index.css";

const RoomsList = ({ rooms }) => {
    const Room = ({ room }) => {
        const { name, images, price, capacity } = room;
        // console.log("room",room);
        return (
            <div>
                <div className="room-list-cont">
                    <img className="room-list-img" src={images} alt="" />
                    <span className="room-list-price">${price} per Night</span>
                </div>
                <p className="room-list-name">
                    {name} / for {capacity} Guest/s
                </p>
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
