import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./Main.jsx";
import Rooms from "./Rooms.jsx";
import Contact from "./Contact.jsx";

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/rooms" exact component={Rooms} />
            <Route path="/contact" exact component={Contact} />
        </Switch>
    );
};

export default App;
