"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import abt from "../assest/img/about-banner.png";
import abt2 from "../assest/img/about-abs-image.png";

import abt4 from "../assest/img/shape-3.png";
import Aos from "aos";
import "aos/dist/aos.css";


function About() {


  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div className="abttt">
      <section
        className="section about text-center"
        aria-labelledby="about-label"
        id="host" 
      >
        <div className="container">
          <div className="about-content">
            <p className="section-subtitle ownr" id="about-label" data-aos="fade-right">
            GASTGEBER
            </p>
            <h2 className="headline-2 section-title" data-aos="fade-left">
             
              Wir sind stolz darauf, Gastgeber zu sein.
            </h2>
          
     
      <p className="section-text" data-aos="fade-up">Seit dem 1. Juli 2019 wird unser Restaurant von erfahrenen Gastgebern geleitet, die in der Gastronomie langjährige Erfahrung mitbringen. Wir laden Sie herzlich ein, unser neues kulinarisches Angebot und unsere Gastfreundschaft zu erleben. Wir freuen uns auf Ihren Besuch.</p>
            <div className="contact-label"></div>
          </div>
          <figure className="about-banner  " data-aos="flip-right">
            <Image
              src={abt}
              alt=" Logo"
              className="w-100 "
              width={570}
              height={570}
              priority
              data-parallax-item=""
              data-parallax-speed={1}
            />

            <div
              className="abs-img abs-img-1 has-before"
              data-parallax-item=""
              data-parallax-speed="1.75"
            >
              <div className="service-card" data-aos="flip-left">
       
                    <Image
                      src={abt2}
                      width={285}
                      height={285}
                      loading="lazy"
                      alt=""
                      className="w-100 "
                    />
                
              
              </div>
            </div>
          </figure>

          <Image
            src={abt4}
            width={197}
            height={194}
            loading="lazy"
            alt=""
            className="shape"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
