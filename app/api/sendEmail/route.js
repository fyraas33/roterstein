import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
      const { subject, message, to } = await request.json();

        const transporter = nodemailer.createTransport({
          host: 'smtp.office365.com',
          port: 587,
          secure: false,
            auth: {
                user: 'fc@oaase.com',
                pass: process.env.NODEMAILER_PW 
            }
        })

        const mailOption = {
            from: 'fc@oaase.com',
            to,
            subject: "Roter Stein ",
            html: `
        <h3>Dear Client </h3>
        <h4> ${message}</h4> 
      
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}