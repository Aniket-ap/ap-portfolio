// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  const formData = await request.json();
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'pro.aniket08@gmail.com',
      replyTo: formData.email,
      subject: `Contact Form: ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        
        Message:
        ${formData.message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}