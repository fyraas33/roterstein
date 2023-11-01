"use client"




import logo from "../assest/img/logo.png"
import Image from 'next/image'

import {motion} from 'framer-motion'
import { useSession } from 'next-auth/react';
import Link from "next/link"
function Mbnav() {
  const { data: session } = useSession(); 
  const isAdmin = session?.user?.role === 'admin';
  return (
    <div className='navbarr'>
    
        <div >  
          <header className="header active" >
    <div className="container">
      <a href="#home" className="logo">
      <Image
                src={logo}
                alt=" Logo"
                className=""
                width={250}
                height={50}
                priority
              />
      </a>
      <nav className="navbar" data-navbar="">
        <button className="close-btn" aria-label="close menu" data-nav-toggler="">
          <ion-icon name="close-outline" aria-hidden="true" />
        </button>
        <a href="#" className="logo">
        <Image
                src={logo}
                alt=" Logo"
                className=""
                width={250}
                height={50}
                priority
              />
        </a>
        <ul className="navbar-list">
          <li className="navbar-item">
            <motion.a href="#home" className="navbar-link hover-underline " whileTap={{scale:0.5}} >
              <div className="separator" />
              <span className="span"  >Home</span>
            </motion.a>
          </li>
          <li className="navbar-item">
            <motion.a href="#host" className="navbar-link hover-underline" whileTap={{scale:0.5}} >
              <div className="separator" />
              <span className="span" > GASTGEBER</span>
            </motion.a>
          </li>
          <li className="navbar-item">
            <motion.a href="#menu" className="navbar-link hover-underline" whileTap={{scale:0.5}} >
              <div className="separator" />
              <span className="span" >MENÜ</span>
            </motion.a>
          </li>
          <li className="navbar-item">
            <motion.a href="#about" className="navbar-link hover-underline" whileTap={{scale:0.5}} >
              <div className="separator" />
              <span className="span" >ÜBER UNS</span>
            </motion.a>
          </li>
          <li className="navbar-item">
            <motion.a href="#gallery" className="navbar-link hover-underline" whileTap={{scale:0.5}} >
              <div className="separator" />
              <span className="span" >RESTAURANT</span>
            </motion.a>
          </li>
          
          {isAdmin && (
                  <li className="navbar-item">
                    <Link href="/dashboard"  target="blank" className="navbar-link hover-underline" >
                      <div className="separator" />
                      <span className="span">dashboard</span>
                    </Link>
                  </li>
                )}
        </ul>
       
      </nav>
      <motion.a href="#reservation" className="btn btn-secondary" whileTap={{scale:0.5}}  >
        <span className="text text-1">TISCH BUCHEN</span>
        <span className="text text-2" aria-hidden="true">
        TISCH BUCHEN
        </span>
      </motion.a>
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

export default Mbnav;