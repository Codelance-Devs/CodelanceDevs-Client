import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import HowWeWork from '../components/about/HowWeWork';
import PublicLayout from '../layouts/public';

const About: NextPage = () => {
	return (
		<PublicLayout>
			<Head>
				<title>About</title>
			</Head>
			<HowWeWork />
		</PublicLayout>
	);
};

export default About;
