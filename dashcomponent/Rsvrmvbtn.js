"use client"

import { useRouter } from "next/navigation";

function Rsvrmvbtn({id}) {
const router = useRouter();
const rmvReserve = async() => {
  const confirmed = confirm('Are you sure ?');
  if (confirmed) {
    
    const apiUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'; 
    const res =   await fetch(`${apiUrl}/api/api/reserve?id=${id}` , { 
      method : 'DELETE',
    });
    if (res.ok){
      router.refresh();
    }
    
  }
};

  return (
    <button onClick={rmvReserve} >
      <span  className="las la-trash "  />
    </button>
  )
}

export default Rsvrmvbtn