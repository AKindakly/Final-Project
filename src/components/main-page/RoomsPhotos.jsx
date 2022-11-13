import { useState } from "react";
import "../../index.css";

const RoomsPhotos = ({ slides }) => {
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

    const url = `../${slides[currentIndex].url}`;

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
                <img className="photo" src={url} alt="" />
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

export default RoomsPhotos;
