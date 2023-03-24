import React, { useState, useEffect } from "react";
import items from "./data.js";

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [capacity, setCapacity] = useState(1);
    const [type, setType] = useState("All");
    const [price, setPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(60);
    const [maxPrice, setMaxPrice] = useState(300);
    const [pets, setPets] = useState(false);

    useEffect(() => {
        const formattedRooms = formatData(items);
        const maxRoomPrice = Math.max(
            ...formattedRooms.map((item) => item.price)
        );
        setRooms(formattedRooms);
        setSortedRooms(formattedRooms);
        setPrice(maxRoomPrice);
        setMaxPrice(maxRoomPrice);
        setMinPrice(60);
    }, []);

    const formatData = (items) => {
        return items.map((item) => {
            const id = item.id;
            const mainImg = item.mainImg;
            const room = { ...item, id, mainImg };
            return room;
        });
    };

    const getRoom = (id) => {
        const tempRooms = [...rooms];
        const room = tempRooms.find((room) => room.id === id);
        return room;
    };

    const handleChange = (event) => {
        const target = event.target;
        const name = event.target.name;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        switch (name) {
            case "type":
                setType(value);
                break;
            case "capacity":
                setCapacity(parseInt(value));
                break;
            case "price":
                setPrice(parseInt(value));
                break;
            case "pets":
                setPets(target.checked);
                break;
            default:
                break;
        }
    };

    const filterRooms = () => {
        // all the rooms
        let tempRooms = [...rooms];

        // filter by type
        if (type !== "All") {
            tempRooms = tempRooms.filter((room) => room.type === type);
        }

        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
        }

        //filter by price
        tempRooms = tempRooms.filter((room) => room.price <= price);

        // filter by pets
        if (pets) {
            tempRooms = tempRooms.filter((room) => room.pets === true);
        }

        // set state
        setSortedRooms(tempRooms);
    };

    useEffect(() => {
        filterRooms();
    }, [type, capacity, price, pets]);

    return (
        <RoomContext.Provider
            value={{
                rooms,
                sortedRooms,
                capacity,
                type,
                price,
                minPrice,
                maxPrice,
                pets,
                getRoom,
                handleChange,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};

const RoomConsumer = RoomContext.Consumer;

const withRoomConsumer = (Component) => {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {(value) => <Component {...props} context={value} />}
            </RoomConsumer>
        );
    };
};

export { RoomProvider, RoomConsumer, RoomContext, withRoomConsumer };
