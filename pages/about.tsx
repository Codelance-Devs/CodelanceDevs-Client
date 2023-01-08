import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import PublicLayout from '../layouts/public';
import Intro from '../components/about/Intro';
import HowWeWork from '../components/about/HowWeWork';
import WhyUs from '../components/about/WhyUs';
import Team from '../components/about/Team';

const About: NextPage = () => {
	return (
		<PublicLayout>
			<Head>
				<title>About Us</title>
			</Head>
			<Intro />
			<HowWeWork />
			<WhyUs />
			<Team />
		</PublicLayout>
	);
};

export default About;
