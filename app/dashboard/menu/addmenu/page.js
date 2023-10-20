"use client";

import "@/app/globals.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function AddMenu() {
  const CLOUD_NAME= 'dzendqev2';
  const UPLOAD_PRESET= 'roterstein';
  const CLOUD_KEY= '456821689281721'
  const [title, setTitle] = useState("");

  const [photo, setPhoto] = useState("");
  const router = useRouter();
const {data: session, status} = useSession()


if(status === 'loading...'){
  return <p>loading...</p>
}
if(status === 'unauthenticated'){
  return <p>Access Denied</p>
}
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !photo) {
      alert("title and image are requierd ");
      return;
    }
    try {
      const imageUrl = await uploadImage()
      const apiUrl = process.env.NEXTAUTH_URL || 'https://roterstein.vercel.app'; 
    const res =   await fetch(`${apiUrl}/api/menu`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         
        },
        body: JSON.stringify({ title , imageUrl }),
      });
      if (res.ok) {
        router.refresh();
        router.push("/dashboard/menu");
      } else {
        throw new Error("failed to create menu");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImage = async()=> {
    if(!photo) return
    const formData = new FormData()
    formData.append('file' , photo)
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append("api_key", CLOUD_KEY);
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method:'POST',
        body:formData
      })
      const data = await res.json()
      
      const imageUrl = data['secure_url']
      return imageUrl
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>

        <>
          <div className="">
            <main>
              <div className="page-header">
                <h1>Dashboard / Add Menu</h1>
              </div>
              <div className="page-content">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="border border-slate-500 px-8 py-2 "
                    placeholder="menu title"
                  />
                 
                  <label htmlFor="image">Upload image</label>
                  <input   className="border border-slate-500 px-8 py-2 "  type="file" id="image"   onChange={(e) => setPhoto(e.target.files[0])} />
                  <center>
                    <button
                      type="submit"
                      className="bg-green-600 font-bold text-white py-3 px-6 w-fit "
                    >
                      Add Menu
                    </button>
                  </center>
                </form>
              </div>
            </main>
          </div>
        </>
      </div>
    </div>
  );
}
