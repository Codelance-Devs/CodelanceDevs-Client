import Head from 'next/head';
import FAQ from '../components/landing/FAQ';
import Landing from '../components/landing/Landing';
import PageLoader from '../components/PageLoader';
import Services from '../components/landing/Services';
import PublicLayout from '../layouts/public';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Codelance Devs</title>
			</Head>
			<PageLoader />
			<PublicLayout>
				<Landing />
				<Services />
				<FAQ />
			</PublicLayout>
		</div>
	);
}
