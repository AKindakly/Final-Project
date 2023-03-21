import React from "react";
import { withRoomConsumer } from "./context.js";

import Header from "./hif/Header/Header";
import Intro from "./hif/Hero/Hero";
import Footer from "./hif/Footer/Footer";

import SearchRooms from "./rooms-page/SearchRooms";
import RoomsList from "./rooms-page/RoomsList";

const Rooms = ({ context }) => {
    const { sortedRooms, rooms } = context;

    return (
        <>
            <div>
                <div>
                    <Header />
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
