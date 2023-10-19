"use client"



import React from 'react'
import "../assest/css/dash.css"
import Link from 'next/link'

function Dash() {

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
              <h2>10</h2>
              <span className="las la-envelope" />
            </div>
            <div className="card-progress">
              <small>New Reservation received</small>
              <div className="card-indicator">
                <div className="indicator four" style={{ width: "90%" }} />
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