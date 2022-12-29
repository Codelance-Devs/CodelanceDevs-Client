import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	port: 465,
	host: 'smtp.gmail.com',
	auth: {
		user: process.env.MAILER_EMAIL,
		pass: process.env.MAILER_PASSWORD,
	},
	secure: true,
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
          <div style="width:100%;background-color:black; padding-left: 2em;">
          <img src="https://res.cloudinary.com/dm5excyly/image/upload/v1672321201/assets/branding/logo-black-svg-full.svg" alt="codelance devs" style="width: 40%; height: auto;" />
          </div>
          <p>Hey ${name},</p>
          <p>We're glad to see your interest in codelance devs and thanks for signing up for our service release waitlist.</p>
          <p>Here's a list of services we'll be offering when we're service ready.
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
