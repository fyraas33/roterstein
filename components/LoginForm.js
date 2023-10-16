"use client";

import "../app/globals.css"
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
    <div className="grid h-screen place-items-center">
  


  <div className="container mx-auto">
  <div className="flex justify-center px-6 my-12">
    {/* Row */}
    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
      {/* Col */}
      <div
        className="w-full picss h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
    
      />
      {/* Col */}
      <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
        <form  onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
            onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
             onChange={(e) => setPassword(e.target.value)}
             className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
             id="password"
              type="password"
              placeholder="******************"
              required
            />
            {error && (
           <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
             {error}
           </div>
         )}
          </div>
         
          <div className="mb-6 text-center">
        
            <button  className=" w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
         <span className="button__text">Log In </span>
         <i className="button__icon fas fa-chevron-right" />
       </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <p
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
           
            >
             Powered by oaase©
            </p>
          </div>
         
        </form>
      </div>
    </div>
  </div>
</div>

 
   </div>
  );
}
