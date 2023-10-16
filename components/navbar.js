"use client"


import React, { useEffect , useState } from 'react';
import logo from "../assest/img/logo.png"
import Image from 'next/image'
import "../assest/css/navbar.css"
import { Icon } from '@iconify/react';
import { useSession } from 'next-auth/react';
import Link from "next/link"
function Navbar() {
  const { data: session } = useSession(); 
  const isAdmin = session?.user?.role === 'admin';
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const overlay = document.querySelector("[data-overlay]");


    const toggleNavbar = function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("nav-active");

      // Add a delay to restore the header after 5 seconds
      // setTimeout(() => {
      //   navbar.classList.remove("active");
      //   overlay.classList.remove("active");
      //   document.body.classList.remove("nav-active");
      // }, 1000);
    };

    const addEventOnElements = (elements, event, callback) => {
      elements.forEach((element) => {
        element.addEventListener(event, callback);
      });
    };
    

    addEventOnElements(navTogglers, "click", toggleNavbar);
    addEventOnElements(navbar.querySelectorAll("a"), "click", toggleNavbar);

    // Cleanup event listeners when the component unmounts
    return () => {
      navTogglers.forEach((element) => {
        element.removeEventListener("click", toggleNavbar);
      });
      navbar.querySelectorAll("a").forEach((element) => {
        element.removeEventListener("click", toggleNavbar);
      });
    };
  }, []);
  
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    let lastScrollPos = 0;

    const hideHeader = function () {
      const isScrollBottom = lastScrollPos < window.scrollY;
      if (isScrollBottom) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }

      lastScrollPos = window.scrollY;
    };

    const handleScroll = function () {
      if (window.scrollY >= 50) {
        if (header) header.classList.add("active");
        if (backTopBtn) backTopBtn.classList.add("active");
        hideHeader();
      } else {
        if (header) header.classList.remove("active");
        if (backTopBtn) backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbarr">
    
        <div className=''>
          <header className="header" data-header="">
    <div className="container">
      <a href="#" className="logo">
      <Image
                src={logo}
                alt=" Logo"
                className=""
                width={200}
                height={50}
                priority
              />
      </a>
      <nav className="navbar" data-navbar="">
        <button className="close-btn" aria-label="close menu" data-nav-toggler="">
         
          <Icon icon="ion:close-outline" aria-hidden="true"  />
        </button>
        <a href="#home" className="logo">
        <Image
                src={logo}
                alt=" Logo"
                className=""
                width={200}
                height={50}
                priority
              />
        </a>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#home" className="navbar-link hover-underline ">
              <div className="separator" />
              <span className="span" >Home</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="#host" className="navbar-link hover-underline">
              <div className="separator" />
              <span className="span" > GASTGEBER</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="#menu" className="navbar-link hover-underline">
              <div className="separator" />
              <span className="span" >MENÜ</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link hover-underline">
              <div className="separator" />
              <span className="span" >ÜBER UNS</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="#reservation" className="navbar-link hover-underline">
              <div className="separator" />
              <span className="span" >TISCH BUCHEN</span>
            </a>
          </li>
          <li className="navbar-item">
            <a href="#gallery" className="navbar-link hover-underline">
              <div className="separator" />
              <span className="span" >RESTAURANT</span>
            </a>
          </li>
          {isAdmin && (
                  <li className="navbar-item">
                    <Link href="/dashboard" target="blank" className="navbar-link hover-underline">
                      <div className="separator" />
                      <span className="span">dashboard</span>
                    </Link>
                  </li>
                )}
        </ul>
        <div className="text-center">
          <p className="headline-1 navbar-title">Besuchen Sie uns</p>
          <address className="body-4">
          Herrligstrasse 39,  <br />
          8048 Zurich
          </address>
          <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
          <a href="mailto:info@roter-stein.ch" className="body-4 sidebar-link">
          info@roter-stein.ch
          </a>
          <div className="separator" />
          <p className="contact-label">Telefonnummer</p>
          <a
            href="tel:043 541 82 62"
            className="body-1 contact-number hover-underline"
          >
            043 541 82 62
          </a>
        </div>
      </nav>
      <a href="#reservation" className="btn btn-secondary">
        <span className="text text-1">TISCH BUCHEN</span>
        <span className="text text-2" aria-hidden="true">
        TISCH BUCHEN
        </span>
      </a>
      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler="">
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
      </button>
      <div className="overlay" data-nav-toggler="" data-overlay="" />
    </div>
  </header>
        </div>
    </div>
  )
}

export default Navbar;