"use client"
import Image from "next/image"

import logo from "../assest/img/AZL.jpg"

function Sidebaar() {
  return (
   
    <div className="" >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
        <div className="">
    <div className="side-header">
      <h3>
        M<span>odern</span>
      </h3>
    </div>
    <div className="side-content">
      <div className="profile">
        <div
          className="profile-img bg-img"
          style={{ backgroundImage: "url(img/3.jpeg)" }}
        />
        <h4>David Green</h4>
        <small>Art Director</small>
      </div>
      <div className="side-menu">
        <ul>
          <li>
            <a href="" className="active">
              <span className="las la-home" />
              <small>Dashboard</small>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-user-alt" />
              <small>Profile</small>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-envelope" />
              <small>Mailbox</small>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-clipboard-list" />
              <small>Projects</small>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-shopping-cart" />
              <small>Orders</small>
            </a>
          </li>
          <li>
            <a href="">
              <span className="las la-tasks" />
              <small>Tasks</small>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
 
    </div>
  )
}

export default Sidebaar