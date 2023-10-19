"use client"
import { Icon } from '@iconify/react';
import Modal from "react-modal";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import hero1 from "../assest/img/hero-slider.png"
import hero2 from "../assest/img/hero-slider2.png"
import hero3 from "../assest/img/hero-slider3.png"
import hricon from "../assest/img/hero-icon.png"
import BookModal from "./BookModal"
function Hero() {

  const [bookTabOpen, setbookTabOpen] = useState(false);
  const openBooktab = () => {
    setbookTabOpen(true);
  };

  const closeBooktab = () => {
    setbookTabOpen(false);
  };
  const customStyles = {
    content: {
      width: "75%",
      height: "75%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "black",
    },
  };
  const closeButtonStyles = {
    backgroundColor: "transparent",
    border: "none",
    color: "red",
    fontSize: "1.5rem",
    cursor: "pointer",
    position: "absolute",
    top: "1px",
    right: "10px",
  };

    useEffect(() => {
        const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
        const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
        const heroSliderNextBtn = document.querySelector("[data-next-btn]");
    
        let currentSlidePos = 0;
        let lastActiveSliderItem = heroSliderItems[0];
    
        const updateSliderPos = function () {
          lastActiveSliderItem.classList.remove("active");
          heroSliderItems[currentSlidePos].classList.add("active");
          lastActiveSliderItem = heroSliderItems[currentSlidePos];
        };
    
        const slideNext = function () {
          if (currentSlidePos >= heroSliderItems.length - 1) {
            currentSlidePos = 0;
          } else {
            currentSlidePos++;
          }
    
          updateSliderPos();
        };
    
        if (heroSliderNextBtn) { // Check if the button exists before adding an event listener
          heroSliderNextBtn.addEventListener("click", slideNext);
        }
    
        const slidePrev = function () {
          if (currentSlidePos <= 0) {
            currentSlidePos = heroSliderItems.length - 1;
          } else {
            currentSlidePos--;
          }
    
          updateSliderPos();
        };
    
        if (heroSliderPrevBtn) { // Check if the button exists before adding an event listener
          heroSliderPrevBtn.addEventListener("click", slidePrev);
        }
    
        /**
         * Auto slide
         */
    
        let autoSlideInterval;
    
        const autoSlide = function () {
          autoSlideInterval = setInterval(function () {
            slideNext();
          }, 7000);
        };
    
        const handleMouseOver = () => {
          clearInterval(autoSlideInterval);
        };
    
        const handleMouseOut = () => {
          autoSlide();
        };
    
        if (heroSliderNextBtn && heroSliderPrevBtn) { // Check if both buttons exist before adding event listeners
          heroSliderNextBtn.addEventListener("mouseover", handleMouseOver);
          heroSliderNextBtn.addEventListener("mouseout", handleMouseOut);
          heroSliderPrevBtn.addEventListener("mouseover", handleMouseOver);
          heroSliderPrevBtn.addEventListener("mouseout", handleMouseOut);
        }
    
        autoSlide(); // Start auto sliding when the component mounts
    
        // Cleanup: Stop auto sliding and remove event listeners when the component unmounts
        return () => {
          clearInterval(autoSlideInterval);
          if (heroSliderNextBtn && heroSliderPrevBtn) {
            heroSliderNextBtn.removeEventListener("mouseover", handleMouseOver);
            heroSliderNextBtn.removeEventListener("mouseout", handleMouseOut);
            heroSliderPrevBtn.removeEventListener("mouseover", handleMouseOver);
            heroSliderPrevBtn.removeEventListener("mouseout", handleMouseOut);
          }
        };
      }, []);
  return (
    <div className='heroo'>
        <section className="hero text-center" aria-label="home" id="home">
  <ul className="hero-slider" data-hero-slider="">
    <li className="slider-item active" data-hero-slider-item="">
      <div className="slider-bg">
      <Image
              src={hero1}
              alt=" Logo"
              className="img-cover"
              width={1880}
              height={950}
              priority
            />
      </div>
      <p className="label-2 section-subtitle slider-reveal ownr">
       lorem &amp; lorem
      </p>
      <h1 className="display-1 hero-title slider-reveal prgrphha">
      Entdecken Sie unsere kulinarische Vielfalt – <br />
      ein Fest für die Sinne.
      </h1>
      <p className="body-2 hero-text slider-reveal prgrphha">
    
      </p>
      <a href="#menu" className="btn btn-primary slider-reveal">
        <span className="text text-1 ownr">View Our Menu</span>
        <span className="text text-2" aria-hidden="true">
          View Our Menu
        </span>
      </a>
    </li>
    <li className="slider-item" data-hero-slider-item="">
      <div className="slider-bg">
      <Image
              src={hero2}
              alt=" Logo"
              className="img-cover"
              width={1880}
              height={950}
              priority
            />
      </div>
      <p className="label-2 section-subtitle slider-reveal ownr">
      Lorem ipsum 
      </p>
      <h1 className="display-1 hero-title slider-reveal prgrphha">
      Genießen Sie exquisite Gerichte <br />
      in einem einzigartigen Ambiente.
      </h1>
      <p className="body-2 hero-text slider-reveal prgrphha">
    
      </p>
      <a href="#menu" className="btn btn-primary slider-reveal">
        <span className="text text-1 ownr">View Our Menu</span>
        <span className="text text-2 " aria-hidden="true">
          View Our Menu
        </span>
      </a>
    </li>
    <li className="slider-item" data-hero-slider-item="">
      <div className="slider-bg">
      <Image
              src={hero3}
              alt=" Logo"
              className="img-cover"
              width={1880}
              height={950}
              priority
            />
      </div>
      <p className="label-2 section-subtitle slider-reveal ownr">
       lorem &amp; lorem
      </p>
      <h1 className="display-1 hero-title slider-reveal prgrphha">
      Lorem ipsum dolor sit <br />
      Lorem ipsum 
      </h1>
      <p className="body-2 hero-text slider-reveal prgrphha">
      Lorem ipsum dolor sit &amp; Lorem ipsum dolor sit
      </p>
      <a href="#menu" className="btn btn-primary slider-reveal">
        <span className="text text-1 ownr">View Our Menu</span>
        <span className="text text-2 " aria-hidden="true">
          View Our Menu
        </span>
      </a>
    </li>
  </ul>
  <button
    className="slider-btn prev"
    aria-label="slide to previous"
    data-prev-btn=""
  >
   
    <Icon icon="ion:chevron-back-outline" className='bck' />
  </button>
  <button
    className="slider-btn next"
    aria-label="slide to next"
    data-next-btn=""
  >
  
    <Icon icon="ion:chevron-forward-outline" className='frwrd' />
  </button>
  <a href="#" className="hero-btn has-after" onClick={openBooktab} >

<div  >
    <Image
                src={hricon}
                alt=" Logo"
                className=""
                width={48}
                height={48}
                priority
            
              />
</div>
             
    <span className="label-2 text-center span">TISCH BUCHEN</span>
  </a>
  <Modal
                    appElement={
                      typeof window !== "undefined"
                        ? document.getElementById("root")
                        : undefined
                    }
                    isOpen={bookTabOpen}
                    onRequestClose={closeBooktab}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Main Menu Modal"
                  >
               
                    <BookModal/>
                    <button
                      onClick={closeBooktab}
                      style={closeButtonStyles}
                    >
                      &#10060;
                    </button>
                  </Modal>
</section>

    </div>
  )
}

export default Hero