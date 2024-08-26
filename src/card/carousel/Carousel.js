import React, { useState } from "react";
import classes from "./Carousel.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

function Carousel({ path, src, heading }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const slides = [...src];

  const handleNext = () => {
    setCurrentIdx((prevIdx) => {
      if (prevIdx === slides.length - 1) {
        return 0;
      } else {
        return prevIdx + 1;
      }
    });
  };

  const handlePrev = () => {
    setCurrentIdx((prevIndex) => {
      if (prevIndex === 0) {
        return slides.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className={classes["carousel"]}>
      <button
        className={`${classes["slider-btn"]} ${classes["slider-btn-1"]} `}
        onClick={handlePrev}
      >
        <IoIosArrowBack />
      </button>
      <a
        href={path}
        alt="link to website"
        target="_blank"
        rel="noopener noreferrer"
        className={classes["img-link"]}
      >
        <div>
          <FaExternalLinkAlt />
        </div>
      </a>

      <img
        src={slides[currentIdx]}
        className={classes["card-img"]}
        alt={heading}
      />

      <button
        className={`${classes["slider-btn"]} ${classes["slider-btn-2"]}`}
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Carousel;
