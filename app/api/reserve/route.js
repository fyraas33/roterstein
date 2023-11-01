
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
 
 export async function GET() {

  await dbConnect();
  const reserve = await Reserve.find();
  return NextResponse.json({reserve});

}

export async function DELETE(req) {

const id = req.nextUrl.searchParams.get("id");
await dbConnect();
await Reserve.findByIdAndDelete(id);
return NextResponse.json({message: "reservation deleted"}, {status:200})

}



export async function PUT(req) {
  const id = req.nextUrl.searchParams.get("id");
  const { status } = await req.json();
  
  try {
    await dbConnect();
    const reservation = await Reserve.findById(id);
    if (!reservation) {
      return NextResponse.json({ message: "Reservation not found" }, { status: 404 });
    }
    reservation.status = status;
    await reservation.save();
    return NextResponse.json({ message: "Reservation status updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating reservation status:", error);
    return NextResponse.json({ message: "Error updating reservation status" }, { status: 500 });
  }
}
