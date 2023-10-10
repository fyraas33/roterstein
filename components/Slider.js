"use client";

import React, { useState, useEffect } from "react";
import "../assest/css/slider.css";
import rt1 from "./img/rt1.jpg"
import rt2 from "./img/rt2.jpg"
import rt3 from "./img/rt3.jpg"
import rt4 from "./img/rt4.jpg"
import rt5 from "./img/rt5.jpg"
import rt6 from "./img/rt6.jpg"
import Image from "next/image";
function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  const slideLeft = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slideData.length - 1 : prevSlide - 1
    );
  };

  const slideRight = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const slideElement = document.querySelectorAll(".slide");
    slideElement.forEach((slide, index) => {
      slide.addEventListener("click", () => {
        handleSlideClick(index);
      });
    });
  }, []);

  useEffect(() => {
    const slideElements = document.querySelectorAll(".slide");
    slideElements.forEach((slide, index) => {
      if (index >= activeSlide && index < activeSlide + 4) {
        slide.classList.add("visible");
      } else {
        slide.classList.remove("visible");
      }
    });
  }, [activeSlide]);

  return (
    <div className="sliderr">
      <section className="container">
       
        <div className={`slide ${activeSlide === 0 ? "active" : ""}`}>
          <Image src={rt1} alt="" width={"auto"} height={"auto"} />
        </div>
        <div className={`slide ${activeSlide === 1 ? "active" : ""}`}>
        <Image src={rt2} alt="" width={"auto"} height={"auto"} />
        </div>
        <div className={`slide ${activeSlide === 2 ? "active" : ""}`}>
        <Image src={rt3} alt="" width={"auto"} height={"auto"} />
        </div>
        <div className={`slide ${activeSlide === 3 ? "active" : ""}`}>
        <Image src={rt4} alt="" width={"auto"} height={"auto"} />
        </div>
        <div className={`slide ${activeSlide === 4 ? "active" : ""}`}>
        <Image src={rt5} alt="" width={"auto"} height={"auto"} />
        </div>
        <div className={`slide ${activeSlide === 5 ? "active" : ""}`}>
        <Image src={rt6} alt="" width={"auto"} height={"auto"} />
        </div>
        
      </section>
    </div>
  );
}

export default Slider;