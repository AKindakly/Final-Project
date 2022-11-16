import React from "react";

import items from "./data.js";

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
    state = {
        rooms: [],
        sortedRooms: [],
        capacity: 1,
        type: "All",
        price: 0,
        minPrice: 60,
        maxPrice: 300,
        pets: false,
    };

    componentDidMount() {
        let rooms = this.formatData(items);
        let maxPrice = Math.max(...rooms.map((item) => item.price));
        this.setState({
            rooms,
            sortedRooms: rooms,
            price: maxPrice,
            maxPrice,
        });
    }

    formatData(items) {
        let tempItems = items.map((item) => {
            let id = item.id;
            let mainImg = item.mainImg;
            let room = { ...item, id, mainImg };
            return room;
        });
        return tempItems;
    }

    getRoom = (id) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.id === id);
        return room;
    };

    handleChange = (event) => {
        const target = event.target;
        const name = event.target.name;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        this.setState({ [name]: value }, this.filterRooms);
    };

    filterRooms = () => {
        let { rooms, type, capacity, price, pets } = this.state;

        // all the rooms
        let tempRooms = [...rooms];

        // transform value
        capacity = parseInt(capacity, 10);
        price = parseInt(price, 10);

        // filter by type
        if (type !== "All") {
            tempRooms = tempRooms.filter((room) => room.type === type);
        }
        this.setState({ sortedRooms: tempRooms });

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
        // state change
        this.setState({ sortedRooms: tempRooms });
    };

    render() {
        return (
            <RoomContext.Provider
                value={{
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange,
                }}
            >
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {(value) => <Component {...props} context={value} />}
            </RoomConsumer>
        );
    };
}

export { RoomProvider, RoomConsumer, RoomContext };
