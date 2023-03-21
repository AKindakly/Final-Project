import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./components/Main/Main";
import Rooms from "./components/Rooms.jsx";
import Contact from "./components/Contact.jsx";
import AboutUs from "./components/AboutUs.jsx";
import OneRoom from "./components/OneRoom.jsx";

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/rooms" exact component={Rooms} />
            <Route path="/rooms/:id" exact component={OneRoom} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={AboutUs} />
        </Switch>
    );
};

export default App;
