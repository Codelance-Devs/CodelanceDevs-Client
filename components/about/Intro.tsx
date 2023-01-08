import React from 'react';

const Intro = () => {
	return (
		<div className='mx-auto w-full max-w-[1440px] scroll-mt-24 px-3 py-16 md:px-5 lg:grid-cols-5 lg:px-[5vw] lg:pt-[148px]'>
			<div className='mx-auto w-full max-w-[1440px] px-4 py-12'>
				<div className='mx-4 grid gap-4 sm:grid-cols-12'>
					<div className='-z-10 col-span-12 sm:col-span-3 '>
						<div className='sticky top-28 text-center sm:text-left sm:before:mx-0'>
							<h3 className='select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
								<span className=" h-fit w-fit bg-[url('/underline.svg')] bg-bottom bg-no-repeat">
									About
								</span>{' '}
								Us
							</h3>
							<span className='text-sm tracking-wider text-gray-400'>
								Crafting solutions for businesses all over the
								world
							</span>
						</div>
					</div>
					<div className='relative -z-10 col-span-12 space-y-6 sm:col-span-9 lg:ml-8 lg:px-4'>
						<div className='relative col-span-12 space-y-12 before:dark:bg-gray-700 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:-left-3 sm:before:w-0.5 lg:px-4'>
							<p className='text-justify text-[14px] leading-normal md:text-[16px] lg:leading-loose'>
								Welcome to our web design and development
								agency! We are a team of creative and talented
								developers with a passion for building beautiful
								and functional websites. We believe that a
								well-designed website is essential for any
								business, and we are dedicated to helping our
								clients create online presences that reflect
								their brand and meet their unique needs.
								<br />
								<br /> With our experience in the industry, we
								have the skills and knowledge to deliver
								top-quality web design and development services.
								From custom website design to e-commerce
								solutions, we have the expertise to bring your
								vision to life. We pride ourselves on our
								attention to detail, our commitment to customer
								service, and our ability to stay up-to-date with
								the latest technologies and trends in the field.
								<br />
								<br /> We are excited to start this journey and
								help our clients succeed online. Thank you for
								considering us for your web design and
								development needs. We look forward to working
								with you!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
