

import Image from "next/image";

import React from "react";

import "../assest/css/menu.css";


import { PDFDocument } from 'pdf-lib';



const getMenu = async(id) =>{
  try {
    const apiUrl = process.env.NEXTAUTH_URL || 'https://roterstein.vercel.app' ; 
    const res =   await fetch(`${apiUrl}/api/menu/${id}`, {
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



export default async function MenuDetails({id , title }) {

  const {menu} = await getMenu(id);



  
  return (
    <div className="">






   

       

        <object width="100%" height="1000px" data={menu.menuPdf}></object> 
      
    
     

         
    </div>
  );
}

