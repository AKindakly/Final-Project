import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { RoomProvider } from "./components/context.js";

import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RoomProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RoomProvider>
);
