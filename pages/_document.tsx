import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../utils/createEmotionCache';

export default class MyDocument extends Document {
	render() {
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
					<meta
						property='og:url'
						content='https://codelancedevs.com/'
					/>
					<meta property='og:title' content='Codelance Devs' />
					<meta
						property='og:description'
						content="We're a team of individuals with experience in developing and branding here to help you scale up with technology and create an online identity, helping you to sustain digitally in the long run. 
"
					/>
					<meta
						property='og:image'
						content='https://res.cloudinary.com/dm5excyly/image/upload/v1672321839/assets/branding/logo-white-png-full.png'
					/>

					{/* <!-- Twitter --> */}
					<meta
						property='twitter:card'
						content='summary_large_image'
					/>
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
						content='https://res.cloudinary.com/dm5excyly/image/upload/v1672321839/assets/branding/logo-white-png-full.png'
					/>
				</Head>
				<body className='min-h-screen w-full bg-[#fffff]'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage;
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	/* eslint-disable */
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App: any) => (props) =>
				<App emotionCache={cache} {...props} />,
		});
	/* eslint-enable */

	const initialProps = await Document.getInitialProps(ctx);
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			...React.Children.toArray(initialProps.styles),
			...emotionStyleTags,
		],
	};
};
