import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<meta name='title' content='Codelance Devs' />
				<meta
					name='description'
					content="We're a team of individuals with experience in developing and branding here to help you scale up with technology and create an online identity, helping you to sustain digitally in the long run. 
"
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://codelancedevs.com/' />
				<meta property='og:title' content='Codelance Devs' />
				<meta
					property='og:description'
					content="We're a team of individuals with experience in developing and branding here to help you scale up with technology and create an online identity, helping you to sustain digitally in the long run. 
"
				/>
				<meta
					property='og:image'
					content='https://res.cloudinary.com/dm5excyly/image/upload/v1672321839/assets/branding/logo-black-png-full.png'
				/>

				{/* <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://codelancedevs.com/'
				/>
				<meta property='twitter:title' content='Codelance Devs' />
				<meta
					property='twitter:description'
					content="We're a team of individuals with experience in developing and branding here to help you scale up with technology and create an online identity, helping you to sustain digitally in the long run. 
"
				/>
				<meta
					property='twitter:image'
					content='https://res.cloudinary.com/dm5excyly/image/upload/v1672321839/assets/branding/logo-black-png-full.png'
				/>
			</Head>
			<body className='min-h-screen w-full bg-[#fffff]'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
