import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PublicLayout from '../../layouts/public';
import Wireframing from '../../assets/wireframing.svg';
import UiUxServices from '../../components/services/uiUx/UiUxServices';
import UiUxFeatures from '../../components/services/uiUx/UiUxFeatures';

const Design = () => {
	return (
		<>
			<Head>
				<title>Design</title>
			</Head>
			<PublicLayout>
				<div className='mx-auto flex w-full max-w-[1440px] flex-col px-3 md:px-5 lg:px-[5vw]'>
					<section className='mx-auto flex w-full flex-col pt-28 lg:flex-row lg:py-[148px] md:pt-32'>
						<div className='h-1/2 w-full p-2 md:py-5 md:px-4 lg:h-full lg:w-1/2 lg:p-4 '>
							<h1 className='mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
								UI/UX Design
							</h1>
							<p className='mb-6 text-justify text-[14px] font-normal text-[#777a85] md:text-[16px]'>
								Elevate your online presence with our top-notch
								UI/UX design service. Our agency specializes in
								website, web app, and mobile app design,
								offering a wide range of services to meet all
								your needs. Our team creates wireframes,
								prototypes and layouts that are not only
								visually stunning, but also user-friendly and
								easy to navigate. Whether you&apos;re looking to
								revamp your website, or launch a new web or
								mobile app, our UI/UX design service will help
								you achieve your goals and exceed your
								expectations.
							</p>
							<div className='pt-5'>
								<Link href='/#getQuote'>
									<button className='w-full rounded-xl bg-primary py-5 px-16 transition-all duration-300 hover:bg-[#05c870] md:w-fit'>
										<h1 className='text-[14px] font-medium text-[#23262f]'>
											Get Quotation
										</h1>
									</button>
								</Link>
							</div>
						</div>
						<div className='flex h-1/2 w-full items-center justify-center p-2 md:py-5 md:px-4 lg:h-full lg:w-1/2 lg:p-4 '>
							<Image
								src={Wireframing.src}
								width={100}
								height={100}
								alt='WebDev'
								className='w-full max-w-[400px]'
							/>
						</div>
					</section>
					<section>
						<UiUxServices />
						<UiUxFeatures />
					</section>
				</div>
			</PublicLayout>
		</>
	);
};

export default Design;
