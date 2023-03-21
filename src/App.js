import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./components/Main/Main";
import AboutUs from "./components/AboutUs/AboutUs";
import Rooms from "./components/Rooms/Rooms";
import OneRoom from "./components/OneRoom/OneRoom";
import Contact from "./components/Contact/Contact";

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={AboutUs} />
            <Route path="/rooms" exact component={Rooms} />
            <Route path="/rooms/:id" exact component={OneRoom} />
            <Route path="/contact" exact component={Contact} />
        </Switch>
    );
};

export default App;
