import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import * as nodemailer from 'nodemailer';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body
    const formData: FormData = JSON.parse(event.body || '{}');
    
    // Validate required fields
    const { name, company, email, phone, inquiryType, message } = formData;
    
    if (!name || !company || !email || !phone || !inquiryType || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' }),
      };
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransporter({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your Office365 email
        pass: process.env.SMTP_PASS, // Your Office365 password or app password
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    // Email content
    const emailContent = `
      New Contact Form Submission
      
      Customer Details:
      - Name: ${name}
      - Company: ${company}
      - Email: ${email}
      - Phone: ${phone}
      - Inquiry Type: ${inquiryType}
      
      Message:
      ${message}
      
      ---
      This email was sent from the Vishal Creations website contact form.
    `;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: linear-gradient(135deg, #2563eb, #16a34a); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #2563eb; }
          .value { margin-left: 10px; }
          .message-box { background: #f8f9fa; padding: 15px; border-left: 4px solid #2563eb; margin: 15px 0; }
          .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Vishal Creations Website</p>
        </div>
        
        <div class="content">
          <h2>Customer Details:</h2>
          
          <div class="field">
            <span class="label">Name:</span>
            <span class="value">${name}</span>
          </div>
          
          <div class="field">
            <span class="label">Company:</span>
            <span class="value">${company}</span>
          </div>
          
          <div class="field">
            <span class="label">Email:</span>
            <span class="value">${email}</span>
          </div>
          
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value">${phone}</span>
          </div>
          
          <div class="field">
            <span class="label">Inquiry Type:</span>
            <span class="value">${inquiryType}</span>
          </div>
          
          <h3>Message:</h3>
          <div class="message-box">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent from the Vishal Creations website contact form.</p>
          <p>Please respond to the customer at: ${email}</p>
        </div>
      </body>
      </html>
    `;

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'contact@vishalcreations.com',
      replyTo: email, // This allows direct reply to the customer
      subject: `New Contact Form Submission - ${inquiryType} from ${company}`,
      text: emailContent,
      html: htmlContent,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ 
        success: false, 
        error: 'Failed to send email' 
      }),
    };
  }
};

export { handler };
