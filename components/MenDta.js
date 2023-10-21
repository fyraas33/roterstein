

import Image from "next/image";

import React from "react";

import "../assest/css/menu.css";

import {motion} from 'framer-motion'
import { contVariants, itemVariants } from '../utils/motion';
import Link from "next/link";




const getMenu = async () => {
  try {
    const apiUrl = process.env.NEXTAUTH_URL || 'https://roterstein.vercel.app'; 
    const res = await fetch(`${apiUrl}/api/menu`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch menu");
    }
    const data = await res.json();
 // Log the data to check its structure
    return data;
  } catch (error) {
    console.log("error loading menu:" , error);
    return { menu: [] }; // Return a default value if the fetch fails
  }
}




export default async function MenDta() {

  const data = await getMenu();

  if (!data || !data.menu) {
    // Handle the case where data or data.menu is undefined
    console.error('Menu data is not available');
    return null;
  }

  const { menu } = data;

  
  return (
    <div className="">



       <ul className="grid-list "   >
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

       

         
          
          </ul>    
    </div>
  );
}

