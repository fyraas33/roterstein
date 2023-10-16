
import dbConnect from "@/backend/config/dbConnect";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Reserve from "../../../backend/models/reserve";

export async function POST(req) {
   const { fullname, email, message,phone,day,time,person } = await req.json();
 
   try {
     await dbConnect();
     await Reserve.create({ fullname, email, message, phone, day, time, person });
 
     return NextResponse.json({
       msg: ["Message sent successfully"],
       success: true,
     });
   } catch (error) {
     if (error instanceof mongoose.Error.ValidationError) {
       let errorList = [];
       for (let e in error.errors) {
         errorList.push(error.errors[e].message);
       }
       console.log(errorList);
       return NextResponse.json({ msg: errorList });
     } else {
       return NextResponse.json({ msg: ["Unable to send message."] });
     }
   }
 }
 
