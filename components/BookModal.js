"use client"

import React from "react";
import {motion} from 'framer-motion'
function BookModal() {
  const generateOptions = () => {
    const options = [];
    for (let i = 1; i <= 50; i++) {
      options.push(
        <option key={i} value={`${i}-person`}>
          {i} Person
        </option>
      );
    }
    return options;
  };
  return (
    <div>
      <section className="reservation" id="reservation">
        <div className="container">
          <div className="form  bg-black-10">
          <form action="" className="form-left">
        <h2 className="headline-1 text-center">Online Reservation</h2>
        <p className="form-text text-center">
        Buchungsanfrage
          <a href="tel:043 541 82 62" className="link">
          043 541 82 62  
          </a>
          oder füllen Sie das Reservierungsformular aus.
        </p>
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            autoComplete="off"
            className="input-field"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefonnummer*"
            autoComplete="off"
            className="input-field"
          />
               <input
            type="tel"
            name="phone"
            placeholder="Email*"
            autoComplete="off"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <div className="">
   
       
            <select name="person" className="input-field">
              <option value="1 Person">1 Person</option>
            {generateOptions()}
            </select>
       
          
          </div>
          <div className="">
       
         
            <input
              type="date"
              name="reservation-date"
              className="input-field"
            />
          
       
          </div>
          <div className="">
         
          
            <select name="person" className="input-field">
              <option value="08:00Uhr">08 : 00 Uhr</option>
              <option value="09:00Uhr">09 : 00 Uhr</option>
              <option value="010:00Uhr">10 : 00 Uhr</option>
              <option value="011:00Uhr">11 : 00 Uhr</option>
              <option value="012:00Uhr">12 : 00 Uhr</option>
              <option value="13:00Uhr">13 : 00 Uhr</option>
              <option value="14:00Uhr">14 : 00 Uhr</option>
              <option value="15:00Uhr">15 : 00 Uhr</option>
              <option value="15:00Uhr">16 : 00 Uhr</option>
              <option value="17:00Uhr">17 : 00 Uhr</option>
              <option value="18:00Uhr">18 : 00 Uhr</option>
              <option value="19:00Uhr">19 : 00 Uhr</option>
              <option value="20:00Uhr">20 : 00 Uhr</option>
              <option value="21:00Uhr">21 : 00 Uhr</option>
              <option value="22:00Uhr">22 : 00 Uhr</option>
            </select>
      
            
          </div>
        </div>
        <textarea
          name="message"
          placeholder="Nachricht"
          autoComplete="off"
          className="input-field"
          defaultValue={""}
        />
        <motion.button type="submit" className="btn btn-secondary" whileTap={{scale:0.5}}>
          <span className="text text-1">TISCH BUCHEN</span>
          <span className="text text-2" aria-hidden="true">
          TISCH BUCHEN
          </span>
        </motion.button>
      </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookModal;
