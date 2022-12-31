// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MAILER_EMAIL,
		pass: process.env.MAILER_PASSWORD,
	},
});

interface SubscribedEmailProps {
	name: string;
	email: string;
}

export const sendSubscribedEmail = ({ name, email }: SubscribedEmailProps) => {
	transporter.sendMail({
		to: email,
		from: 'contact@codelancedevs.com',
		subject: 'Codelance Devs Welcomes you onboard our journey!',
		html: `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <title>JS Bin</title>
        </head>
        <body style="width: 100%;height:100vh;background:white;padding:1em;">
          <img src="https://res.cloudinary.com/dm5excyly/image/upload/v1672321839/assets/branding/logo-black-png-full.png" alt="codelance devs" style="width: 40%; height: auto;" />
          <p>Hey ${name},</p>
          <p>It's Kunal here, Co-Founder of Codelance Devs and we're glad to see your interest in codelance devs and thanks for signing up for our service release waitlist.</p>
          <p>Here's a list of services we'll be offering when we're in service from 17th January 2022.
          <ul>
            <li>Website Design</li>
            <li>Website Development and Deployment</li>
            <li>Code Templates</li>
            <li>Wordpress SetUp and Deployment</li>
            <li>Webflow Templates</li>
            <li>and more coming up...</li>
          </ul>
          <p>Have some queries?</p>
          <p>Email us and we'll get back to you: <a href="mailto:contact@codelancedevs.com">contact@codelancedevs.com</a></p>
        </body>
        </html>`,
	});
};
