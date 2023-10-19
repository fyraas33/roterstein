import dbConnect from "@/backend/config/dbConnect";
import Menu from "../../../../backend/models/menu"
import { NextResponse } from "next/server";
export async function PUT(req , {params}) {

    const {id} = params;
    const {newTitle: title  , imageUrl: imageUrl} = await req.json();
    await dbConnect();
    await Menu.findByIdAndUpdate(id, {title, imageUrl})
    return NextResponse.json({message: "menu updated"}, {status: 200});
}


export async function GET(req ,{params}){
    const {id} = params;
    await dbConnect();
   const menu =  await Menu.findOne({_id: id})
   return NextResponse.json({menu}, {status: 200});

}