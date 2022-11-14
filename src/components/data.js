/* eslint-disable import/no-anonymous-default-export */
import room1 from "../roomsData/room1.jpg";
import room2 from "../roomsData/room2.jpg";
import room3 from "../roomsData/room3.jpg";
import room4 from "../roomsData/room4.png";
import room5 from "../roomsData/room5.jpg";
import room6 from "../roomsData/room6.webp";
import room7 from "../roomsData/room7.webp";
import room8 from "../roomsData/room8.jpg";
import room9 from "../roomsData/room9.jpg";
import room10 from "../roomsData/room10.jpg";
import room11 from "../roomsData/room11.jpg";
import room12 from "../roomsData/room12.jpg";

export default [
    {
        id: "1",

        name: "Single-Bed Room (B)",
        type: "Single",
        price: 60,
        capacity: 1,
        pets: false,
        images: room1,
    },
    {
        id: "2",

        name: "Single-Bed Room (B)",
        type: "Single",
        price: 60,
        capacity: 1,
        pets: false,
        images: room2,
    },
    {
        id: "3",

        name: "Single-Bed Room (B)",
        type: "Single",
        price: 60,
        capacity: 1,
        pets: true,
        images: room3,
    },
    {
        id: "4",

        name: "Single-Bed Room (M)",
        type: "Single",
        price: 80,
        capacity: 1,
        pets: true,
        images: room4,
    },
    {
        id: "5",

        name: "Single-Bed Room (E)",
        type: "Single",
        price: 100,
        capacity: 2,
        pets: false,
        images: room5,
    },
    {
        id: "6",

        name: "Double-Bed Room (B)",
        type: "Double",
        price: 120,
        capacity: 2,
        pets: false,
        images: room6,
    },
    {
        id: "7",

        name: "Double-Bed Room (B)",
        type: "Double",
        price: 120,
        capacity: 2,
        pets: false,
        images: room7,
    },
    {
        id: "8",

        name: "Double-Bed Room (M)",
        type: "Double",
        price: 150,
        capacity: 2,
        pets: true,
        images: room8,
    },
    {
        id: "9",

        name: "Double-Bed Room (E)",
        type: "Double",
        price: 180,
        capacity: 3,
        pets: false,
        images: room9,
    },
    {
        id: "10",

        name: "Family Room (B)",
        type: "Family",
        price: 210,
        capacity: 3,
        pets: false,
        images: room10,
    },
    {
        id: "11",

        name: "Family Room (M)",
        type: "Family",
        price: 250,
        capacity: 4,
        pets: true,
        images: room11,
    },
    {
        id: "12",

        name: "Family Room (E)",
        type: "Family",
        price: 260,
        capacity: 4,
        pets: false,
        images: room12,
    },
];
