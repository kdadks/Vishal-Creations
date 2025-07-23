# Environment Variables Configuration for Netlify

## Required Environment Variables

To configure email sending functionality, you need to set the following environment variables in your Netlify site settings:

### 1. SMTP_USER
- **Value**: Your Office365/Outlook email address
- **Example**: `your-email@vishalcreations.com` or `your-email@outlook.com`
- **Description**: This is the email address that will be used to send emails through SMTP

### 2. SMTP_PASS
- **Value**: Your Office365/Outlook password or App Password
- **Example**: `your-email-password` or `your-app-password`
- **Description**: For security, it's recommended to use an App Password instead of your regular password

### 3. RECIPIENT_EMAIL (Optional)
- **Value**: The email address where contact form submissions should be sent
- **Example**: `contact@vishalcreations.com`
- **Description**: If not provided, emails will be sent to the SMTP_USER address

## How to Set Environment Variables in Netlify:

1. **Log in to your Netlify Dashboard**
2. **Go to your site settings**
3. **Navigate to "Site settings" > "Environment variables"**
4. **Add the following variables:**
   - Variable name: `SMTP_USER`
   - Value: `your-email@vishalcreations.com`
   
   - Variable name: `SMTP_PASS`
   - Value: `your-email-password-or-app-password`
   
   - Variable name: `RECIPIENT_EMAIL` (Optional)
   - Value: `contact@vishalcreations.com`

## Setting up App Password for Office365/Outlook:

For better security, use an App Password instead of your regular email password:

1. **Go to Microsoft Account Security**: https://account.microsoft.com/security
2. **Sign in** with your Office365/Outlook account
3. **Click on "Advanced security options"**
4. **Under "App passwords"**, click **"Create a new app password"**
5. **Give it a name** like "Netlify Contact Form"
6. **Copy the generated password** and use it as the `SMTP_PASS` value

## Testing the Configuration:

After setting up the environment variables:

1. **Deploy your site** to Netlify
2. **Test the contact form** by submitting a message
3. **Check the Netlify Functions logs** in your dashboard under "Functions" tab
4. **Verify that emails are received** at contact@vishalcreations.com

## Troubleshooting:

- **If emails are not being sent**: Check the Netlify Functions logs for errors
- **If authentication fails**: Verify your SMTP_USER and SMTP_PASS are correct
- **If emails go to spam**: Configure SPF, DKIM, and DMARC records for your domain
- **For 2FA enabled accounts**: You must use an App Password instead of your regular password

## Local Development:

For local testing, create a `.env` file in your project root:

```bash
SMTP_USER=your-email@vishalcreations.com
SMTP_PASS=your-app-password
```

**Important**: Never commit the `.env` file to version control. Add it to your `.gitignore` file.
