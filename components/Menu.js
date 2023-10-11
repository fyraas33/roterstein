"use client";

import Image from "next/image";
import men from "../assest/img/menu-1.png";
import React from "react";
import men3 from "../assest/img/shape-5.png";
import men4 from "../assest/img/shape-6.png";
import "../assest/css/menu.css";
import Modal from "react-modal";
import {motion} from 'framer-motion'
import { contVariants, itemVariants } from '../utils/motion';
import { useEffect, useState } from "react";

function Menu() {
  const [mainMenuModalIsOpen, setMainMenuModalIsOpen] = useState(false);
  const [summerCardModalIsOpen, setSummerCardModalIsOpen] = useState(false);
  const [wildCardModalIsOpen, setWildCardModalIsOpen] = useState(false);
  const [lnchCardModalIsOpen, setLnchCardModalIsOpen] = useState(false);
  const [mnthCardModalIsOpen, setMnthCardModalIsOpen] = useState(false);
  const openMainMenuModal = () => {
    setMainMenuModalIsOpen(true);
  };

  const closeMainMenuModal = () => {
    setMainMenuModalIsOpen(false);
  };

  const openSummerCardModal = () => {
    setSummerCardModalIsOpen(true);
  };

  const closeSummerCardModal = () => {
    setSummerCardModalIsOpen(false);
  };
  const openWildCardModal = () => {
    setWildCardModalIsOpen(true);
  };

  const closeWildCardModal = () => {
    setWildCardModalIsOpen(false);
  };
  const openLnchCardModal = () => {
    setLnchCardModalIsOpen(true);
  };

  const closeLnchCardModal = () => {
    setLnchCardModalIsOpen(false);
  };
  const openMnthCardModal = () => {
    setMnthCardModalIsOpen(true);
  };

  const closeMnthCardModal = () => {
    setMnthCardModalIsOpen(false);
  };
  const customStyles = {
    content: {
      width: "75%",
      height: "75%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      customStyles.content.width = "100%";
      customStyles.content.height = "auto";
    }
  }, []);
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

  return (
    <div className="menuuu">
      <section className="section menu" aria-label="menu-label" id="menu">
        <div className="container">
          <p className="section-subtitle text-center ownr">Unser Menü</p>

          <h2 className="headline-1 section-title text-center">
            Delicious Menu
          </h2>

          <motion.ul className="grid-list"   variants={contVariants}
             initial="hidden"
             whileInView="visible" >
            <motion.li
             variants={itemVariants}
             initial="hidden"
             whileInView="visible"
            >
              <div className="menu-card hover:card">
              <figure
                  className="card-banner img-holder"
                  style={{ width: 100, height: 100 }}
                >
                  <Image
                    src={men}
                    className="img-cover"
                    width={100}
                    height={100}
                    priority
                    alt=" MAIN MENU"
                    onClick={openMainMenuModal}
                  />
                  <Modal
                    appElement={
                      typeof window !== "undefined"
                        ? document.getElementById("root")
                        : undefined
                    }
                    isOpen={mainMenuModalIsOpen}
                    onRequestClose={closeMainMenuModal}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Main Menu Modal"
                  >
                    <Image
                      src={men}
                      placeholder="blur"
                      alt="main"
                      width={"auto"}
                      height={"auto"}
                    />
                    <button
                      onClick={closeMainMenuModal}
                      style={closeButtonStyles}
                    >
                      &#10060;
                    </button>
                  </Modal>
                </figure>

                <div>
                  <div className="title-wrapper">
                    <span className="span title-2"></span>
                    <h3 className="title-3">
                      <a
                        href="#menu"
                        className="card-title"
                        onClick={openMainMenuModal}
                      >
                        HAUPTSPEISEKARTE
                      </a>
                    </h3>

                    <span className="span title-2"></span>
                  </div>

                  <p className="card-text label-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </motion.li>

            <motion.li
             variants={itemVariants}
             initial="hidden"
             whileInView="visible"
            >
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 100, height: 100 }}
                >
                  <Image
                    src={men}
                    className="img-cover"
                    width={100}
                    height={100}
                    priority
                    alt=" MAIN MENU"
                    onClick={openSummerCardModal}
                  />
                  <Modal
                    appElement={
                      typeof window !== "undefined"
                        ? document.getElementById("root")
                        : undefined
                    }
                    isOpen={summerCardModalIsOpen}
                    onRequestClose={closeSummerCardModal}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Summer Card Modal"
                  >
                    <Image
                      src={men}
                      placeholder="blur"
                      alt="smrr"
                      width={"auto"}
                      height={"auto"}
                    />
                    <button
                      onClick={closeSummerCardModal}
                      style={closeButtonStyles}
                    >
                      &#10060;
                    </button>
                  </Modal>
                </figure>

                <div>
                  <div className="title-wrapper">
                    <span className="span title-2"></span>
                    <h3 className="title-3">
                      <a
                        href="#menu"
                        className="card-title"
                        onClick={openSummerCardModal}
                      >
                        SOMMERKARTE
                      </a>
                    </h3>

                    <span className="span title-2"></span>
                  </div>

                  <p className="card-text label-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </motion.li>

            <motion.li
             variants={itemVariants}
             initial="hidden"
             whileInView="visible"
            >
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 100, height: 100 }}
                >
                  <Image
                    src={men}
                    className="img-cover"
                    width={100}
                    height={100}
                    priority
                    alt=" MAIN MENU"
                    onClick={openWildCardModal}
                  />
                  <Modal
                    appElement={
                      typeof window !== "undefined"
                        ? document.getElementById("root")
                        : undefined
                    }
                    isOpen={wildCardModalIsOpen}
                    onRequestClose={closeWildCardModal}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Wild Card Modal"
                  >
                    <Image
                      src={men}
                      placeholder="blur"
                      alt="wild"
                      width={"auto"}
                      height={"auto"}
                    />
                    <button
                      onClick={closeWildCardModal}
                      style={closeButtonStyles}
                    >
                      &#10060;
                    </button>
                  </Modal>
                </figure>

                <div>
                  <div className="title-wrapper">
                    <span className="span title-2"></span>
                    <h3 className="title-3">
                      <a
                        href="#menu"
                        className="card-title"
                        onClick={openWildCardModal}
                      >
                       WILDKARTE
                      </a>
                    </h3>

                    <span className="span title-2"></span>
                  </div>

                  <p className="card-text label-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </motion.li>

            <motion.li
             variants={itemVariants}
             initial="hidden"
             whileInView="visible"
            >
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 100, height: 100 }}
                >
                  <Image
                    src={men}
                    className="img-cover"
                    width={100}
                    height={100}
                    priority
                    alt=" MAIN MENU"
                    onClick={openLnchCardModal}
                  />
                  <Modal
                    appElement={
                      typeof window !== "undefined"
                        ? document.getElementById("root")
                        : undefined
                    }
                    isOpen={lnchCardModalIsOpen}
                    onRequestClose={closeLnchCardModal}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Wild Card Modal"
                  >
                    <Image
                      src={men}
                      placeholder="blur"
                      alt="wild"
                      width={"auto"}
                      height={"auto"}
                    />
                    <button
                      onClick={closeLnchCardModal}
                      style={closeButtonStyles}
                    >
                      &#10060;
                    </button>
                  </Modal>
                </figure>

                <div>
                  <div className="title-wrapper">
                    <span className="span title-2"></span>
                    <h3 className="title-3">
                      <a
                        href="#menu"
                        className="card-title"
                        onClick={openLnchCardModal}
                      >
                       MITTAGSMENÜ
                      </a>
                    </h3>

                    <span className="span title-2"></span>
                  </div>

                  <p className="card-text label-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </motion.li>

            <motion.li
             variants={itemVariants}
             initial="hidden"
             whileInView="visible"
            >
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: 100, height: 100 }}
                >
                  <Image
                    src={men}
                    className="img-cover"
                    width={100}
                    height={100}
                    priority
                    alt=" MAIN MENU"
                    onClick={openMnthCardModal}
                  />
                  <Modal
                    appElement={
                      typeof window !== "undefined"
                        ? document.getElementById("root")
                        : undefined
                    }
                    isOpen={mnthCardModalIsOpen}
                    onRequestClose={closeMnthCardModal}
                    ariaHideApp={false}
                    style={customStyles}
                    contentLabel="Wild Card Modal"
                  >
                    <Image
                      src={men}
                      placeholder="blur"
                      alt="wild"
                      width={"auto"}
                      height={"auto"}
                    />
                    <button
                      onClick={closeMnthCardModal}
                      style={closeButtonStyles}
                    >
                      &#10060;
                    </button>
                  </Modal>
                </figure>

                <div>
                  <div className="title-wrapper">
                    <span className="span title-2"></span>
                    <h3 className="title-3">
                      <a
                        href="#menu"
                        className="card-title"
                        onClick={openMnthCardModal}
                      >
                        MONATSKARTE
                      </a>
                    </h3>

                    <span className="span title-2"></span>
                  </div>

                  <p className="card-text label-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </motion.li>
          </motion.ul>

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

export default Menu;
