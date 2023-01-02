import Head from 'next/head';
import FAQ from '../components/FAQ';
import Landing from '../components/Landing';
import PageLoader from '../components/PageLoader';
import Services from '../components/Services';
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
