import dbConnect from "@/backend/config/dbConnect";
import Menu from "../../../backend/models/menu";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, imageUrl, menuPdf} = await req.json();
  
    try {
      await dbConnect();
      await Menu.create({ title, imageUrl ,menuPdf});
  
      return NextResponse.json({
        msg: ["Menu created successfully"],
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
        return NextResponse.json({ msg: ["Unable to create menu."] });
      }
    }
  }

export async function GET() {

    await dbConnect();
    const menu = await Menu.find();
    return NextResponse.json({menu});

}

export async function DELETE(req) {

  const id = req.nextUrl.searchParams.get("id");
  await dbConnect();
  await Menu.findByIdAndDelete(id);
  return NextResponse.json({message: "menu deleted"}, {status:200})

}