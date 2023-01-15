import React from 'react';

const TemplateServices = () => {
	const services = [
		{
			title: 'Code Templates (Coming Soon)',
			description:
				'Looking for a quick and efficient solution for your website or web app development? Our code-based templates provide a customizable foundation for you to build on, saving you time and effort in the development process. Our team of experts have designed these templates to be easy to use and tailored to meet your specific needs.',
		},
		{
			title: 'WordPress',
			description:
				'WordPress is a powerful and versatile content management system that can be used to create a wide range of websites, from simple blogs to complex e-commerce sites. Our team of experts have extensive experience in creating custom WordPress themes and plugins to meet your specific needs. We can help you set up and customize your WordPress site, as well as provide ongoing maintenance and support',
		},
		{
			title: 'WebFlow',
			description:
				'Webflow is a no-code website design and development platform that allows you to create responsive websites and web apps without writing code. Our team of experts have extensive experience in creating custom designs and interactions using Webflow. We can help you set up and customize your Webflow site, as well as provide ongoing maintenance and support.',
		},
		{
			title: 'Platform of your Choice',
			description:
				"We understand that every business has unique needs and requirements. That's why we offer our clients the option to choose the platform that best suits their needs. Whether it's WordPress, Webflow, or any other platform, our team of experts have the skills and experience to set up and customize your site, as well as provide ongoing maintenance and support.",
		},
	];
	return (
		<div id='services' className='grid py-16 lg:grid-cols-2 lg:pb-[148px]'>
			<div className='flex flex-col items-center justify-start p-[8px] text-center md:p-4 lg:col-span-2'>
				<h1 className='mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
					Types of services we offer
				</h1>
				<p className='text-[18px] text-[#4c4f58]'>
					Don&apos;t let the barrier of code stop you, use our ready
					made templates to get started
				</p>
			</div>
			{services.map((service, idx) => (
				<div key={idx} className='w-full px-[8px] py-4 md:p-4 '>
					<div className='group h-full w-full select-none rounded-3xl bg-[#f6f7fc] px-[24px] py-10 md:px-10 md:py-14'>
						<h1 className={`mb-4 text-[#23262f] md:text-[22px]`}>
							{service.title}
						</h1>
						<p className='mb-[24px] text-justify text-[#777a85]'>
							{service.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default TemplateServices;
