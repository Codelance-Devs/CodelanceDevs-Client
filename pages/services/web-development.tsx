import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import PublicLayout from '../../layouts/public';
import WebDev from '../../assets/wedev.svg';
import Link from 'next/link';
import WebServices from '../../components/services/webDevelopment/WebServices';
import WebFeatures from '../../components/services/webDevelopment/WebFeatures';

const WebDevelopment = () => {
	return (
		<>
			<Head>
				<title>Web Development</title>
			</Head>
			<PublicLayout>
				<div className='mx-auto flex w-full max-w-[1440px] flex-col px-3 md:px-5 lg:px-[5vw]'>
					<section className='mx-auto flex w-full flex-col pt-28 md:pt-32 lg:flex-row lg:py-[148px]'>
						<div className='h-1/2 w-full p-2 md:py-5 md:px-4 lg:h-full lg:w-1/2 lg:p-4 '>
							<h1 className='mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
								Web Development
							</h1>
							<p className='mb-6 text-justify text-[14px] font-normal text-[#777a85] md:text-[16px]'>
								Experience the power of modern web development
								with our versatile service that delivers Single
								and Multipage applications, both static and
								dynamic, designed to be responsive,
								mobile-friendly, and accessible to all users.
								Our SEO-friendly architecture ensures your
								website stands out in search engines, and our
								hosting and technical support team is always
								available to keep your site running smoothly
							</p>
							<div className='pt-5'>
								<Link href='/#getQuote'>
									<button className='w-full rounded-xl bg-primary py-5 px-16 transition-all duration-300 hover:bg-[#05c870] md:w-fit'>
										<h1 className='text-[14px] font-medium text-white'>
											Get Quotation
										</h1>
									</button>
								</Link>
							</div>
						</div>
						<div className='flex h-1/2 w-full items-center justify-center p-2 md:py-5 md:px-4 lg:h-full lg:w-1/2 lg:p-4 '>
							<Image
								src={WebDev.src}
								width={100}
								height={100}
								alt='WebDev'
								className='w-full max-w-[400px]'
							/>
						</div>
					</section>
					<section>
						<WebServices />
						<WebFeatures />
					</section>
				</div>
			</PublicLayout>
		</>
	);
};

export default WebDevelopment;
