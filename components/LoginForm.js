"use client";


import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import "../assest/css/login.css"
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
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
