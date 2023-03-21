import React from "react";
import { useState } from "react";

import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.jpg";
import carousel5 from "../../assets/carousel5.jpg";

const slides = [
    { url: carousel1 },
    { url: carousel2 },
    { url: carousel3 },
    { url: carousel4 },
    { url: carousel5 },
];

const MainCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const url = `${slides[currentIndex].url}`;

    return (
        <section className="RoomsPhotos">
            <div className="rooms-txt">
                <h2>Photos of our Rooms</h2>
                <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Suspendisse nec faucibus
                    velit. Quisque eleifend orci ipsum, a bibendum lacus
                    suscipit sit. Quisque eleifend orci ipsum, a bibendum lacus
                    suscipit sit.Quisque eleifend orci ipsum, a bibendum lacus
                    suscipit sit.
                </p>
            </div>
            <div>
                <div onClick={goToPrevious} className="left-arrow">
                    ❰
                </div>
                <div onClick={goToNext} className="right-arrow">
                    ❱
                </div>
            </div>
            <div className="rooms-photos">
                <img className="photo" src={url} alt="hotel rooms" />
            </div>
            <div className="rooms-dots">
                {slides.map((slide, slideIndex) => (
                    <div
                        className="dots"
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MainCarousel;
