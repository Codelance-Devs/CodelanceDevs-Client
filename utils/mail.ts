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
