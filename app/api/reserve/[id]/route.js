
import dbConnect from "@/backend/config/dbConnect";
import { NextResponse } from "next/server";
import Reserve from "../../../../backend/models/reserve";





export async function GET(req ,{params}){
    const {id} = params;
    await dbConnect();
   const reserve =  await Reserve.findOne({_id: id})
   return NextResponse.json({reserve}, {status: 200});

}

export async function PUT(req, {params}) {
    const {id} = params;
    const {status} = await req.json();
  
    await dbConnect();
  
    const reserve = await Reserve.findOne({_id: id});
  
    if (!reserve) {
      return NextResponse.json({error: 'Reservation not found'}, {status: 404});
    }
  
    reserve.status = status;
    await reserve.save();
  
    return NextResponse.json({reserve}, {status: 200});
  }