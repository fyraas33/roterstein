"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import abt from "../assest/img/about-banner.png";
import abt2 from "../assest/img/about-abs-image.png";
import {motion} from 'framer-motion'
import abt4 from "../assest/img/shape-3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { spanVariants, pVariants,rotVariants } from '../utils/motion';

function About() {
const parg="  Lorem Ipsum is simply dummy text of the printingand typesettingindustry lorem Ipsum has been the industrys standard dummy textever since the when an unknown printer took a galley of type andscrambled it to make a type specimen book It has survived not onlyfive centuries, but also the leap into."


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
            <h2 className="headline-1 section-title" data-aos="fade-up">
              {" "}
              Lorem Ipsum is simply{" "}
            </h2>
          
            <motion.p
            
             variants={pVariants}
             initial="hidden"
             whileInView="visible" 
              className="section-text"  > {parg.split("").map((char,index)=>
              <motion.span key={index} variants={spanVariants}>{char}</motion.span>
              )}</motion.p>
      
            <div className="contact-label"></div>
          </div>
          <figure className="about-banner ">
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
              <div className="service-card">
                <motion.div
                 initial="hidden"
                 whileInView="visible" 
                variants={rotVariants}
                className="has-before hover:shine">
             
                    <Image
                      src={abt2}
                      width={285}
                      height={285}
                      loading="lazy"
                      alt=""
                      className="w-100 "
                    />
                
                </motion.div>
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
