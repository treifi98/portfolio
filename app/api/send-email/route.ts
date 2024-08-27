// app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    const body = await request.json()
    const { name, communicationMethod, contactDetails, message } = body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // Use TLS
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        // Send email
        await transporter.sendMail({
            from: `"Your Website" <${process.env.SMTP_USER}>`,
            to: "hello@abdullatiftreifi.com",
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Preferred Communication Method: ${communicationMethod}
        Contact Details: ${contactDetails}
        Message: ${message}
      `,
            html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Preferred Communication Method:</strong> ${communicationMethod}</p>
        <p><strong>Contact Details:</strong> ${contactDetails}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}