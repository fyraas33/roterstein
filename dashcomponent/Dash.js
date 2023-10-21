"use client"


import React, { useState, useEffect } from 'react';

import "../assest/css/dash.css"
import Link from 'next/link'

function Dash() {
  const [reservationCount, setReservationCount] = useState(0);


  useEffect(() => {
    // Fetch reservation count from your API route
    fetch('/api/reserve', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        if (data && data.reserve) {
          setReservationCount(data.reserve.length);
        }
      })
      .catch(error => console.error('Error fetching reservation count:', error));
  }, []);

  const maxReservationCount = 10; // Set this to your actual maximum reservation count
  const percentage = (reservationCount / maxReservationCount) * 100;

  // Determine the indicator color based on the percentage
  let backgroundColor;
  if (percentage <= 25) {
    backgroundColor = 'green';
  } else if (percentage <= 50) {
    backgroundColor = 'orange';
  } else if (percentage <= 75) {
    backgroundColor = 'orangered';
  } else {
    backgroundColor = 'red';
  }

  // Style object for the background color
  const indicatorStyle = {
    width: `${percentage}%`,
    backgroundColor: backgroundColor,
  };

  return (
    <div>
         <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>

         <>


  <div className="">
    
    <main>
      <div className="page-header">
      <h1>Dashboard / Home</h1>
      </div> 
      <div className="page-content">
        <div className="analytics">
          <div className="card">
            <div className="card-head">
              <h2>1000</h2>
              <span className="las la-user-friends" />
            </div>
            <div className="card-progress">
              <small>visitor activity this month</small>
              <div className="card-indicator">
                <div className="indicator one" style={{ width: "60%" }} />
              </div>
            </div>
          </div>
         
          <Link href="/dashboard/reservation" >
          <div className="card">
            <div className="card-head">
            {reservationCount}
              <span className="las la-envelope" />
            </div>
            <div className="card-progress">
              <small>New Reservation received</small>
              <div className="card-indicator">
              <div className="indicator four" style={indicatorStyle} />
          </div>
        </div>
          </div></Link>
        </div>
       
      </div>
    </main>
  </div>
</>

    </div>
  )
}

export default Dash