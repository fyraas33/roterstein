"use client"

import { useRouter } from "next/navigation";

function Rsvrmvbtn({id}) {
const router = useRouter();
const rmvReserve = async() => {
  const confirmed = confirm('Are you sure ?');
  if (confirmed) {
   const res =  await fetch(`https://roterstein.vercel.app/api/reserve?id=${id}` , {
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