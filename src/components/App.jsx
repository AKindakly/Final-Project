import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./Main.jsx";
import Rooms from "./Rooms.jsx";
import Contact from "./Contact.jsx";
import AboutUs from "./AboutUs.jsx";

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/rooms" exact component={Rooms} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={AboutUs} />
        </Switch>
    );
};

export default App;
