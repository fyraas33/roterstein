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
                Booking request{" "}
                <a href="tel:043 541 82 62" className="link">
                  043 541 82 62
                </a>
                or fill out the order form
              </p>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="off"
                  className="input-field"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  autoComplete="off"
                  className="input-field"
                />
              </div>
              <div className="input-wrapper">
                <div className="">
                  <ion-icon name="person-outline" aria-hidden="true" />
                  <select name="person" className="input-field">
                    {generateOptions()}
                  </select>
                  <ion-icon name="chevron-down" aria-hidden="true" />
                </div>
                <div className="">
                  <ion-icon name="calendar-clear-outline" aria-hidden="true" />

                  <input
                    type="date"
                    name="reservation-date"
                    className="input-field"
                  />
                  <ion-icon name="chevron-down" aria-hidden="true" />
                </div>
                <div className="">
                  <ion-icon name="time-outline" aria-hidden="true" />

                  <select name="person" className="input-field">
                    <option value="08:00am">08 : 00 am</option>
                    <option value="09:00am">09 : 00 am</option>
                    <option value="010:00am">10 : 00 am</option>
                    <option value="011:00am">11 : 00 am</option>
                    <option value="012:00am">12 : 00 am</option>
                    <option value="01:00pm">01 : 00 pm</option>
                    <option value="02:00pm">02 : 00 pm</option>
                    <option value="03:00pm">03 : 00 pm</option>
                    <option value="04:00pm">04 : 00 pm</option>
                    <option value="05:00pm">05 : 00 pm</option>
                    <option value="06:00pm">06 : 00 pm</option>
                    <option value="07:00pm">07 : 00 pm</option>
                    <option value="08:00pm">08 : 00 pm</option>
                    <option value="09:00pm">09 : 00 pm</option>
                    <option value="10:00pm">10 : 00 pm</option>
                  </select>
                  <ion-icon name="chevron-down" aria-hidden="true" />
                </div>
              </div>
              <textarea
                name="message"
                placeholder="Message"
                autoComplete="off"
                className="input-field"
                defaultValue={""}
              />
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Book A Table</span>
                <span className="text text-2" aria-hidden="true">
                  Book A Table
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookModal;
