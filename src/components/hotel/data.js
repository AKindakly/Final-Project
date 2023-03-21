/* eslint-disable import/no-anonymous-default-export */
import room1 from "./images/room1.jpg";
import room2 from "./images/room2.jpg";
import room3 from "./images/room3.jpg";
import room4 from "./images/room4.jpg";
import room5 from "./images/room5.jpg";

import inside1 from "./images/inside1.jpg";
import inside2 from "./images/inside2.jpg";
import inside3 from "./images/inside3.jpg";

export default [
    {
        id: "1",

        name: "Single-Bed Room (B)",
        type: "Single",
        price: 60,
        capacity: 1,
        pets: false,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        mainImg: room1,
        img1: inside1,
        img2: inside2,
        img3: inside3,
    },
    {
        id: "2",

        name: "Single-Bed Room (M)",
        type: "Single",
        price: 80,
        capacity: 1,
        pets: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        mainImg: room2,
        img1: inside1,
        img2: inside2,
        img3: inside3,
    },
    {
        id: "3",

        name: "Double-Bed Room (B)",
        type: "Double",
        price: 120,
        capacity: 2,
        pets: false,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        mainImg: room3,
        img1: inside1,
        img2: inside2,
        img3: inside3,
    },
    {
        id: "4",

        name: "Double-Bed Room (M)",
        type: "Double",
        price: 150,
        capacity: 2,
        pets: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        mainImg: room4,
        img1: inside1,
        img2: inside2,
        img3: inside3,
    },
    {
        id: "5",

        name: "Family Room (B)",
        type: "Family",
        price: 210,
        capacity: 3,
        pets: false,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        mainImg: room5,
        img1: inside1,
        img2: inside2,
        img3: inside3,
    },
];
