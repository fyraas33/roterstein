"use client"

import { useRouter } from "next/navigation";

function Rmbbtn({id}) {
const router = useRouter();
const rmvMenu = async() => {
  const confirmed = confirm('Are you sure ?');
  if (confirmed) {
   const res =  await fetch(`https://roterstein.vercel.app/api/menu?id=${id}` , {
      method : 'DELETE',
    });
    if (res.ok){
      router.refresh();
    }
    
  }
};

  return (
    <button onClick={rmvMenu} >
      <span  className="las la-trash "  />
    </button>
  )
}

export default Rmbbtn