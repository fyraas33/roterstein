"use client"
import Image from "next/image"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import logo from "../assest/img/AZL.jpg"
import Link from "next/link";
function Sidebaar() {
  const { data: session } = useSession();
  return (
   
    <div className="" >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
        <div className="">
    <div className="side-header">
      <h3>
       <span>Oaase</span>
      </h3>
    </div>
    <div className="side-content">
      <div className="profile">
        <div
          className="profile-img bg-img"
          
        />
        <h4>Roter Stein</h4>
       
      </div>
      <div className="side-menu">
        <ul>
          <li>
            <Link href="/dashboard" className="active">
              <span className="las la-home" />
              <small>Dashboard</small>
            </Link>
          </li>
         
          <li>
            <Link href="/dashboard/reservation" className="active">
             
                <span className="las la-envelope" />
                <small>reservation</small>
              
            </Link>
          </li>
          <li>
          <Link href="/dashboard/menu" className="active">
           
                <span className="las la-clipboard-list" />
                <small>menu</small>
            
          </Link>
          </li>
          
          
        </ul>
      </div>
    </div>
  </div>
  <div className="main-content">
    <header>
      <div className="header-content">
        <label htmlFor="menu-toggle">
          <span className="las la-bars" />
        </label>
        <div className="header-menu">

          <div className="notify-icon">
            <span className="las la-envelope" />
            <span className="notify">4</span>
          </div>
          <div className="notify-icon">
            <span className="las la-bell" />
            <span className="notify">3</span>
          </div>
          <div className="user">
            <div
              className="bg-img"
          
            />
            <span className="las la-power-off" />
            <button className="lgout"  onClick={() => signOut()}>Logout</button>
          </div>
        </div>
      </div>
    </header>
    </div>
    </div>
  )
}

export default Sidebaar