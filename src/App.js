import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUs/AboutUs";
import Rooms from "./components/Rooms/Rooms";
import OneRoom from "./components/OneRoom/OneRoom";
import Contact from "./components/Contact/Contact";

const App = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<OneRoom />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default App;
