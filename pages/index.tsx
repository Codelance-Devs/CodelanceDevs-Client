import Head from 'next/head';
import Landing from '../components/Landing';
import PageLoader from '../components/PageLoader';
import Services from '../components/Services';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Codelance Devs</title>
			</Head>
			<PageLoader />
			<Landing />
			<Services />
		</div>
	);
}
