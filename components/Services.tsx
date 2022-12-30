/**
 * Services Component
 */

// Dependencies
import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WebIcon from '@mui/icons-material/Web';

const services = [
	{
		title: 'Development',
		Icon: ComputerIcon,
		description:
			"To meet the specific objectives of your company, you should commission a custom website design. If you're seeking to build a service, we provide end-to-end support, including development and deployment.",
	},
	{
		title: 'Design',
		Icon: DesignServicesIcon,
		description:
			"Get custom designs produced that are optimised for the kind of users you want to attract. We'll provide you with the best design possible by using UI/UX design principles and tools like Figma and Web Flow.",
	},
	{
		title: 'Templates',
		Icon: WebIcon,
		description:
			'Are you thinking about trying out a self-managed service? WordPress, Web Flow, and even our own code templates are at your disposal, ready to be modified and put to use in a matter of minutes.',
	},
];

const Services = () => {
	return (
		<div className='flex h-full w-full items-center justify-center px-3 pb-20 md:px-[20px] lg:px-[5vw]'>
			<div className='flex h-full w-full flex-col items-center justify-center p-2 md:px-[16px] lg:p-[16px]'>
				<h2
					id='services'
					className='text-[32px] font-medium text-[#23262f] md:text-[40px] lg:text-[48px]'
				>
					Services we offer
				</h2>
				<p className='text-[18px] font-normal text-[#777a85]'>
					Get the best service that you need starting from 17th
					January 2023.
				</p>
				<ul className='mt-6 flex flex-wrap items-center justify-center gap-5'>
					{services.map((service, idx) => (
						<li
							key={idx}
							className='flex min-h-[420px] w-full flex-col justify-start rounded-[40px] bg-[#F6F7FC] py-14 px-10 md:w-1/3 lg:w-3/12'
						>
							<div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md'>
								<service.Icon className='text-[40px]' />
							</div>
							<h3 className='mt-4 text-xl font-semibold'>
								{service.title}
							</h3>
							<p className='mt-4 text-base text-[#777a85]'>
								{service.description}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Services;
