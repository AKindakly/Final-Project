import React from "react";
import "../../index.css";

const Checker = () => {
    return (
        <>
            <section className="checker">
                <div className="checker-cont">
                    <div className="checker-inputs">
                        <div>
                            <label>Check-in:</label>
                            <input type="date" placeholder="CheckIn-Date" />
                        </div>
                        <div>
                            <label>Check-out:</label>
                            <input type="date" placeholder="CheckOut-Date" />
                        </div>
                        <div>
                            <label>Adults:</label>
                            <input
                                type="number"
                                placeholder="0"
                                min="0"
                                max="5"
                            />
                        </div>
                        <div>
                            <label>Children:</label>
                            <input
                                type="number"
                                placeholder="0"
                                min="0"
                                max="3"
                            />
                        </div>
                    </div>
                    <div className="search">
                        <input type="submit" value="Check" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Checker;
