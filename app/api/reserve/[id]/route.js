
import dbConnect from "@/backend/config/dbConnect";
import { NextResponse } from "next/server";
import Reserve from "../../../../backend/models/reserve";





export async function GET(req ,{params}){
    const {id} = params;
    await dbConnect();
   const reserve =  await Reserve.findOne({_id: id})
   return NextResponse.json({reserve}, {status: 200});

}