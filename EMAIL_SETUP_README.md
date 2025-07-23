# Email Functionality Setup for Vishal Creations Contact Form

## Overview
The contact form now sends emails to `contact@vishalcreations.com` using Netlify Functions and Office365 SMTP.

## Files Added/Modified:

1. **netlify/functions/send-email.ts** - Netlify Function to handle email sending
2. **netlify.toml** - Netlify configuration file
3. **src/pages/Contact.tsx** - Updated contact form with async email functionality
4. **package.json** - Added required dependencies
5. **ENV_SETUP.md** - Detailed environment variables setup guide

## Setup Instructions:

### 1. Deploy to Netlify
- Push your code to your repository
- Connect your repository to Netlify
- The site will automatically build and deploy

### 2. Configure Environment Variables
Go to your Netlify site dashboard:
- Navigate to **Site settings > Environment variables**
- Add these variables:
  - `SMTP_USER`: Your Office365 email (e.g., admin@vishalcreations.com)
  - `SMTP_PASS`: Your Office365 app password

### 3. Set up Office365 App Password
1. Go to https://account.microsoft.com/security
2. Sign in with your Office365 account
3. Click "Advanced security options"
4. Under "App passwords", create a new app password
5. Use this app password as your `SMTP_PASS` value

### 4. Test the Form
- Visit your deployed site
- Fill out the contact form
- Submit the form
- Check that emails are received at contact@vishalcreations.com

## Features:

✅ **Secure SMTP Integration**: Uses Office365 SMTP with proper authentication  
✅ **Professional Email Template**: HTML formatted emails with company branding  
✅ **Form Validation**: Client-side and server-side validation  
✅ **Loading States**: Shows "Sending..." when submitting  
✅ **Error Handling**: Displays error messages if submission fails  
✅ **Success Confirmation**: Shows success message after sending  
✅ **Reply-To Header**: Allows direct reply to customer email  
✅ **Auto-Reset**: Form clears automatically after successful submission  

## Email Template Includes:
- Customer name, company, email, phone
- Inquiry type and detailed message
- Professional HTML formatting
- Reply-to customer email for easy response

## Local Development:
1. Copy `.env.example` to `.env`
2. Fill in your actual SMTP credentials
3. Run `npm run dev` to test locally
4. Use Netlify CLI for testing functions: `netlify dev`

## Troubleshooting:
- Check Netlify Functions logs for errors
- Verify environment variables are set correctly
- Ensure you're using an app password, not your regular password
- Check spam folder for test emails
