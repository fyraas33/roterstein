"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import "../assest/css/send.css"
import "../assest/css/reserve.css"
import {motion} from 'framer-motion'
import Opnhr from './Opnhr'
import Aos from "aos";
import "aos/dist/aos.css";
function Reserve() {

  
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [person, setPerson] = useState("");
  const [buttonText, setButtonText] = useState("TISCH BUCHEN");
  const [buttonState, setButtonState] = useState("idle");


  const [isFlying, setIsFlying] = useState(false);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  
    const res = await fetch("api/reserve", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
        phone,
        day,
        time,
        person,
      }),
    });
  
    const { msg, success } = await res.json();
    if (success) {
      setButtonText("Success"); // successful submission
      setIsFlying(true);
      setTimeout(() => {
        setButtonText("TISCH BUCHEN"); // change text back after 2 seconds
        setIsFlying(false);
      }, 2000);
    } else {
      setButtonText("Error"); // failed submission
      setTimeout(() => {
        setButtonText("TISCH BUCHEN"); // change text back after 2 seconds
      }, 2000);
    }
    setError(msg);
    setSuccess(success);
  
    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

//khati
const generateOptions = () => {
  const options = [];
  for (let i = 1; i <= 50; i++) {
    const label = i === 1 ? `${i} Person` : `${i} Personen`;
    options.push(
      <option key={i} value={`${i}-person`}>
        {label}
      </option>
    );
  }
  return options;
};
useEffect(() => {
  Aos.init();
}, []);

  return (
    <div>
        <section
  className="section testi text-center has-bg-image "
 id='about'
  aria-label="testimonials"
>
    
  <div className="container">
  <p className=" section-subtitle ownr" id="about-label" data-aos="fade-right">
  ÜBER UNS
      </p>
    <div className="quote">”</div>
    <p className=" leading-tight text-5xl font-medium testi-text prgrphha" data-aos="fade-up">
    Willkommen in unserem einzigartigen Restaurant, wo die Aromen Italiens und die Genüsse der Schweiz in perfekter Harmonie verschmelzen. Geniessen Sie hausgemachte Pasta, knusprige Pizzen, zarte Fleisch- und Fischgerichte in einer gemütlichen Atmosphäre. Erleben Sie bei uns die Fusion zweier bemerkenswerter Küchen für ein unvergessliches kulinarisches Erlebnis.
    </p>
    <div className="wrapper">
      <div className="separator" />
      <div className="separator" />
      <div className="separator" />
    </div>

    
  </div>
</section>

        <section className="reservation" id='reservation'>
  <div className="container">
    <div className="form reservation-form bg-black-10" data-aos="fade-up">
      <form action="" className="form-left" onSubmit={handleSubmit} >
        <h2 className="headline-1 text-center">Online Reservation</h2>
        <p className="form-text text-center">
        Buchungsanfrage
                     <a href="tel:043 541 82 62" className="link">
                     &nbsp; 043 541 82 62   &nbsp;
          </a>
          oder füllen Sie das Reservierungsformular aus.
        </p>
        <div className="input-wrapper">
          <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
            type="text"
            name="name"
            placeholder="Name*"
            autoComplete="off"
            className="input-field"
            required
            data-aos="fade-right"    />
          <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
            type="tel"
            name="phone"
            placeholder="Telefonnummer*"
            autoComplete="off"
            className="input-field"
            required
            data-aos="fade-down"   />
               <input
               onChange={(e) => setEmail(e.target.value)}
               value={email}
            type="email"
            name="email"
            placeholder="Email*"
            autoComplete="off"
            className="input-field"
            required
            data-aos="fade-left"   />
        </div>
        <div className="input-wrapper">
          <div className="">
   
       
          <select name="person" className='input-field' value={person} onChange={(e) => setPerson(e.target.value)} data-aos="fade-right">
          <option value="0"  disabled   >Anzahl Personen </option>
          {generateOptions()}
        </select>
       
          
          </div>
          <div className="">
       
         
          <input
            value={day}
              type="date"
              name="reservation-date"
              className="input-field"
              lang="de-DE"
              onChange={(e) => setDay(e.target.value)}
              data-aos="fade-up"  />
          
       
          </div>
          <div className="">
         
          
            <select name="person" className="input-field" value={time} onChange={(e) => setTime(e.target.value)} data-aos="fade-left">
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
        onChange={(e) => setMessage(e.target.value)}
        value={message}
          name="message"
          placeholder="Nachricht"
          autoComplete="off"
          className="input-field"
         
          data-aos="flip-up"    />
       <motion.button 
  type="submit" 
  className={`btn btn-secondary${isFlying ? 'fly' : ''}`} 
  whileTap={{scale:0.5}}
>
         <span className="text text-1">{buttonText}</span>
        <span className="text text-2" aria-hidden="true">
        {buttonText}
        </span>
        </motion.button>
       
        {error &&
  error.map((e, index) => (
    <div
      key={index} // Add a unique key using the index
      className={`${
        success ? "text-green-800" : "text-red-600"
      } px-5 py-2`}
    >
      {e}
    </div>
  ))}
      </form>
      <div
        className="form-right text-center "
        
      >
       <Opnhr/>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Reserve