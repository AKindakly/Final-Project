import React from "react";
import { Link } from "react-router-dom";

const OneRoomBtn = () => {
    return (
        <div className="rooms-btn">
            <Link to="/rooms">Back to Rooms</Link>
        </div>
    );
};

export default OneRoomBtn;
