import React from "react";
import { Link } from "react-router-dom";

const RoomsBtn = () => {
    return (
        <div className="rooms-btn">
            <Link to="/rooms">Reserve a Room Now</Link>
        </div>
    );
};

export default RoomsBtn;
