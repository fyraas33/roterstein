import Link from 'next/link'
import React from 'react'
import Rsvrmvbtn from "./Rsvrmvbtn"




const getReserve = async() =>{
    try {
      const res =   await fetch('https://roterstein.vercel.app/api/reserve', {
            cache:"no-store",
        });

if(!res.ok){
    throw new Error("failed to fetch reservation");
}
return res.json();
    } catch (error) {
        console.log("error loading reservation:" , error);
    }
}


export default async function Rservation() {

  const {reserve} = await getReserve();

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
               <span /> Name
             </th>
             <th>
               <span  />  Email
             </th>
            
             <th>
               <span  /> phonenumber
             </th>
             <th>
               <span  /> date
             </th>
             <th>
               <span  /> time
             </th>
             <th>
               <span  /> Num of person
             </th>
             <th>
               <span  />Remark
             </th>
            
           </tr>
         </thead>
         {reserve.map(r =>(
         <tbody key={r._id}>
           <tr >
          
             <td>
             
               
        {r.fullname}
              
             </td>
             <td>{r.email}</td>
             <td>{r.phone}</td>
             <td>{r.day}</td>
             <td>{r.time}</td>
             <td>{r.person}</td>
             <td>{r.message}</td>
             <td>
               <div className="actions">
                 <Rsvrmvbtn id={r._id} />
             
                 
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
