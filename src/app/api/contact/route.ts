import { NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';
import { CONTACT_INFO } from '@/types/contact'; // To get the recipient email

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      service,
      message,
      preferredContact,
      projectTimeline,
    } = body;

    // Ensure all required fields are present (optional: add more validation)
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Ensure Mailjet API keys are set
    if (!process.env.MJ_APIKEY_PUBLIC || !process.env.MJ_APIKEY_PRIVATE) {
      console.error('Mailjet API keys (MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE) are not set in environment variables.');
      return NextResponse.json({ message: 'Server configuration error: Missing Mailjet API keys.' }, { status: 500 });
    }
    
    // Add a check for EMAIL_FROM_ADDRESS
    if (!process.env.EMAIL_FROM_ADDRESS) {
        console.error('EMAIL_FROM_ADDRESS is not set in environment variables.');
        return NextResponse.json({ message: 'Server configuration error: Missing sender email address.' }, { status: 500 });
    }


    const mailjet = Mailjet.apiConnect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE
    );

    const mailjetRequest = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.EMAIL_FROM_ADDRESS,
              Name: `${name} (YardScapes Contact)`,
            },
            To: [
              {
                Email: process.env.EMAIL_TO || CONTACT_INFO.email,
                Name: 'YardScapes Admin', // Or any other appropriate name
              },
            ],
            ReplyTo: {
              Email: email,
              Name: name,
            },
            Subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
            HTMLPart: `
              <h1>New Contact Form Submission</h1>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email} (Reply to this address)</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
              <p><strong>Project Timeline:</strong> ${projectTimeline || 'Not specified'}</p>
              <p><strong>Preferred Contact Method:</strong> ${preferredContact || 'Not specified'}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\\n/g, '<br>')}</p>
            `,
          },
        ],
      });

    await mailjetRequest;

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    let errorMessage = 'Internal Server Error';
    // node-mailjet errors might have a specific structure, adjust if needed
    if (error && typeof error === 'object' && 'isMailjetError' in error && error.isMailjetError && 'ErrorMessage' in error) {
        errorMessage = error.ErrorMessage as string;
    } else if (error && typeof error === 'object' && 'message' in error) {
        errorMessage = error.message as string;
    }
    return NextResponse.json({ message: 'Error sending email', error: errorMessage }, { status: 500 });
  }
} 