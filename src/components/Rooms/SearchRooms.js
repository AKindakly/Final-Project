import React from "react";
import { useContext } from "react";
import { RoomContext } from "../hotel/context.js";

const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
};

const SearchRooms = ({ rooms }) => {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, pets } =
        context;

    let types = getUnique(rooms, "type");
    types = ["All", ...types];
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });

    let guests = getUnique(rooms, "capacity");
    guests = guests.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });

    return (
        <section className="search-rooms">
            <form>
                <div className="rooms-form-select">
                    <label htmlFor="type">Room Type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>

                <div className="rooms-form-select">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        onChange={handleChange}
                    >
                        {guests}
                    </select>
                </div>

                <div className="rooms-form-input">
                    <span>Room Price ${price}</span>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                    />
                </div>

                <div className="rooms-form-checkbox">
                    <label htmlFor="pets">Pets</label>
                    <input
                        type="checkbox"
                        name="pets"
                        id="pets"
                        checked={pets}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </section>
    );
};

export default SearchRooms;
