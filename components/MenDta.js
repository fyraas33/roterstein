

import Image from "next/image";

import React from "react";

import "../assest/css/menu.css";

import {motion} from 'framer-motion'
import { contVariants, itemVariants } from '../utils/motion';
import Link from "next/link";




const getMenu = async() =>{
  try {
    const res =   await fetch('https://roterstein.vercel.app/api/menu', {
          cache:"no-store",
      });

if(!res.ok){
  throw new Error("failed to fetch menu");
}
return res.json();
  } catch (error) {
      console.log("error loading menu:" , error);
  }
}



export default async function MenDta() {

  const {menu} = await getMenu();

 

  
  return (
    <div className="">



       <motion.ul className="grid-list "   variants={contVariants}
             initial="hidden"
             whileInView="visible" >
      {menu.map(m =>(      <motion.li
      key={m._id}
             variants={itemVariants}
             initial="hidden"
             whileInView="visible"
            
            >
        <Link href={`/menu/${m._id}`} target="blank" >        <div className="menu-card hover:card">
              <figure
                  className="card-banner img-holder"
                  style={{ width: 100, height: 100 }}
                >
                  <Image
                    src={m.imageUrl}
                    className="img-cover"
                    width={100}
                    height={100}
                    priority
                    alt=" MAIN MENU"
                 
                  />
              
                </figure>

                <div>
                 
                  <h3 className="title-3">
                  <span className="span title-2"></span>     {m.title}<span className="span title-2"></span>
                  </h3>
                </div>
              </div></Link>
            </motion.li>))}

       

         
          
          </motion.ul>    
    </div>
  );
}

