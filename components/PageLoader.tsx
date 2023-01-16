/**
 * Page Loader
 * Loads when user first visits the website.
 */

// Dependencies
import React from 'react';
import Image from 'next/image';
import Logo from '../assets/codelance.png';

const PageLoader = () => {
	return (
		<div className='fixed inset-0 z-50 flex h-screen w-full animate-page-load items-center justify-center bg-slate-200'>
			<Image
				src={Logo}
				alt='logo'
				className='relative w-60 animate-page-load-image'
			/>
		</div>
	);
};

export default PageLoader;
