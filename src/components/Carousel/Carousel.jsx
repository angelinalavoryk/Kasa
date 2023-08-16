import React, { useState, useCallback } from "react";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import './_Carousel.scss';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent((current + 1) % length);
  }, [current, length]);

  const prevSlide = useCallback(() => {
    setCurrent((current - 1 + length) % length);
  }, [current, length]);

  return (
    <div className="carousel-container">
      {length > 1 && (
        <img
          src={left}
          alt="left"
          onClick={prevSlide}
          className="carousel-arrow left-arrow"
        />
      )}
      {length > 1 && (
        <img
          src={right}
          alt="right"
          onClick={nextSlide}
          className="carousel-arrow right-arrow"
        />
      )}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            current === index ? "active-slide" : ""
          }`}
        >
          {index === current && (
            <img src={slide} alt={`Slide ${index}`} className="carousel-image" />
          )}
        </div>
      ))}
    </div>
  );
};



export default Carousel;

