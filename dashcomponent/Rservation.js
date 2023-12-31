import Link from 'next/link'
import React from 'react'
import Rsvrmvbtn from "./Rsvrmvbtn"
import StatusChangeButton from "./StatusChangeButton"


import "../assest/css/reserve.css"



function formatDateWithGermanDay(dateString) {
  const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', options);
}



const getReserve = async () => {
  try {
    const apiUrl = process.env.NEXTAUTH_URL || 'https://roterstein.vercel.app'; 
    const res = await fetch(`${apiUrl}/api/reserve`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch reservation");
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("error loading reservation:" , error);
    return { reserve: [] };
  }
}


export default async function Rservation() {

  const data = await getReserve();


  
  if (!data || !data.reserve) {
    // Handle the case where data or data.reserve is undefined
    console.error('Reservation data is not available');
    return null;
  }

  const { reserve } = data;
 

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
       <table className="table-fixed" width={"100%"}>
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
             <th>
               <span  />Status
             </th>
            
           </tr>
         </thead>
       {reserve.map(r =>(
         <tbody  key={r._id}>

            
           <tr >
          
             <td>
             
               
        {r.fullname}
              
             </td>
             <td>{r.email}</td>
             <td>{r.phone}</td>
           <td>{formatDateWithGermanDay(r.day)}</td> 
             <td>{r.time}</td>
             <td>{r.person}</td>
             <td>{r.message}</td>
             <td  >   <StatusChangeButton id={r._id} email={r.email} status={r.status}/></td>
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
