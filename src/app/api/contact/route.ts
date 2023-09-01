import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer')

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  console.log({ name, email, message })

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env['GMAIL_FROM'],
        pass: process.env['GMAIL_PASSWORD'],
      },
    })

    const mailOptions = {
      from: process.env['GMAIL_FROM'],
      to: 'mikhail.gostev.dev@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    }

    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 })
  }
}
