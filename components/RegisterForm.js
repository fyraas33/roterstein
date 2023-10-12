"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../assest/css/login.css"
export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
const [userType, setUserType]= useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div>
    <div className="container">
 <div className="screen">
   <div className="screen__content">
     <form  onSubmit={handleSubmit} className="login">
       <div className="login__field">
         <i className="login__icon fas fa-user" />
         <input
          onChange={(e) => setName(e.target.value)}
           type="text"
           className="login__input"
           placeholder="User name "
         />
       </div>
       <div className="login__field">
   
         <input
       onChange={(e) => setUserType(e.target.value)}
           type="radio"
           className="usertype"
         
         />user
          <input
        onChange={(e) => setUserType(e.target.value)}
       type="radio"
       className="usertype"
      
     />admin
       </div>
       <div className="login__field">
         <i className="login__icon fas fa-user" />
         <input
          onChange={(e) => setEmail(e.target.value)}
           type="text"
           className="login__input"
           placeholder="email "
         />
       </div>
       
       <div className="login__field">
         <i className="login__icon fas fa-lock" />
         <input
           onChange={(e) => setPassword(e.target.value)}
           type="password"
           className="login__input"
           placeholder="Password"
         />
       </div>
       <button className="button login__submit">
         <span className="button__text">Log In Now</span>
         <i className="button__icon fas fa-chevron-right" />
       </button>
       {error && (
           <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
             {error}
           </div>
         )}
     </form>
    
   </div>
   <div className="screen__background">
     <span className="screen__background__shape screen__background__shape4" />
     <span className="screen__background__shape screen__background__shape3" />
     <span className="screen__background__shape screen__background__shape2" />
     <span className="screen__background__shape screen__background__shape1" />
   </div>
 </div>
</div>

  
 
   </div>
  );
}
