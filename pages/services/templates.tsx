import Head from 'next/head';
import React from 'react';
import PublicLayout from '../../layouts/public';
import Image from 'next/image';
import Link from 'next/link';
import TemplateImg from '../../assets/template.svg';
import TemplateWaitImg from '../../assets/template-wait.svg';
import TemplateServices from '../../components/services/templates/TemplateServices';
import TemplateFeatures from '../../components/services/templates/TemplateFeatures';

const Templates = () => {
	return (
		<>
			<Head>
				<title>Templates</title>
			</Head>
			<PublicLayout>
				<div className='DesignIconmd:px-5 mx-auto flex w-full max-w-[1440px] flex-col px-3 lg:px-[5vw]'>
					<section className='mx-auto flex w-full flex-col lg:flex-row lg:py-[148px]'>
						<div className='h-1/2 w-full p-2 md:py-5 md:px-4 lg:h-full lg:w-1/2 lg:p-4 '>
							<h1 className='mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
								Templates and No-Code
							</h1>
							<p className='mb-6 text-justify text-[14px] font-normal text-[#777a85] md:text-[16px]'>
								Simplify your web development process with our
								template and no-code services. We offer
								ready-to-use templates, both code-based and
								no-code, that can be instantly set up and hosted
								on a platform of your choice, such as WordPress,
								Webflow or any other no-code platform. Our
								templates are designed to be easy to use and
								integrate with various plugins, allowing you to
								add functionality with minimal effort. Whether
								you&apos;re looking to set up a website, web
								app, or mobile app, our templates and no-code
								services provide a quick and efficient solution,
								perfect for those with little to no coding
								experience.
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
								src={TemplateImg.src}
								width={100}
								height={100}
								alt='WebDev'
								className='w-full max-w-[400px]'
							/>
						</div>
					</section>
					<section className='group -z-[2] mt-10 grid grid-cols-1 rounded-xl bg-primary px-8 py-12 text-white transition-all duration-300 md:grid-cols-2'>
						<div className=''>
							<h3 className='text-[24px] font-semibold md:text-[28px]'>
								Customizable Code-based Templates: Coming Soon
							</h3>
							<p className='mt-4'>
								We&apos;re developing code-based templates for
								quick website solutions. Customizable and easy
								to use. We&apos;re working hard to make them
								available soon and will keep you updated.
							</p>
						</div>
						<div className='relative -z-[1]'>
							<Image
								src={TemplateWaitImg.src}
								width={100}
								height={100}
								alt='WebDev'
								className='absolute top-1/2 left-1/2 hidden w-full max-w-[340px] -translate-x-1/2 -translate-y-1/2 -rotate-12 grayscale-0 transition-all duration-300 group-hover:-rotate-[16deg] md:inline'
							/>
						</div>
					</section>
					<section>
						<TemplateServices />
						<TemplateFeatures />
					</section>
				</div>
			</PublicLayout>
		</>
	);
};

export default Templates;
