import Link from 'next/link'
import React from 'react'
import Rmvbtn from "./Rmvbtn"
import Image from 'next/image';
import { url } from 'inspector';



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


export default async function Dmenu() {

  const data = await getMenu();
  
  if (!data || !data.menu) {
    // Handle the case where data or data.menu is undefined
    console.error('Menu data is not available');
    return null;
  }

  const { menu } = data;

  return (
    <div>
       
         <div>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>

    <>

    
<div className="">

<main>
<div className="page-header">
        <h1>Dashboard / Menu</h1>
       
      </div> 
 <div className="page-content">
  
   <div className="records table-responsive">
    
     <div>
       <table className='table-fixed' width={"100%"}>
       <thead>
           <tr>
           
             <th>
               <span /> IMAGE
             </th>
             <th>
               <span  /> TITLE
             </th>
             <th>
               <span  />
             </th>
           
             <th>
              <Link href={"/dashboard/menu/addmenu"}> <span className="las la-plus" /> Add New Menu</Link>
             </th>
           </tr>
         </thead>
         {menu.map(m =>(
         <tbody key={m._id}>
           <tr >
          
             <td>
               <div className="client">
                 <div
                   className="client-img bg-img"
                   style={{ backgroundImage: `url(${m.imageUrl})` }}
                 />
        
               </div>
             </td>
             <td>{m.title}</td>
             <td></td>
            
             <td>
               <div className="actions">
                 <Rmvbtn id={m._id} />
               <Link href={`/dashboard/menu/editmenu/${m._id}`}>  <span className="las la-edit" /></Link>
                 
               </div>
             </td>
           </tr>
         
         </tbody>
         ))}
       </table>
     </div>
   </div>
 </div>
</main>
</div>

</>

</div>
    </div>
  )
}
