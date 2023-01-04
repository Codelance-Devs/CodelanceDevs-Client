/**
 * Services Section
 */

// Dependencies
import React from 'react';
import ComputerIcon from '../icons/ComputerIcon';
import DesignIcon from '../icons/DesignIcon';
import TemplateIcon from '../icons/TemplateIcon';

const services = [
	{
		title: 'Development',
		icon: (
			<ComputerIcon className='transition-all duration-300 group-hover:text-primary' />
		),
		description:
			"To meet the specific objectives of your company, you should commission a custom website design. If you're seeking to build a service, we provide end-to-end support, including development and deployment.",
	},
	{
		title: 'Design',
		icon: (
			<DesignIcon className='transition-all duration-300 group-hover:text-primary' />
		),
		description:
			"Get custom designs produced that are optimized for the kind of users you want to attract. We'll provide you with the best design possible by using UI/UX design principles and tools like Figma and Web Flow.",
	},
	{
		title: 'Templates',
		icon: (
			<TemplateIcon className='transition-all duration-300 group-hover:text-primary' />
		),
		description:
			'Are you thinking about trying out a self-managed service? WordPress, Web Flow, and even our own code templates are at your disposal, ready to be modified and put to use in a matter of minutes.',
	},
];

const Services = () => {
	return (
		<>
			<div
				id='services'
				className='grid px-3 py-16 md:px-5 lg:grid-cols-3 lg:px-[5vw] lg:py-[148px] '
			>
				<div className='flex flex-col items-center justify-start p-[8px] text-center md:p-4 lg:col-span-3'>
					<h1 className='mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
						Looking to find web services for your needs?
					</h1>
					<p className='text-[18px] text-[#4c4f58]'>
						Get the best service starting from 17th January 2023.
					</p>
				</div>
				{services.map((service, idx) => (
					<div key={idx} className='w-full px-[8px] py-4 md:p-4 '>
						<div className='group h-full w-full select-none rounded-3xl bg-[#f6f7fc] px-[24px] py-10 md:px-10 md:py-14'>
							<div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm'>
								{service.icon}
							</div>
							<h1 className='text-5 mb-4 text-[#23262f] md:text-[22px]'>
								{service.title}
							</h1>
							<p className='mb-[24px] text-justify text-[#777a85]'>
								{service.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Services;
