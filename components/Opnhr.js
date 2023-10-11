"use client"

import React, { useState, useEffect } from "react";
import Opnhrs from "./Opnhrs";


import Clock from "../assest/Clock";

export default function Opnhr() {
  const [openingHours, setOpeningHours] = useState({
    Montag: "Geschlossen",
    Dienstag: "9:00 Uhr - 23:00",
    Mittwoch: "9:00 Uhr - 23:00",
    Donnerstag: "9:00 Uhr - 23:00",
    Freitag: "9:00 Uhr- 23:00",
    Samstag: "9:00 Uhr - 23:00",
    Sonntag: "9:30 Uhr - 22:30",
    "Feiertage": "9:30 Uhr . - 22:30",
    "Warme Küche DI bis SO": "11:30 Uhr . - 14:00 . 17:30 - 22:00",
  });

  const [currentDayStatus, setCurrentDayStatus] = useState("Closed");

  const currentDay = new Date().toLocaleString("de-DE", { weekday: "long" });

  useEffect(() => {
    setCurrentDayStatus(isOpen(currentDay));
  }, [currentDay]);

  const isOpen = (day) => {
    const currentTime = new Date();
    const openingHoursForDay = openingHours[day];
    if (openingHoursForDay === "Closed") {
      return "Closed";
    }
    const [, openTime, closeTime] = openingHoursForDay.match(/(\d+:\d+) Uhr - (\d+:\d+)/i);

    const [openHours, openMinutes] = openTime.split(":").map(Number);
    const [closeHours, closeMinutes] = closeTime.split(":").map(Number);

    const openingTime = new Date();
    openingTime.setHours(openHours, openMinutes, 0);

    const closingTime = new Date();
    closingTime.setHours(closeHours, closeMinutes, 0);

    return currentTime >= openingTime && currentTime <= closingTime ? "Open" : "Closed";
  };

  return (
    <div>
      <div className="opening-hours shadow-xl">
        <h4 className="opening-hours_title form-text">Öffnungszeiten <Clock/>
</h4>
        <ul className="opening-hours_days">
          {Object.keys(openingHours).map((day) => (
            <li
              className={`opening-hours_day ${
                currentDay === day ? (currentDayStatus === "Open" ? "open" : "closed") : ""
              }`}
              key={day}
              id={day}
            >
              <span >{day}</span>
              <span>{openingHours[day]}</span>
            </li>
          ))}
        </ul>
        <center>
          <Opnhrs openingHours={openingHours} />
        </center>
      </div>
    </div>
  );
}