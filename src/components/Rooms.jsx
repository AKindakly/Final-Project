import React from "react";
import { withRoomConsumer } from "./context.js";

import Logo from "./hif/header/Logo.jsx";
import Nav from "./hif/header/Nav.jsx";
import Intro from "./hif/intro/Intro.jsx";
import Footer from "./hif/footer/Footer.jsx";
import SearchRooms from "./rooms-page/SearchRooms";
import RoomsList from "./rooms-page/RoomsList";

const Rooms = ({ context }) => {
    const { sortedRooms, rooms } = context;

    return (
        <>
            <div>
                <div className="site-header">
                    <div className="header-cont">
                        <Logo />
                        <Nav />
                    </div>
                </div>
                <div>
                    <Intro />
                    <SearchRooms rooms={rooms} />
                    <RoomsList rooms={sortedRooms} />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default withRoomConsumer(Rooms);
