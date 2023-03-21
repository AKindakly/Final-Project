import React from "react";
import { withRoomConsumer } from "../hotel/context.js";

import Header from "../hif/Header/Header";
import Hero from "../hif/Hero/Hero";
import Footer from "../hif/Footer/Footer";
import SearchRooms from "./SearchRooms";
import RoomsList from "./RoomsList";

const Rooms = ({ context }) => {
    const { sortedRooms, rooms } = context;

    return (
        <>
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Hero />
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
