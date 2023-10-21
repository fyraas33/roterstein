"use client";

import Image from "next/image";

import React, { useEffect } from "react";
import men3 from "../assest/img/shape-5.png";
import men4 from "../assest/img/shape-6.png";
import "../assest/css/menu.css";
import Aos from "aos";
import "aos/dist/aos.css";


import MenDta from "./MenDta"



export default  function Menu() {

  useEffect(() => {
    Aos.init();
  }, []);


  
  return (
    <div className="menuuu">
      <section className="section menu" aria-label="menu-label" id="menu">
        <div className="container">
          <p className="section-subtitle text-center ownr"  data-aos="fade-right">Unser Menü</p>

          <h2 className="headline-1 section-title text-center" data-aos="fade-left">
          Kulinarische Verlockungen für Feinschmecker
          </h2>
         
      
          <MenDta/>
    

          <Image
            src={men3}
            className="shape shape-2 move-anim"
            width={921}
            height={1036}
            priority
            alt="shape"
          />

          <Image
            src={men4}
            className="shape shape-3 move-anim"
            width={343}
            height={345}
            alt="shape"
          />
        </div>
      </section>
    </div>
  );
}

