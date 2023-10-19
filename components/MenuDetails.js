

import Image from "next/image";

import React from "react";

import "../assest/css/menu.css";






const getMenu = async(id) =>{
  try {
    const res =   await fetch(`http://localhost:3000/api/menu/${id}`, {
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




<h1>{menu.title}</h1>

   

       
     <Image
                    src={menu.imageUrl}
                    className="img-cover"
                    width={100}
                    height={100}
                    priority
                    alt=" MAIN MENU"
                 
                  />
         
          
         
    </div>
  );
}

