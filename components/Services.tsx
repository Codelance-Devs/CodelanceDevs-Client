/**
 * Services Section
 */

// Dependencies
import React from 'react';

interface Props {
	className: string;
}

const ComputerIcon: React.FC<Props> = (props) => {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='h-6 w-6 transition-all duration-300 group-hover:text-primary'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
			/>
		</svg>
	);
};
const DesignIcon: React.FC<Props> = (props) => {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='h-6 w-6 transition-all duration-300 group-hover:text-primary'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42'
			/>
		</svg>
	);
};
const TemplateIcon: React.FC<Props> = (props) => {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='h-6 w-6 transition-all duration-300 group-hover:text-primary'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z'
			/>
		</svg>
	);
};

const services = [
	{
		title: 'Development',
		Icon: ComputerIcon,
		description:
			"To meet the specific objectives of your company, you should commission a custom website design. If you're seeking to build a service, we provide end-to-end support, including development and deployment.",
	},
	{
		title: 'Design',
		Icon: DesignIcon,
		description:
			"Get custom designs produced that are optimised for the kind of users you want to attract. We'll provide you with the best design possible by using UI/UX design principles and tools like Figma and Web Flow.",
	},
	{
		title: 'Templates',
		Icon: TemplateIcon,
		description:
			'Are you thinking about trying out a self-managed service? WordPress, Web Flow, and even our own code templates are at your disposal, ready to be modified and put to use in a matter of minutes.',
	},
];

const Services = () => {
	return (
		<>
			<div
				id='services'
				className='grid px-[12px] py-[64px] md:px-[20px] lg:grid-cols-3 lg:px-[5vw] lg:py-[148px] '
			>
				<div className='flex flex-col items-center justify-start p-[8px] text-center md:p-[16px] lg:col-span-3'>
					<h1 className='mb-[16px] select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
						Looking to find web services for your needs?
					</h1>
					<p className='text-[18px] text-[#4c4f58]'>
						Get the best service starting from 17th January 2023.
					</p>
				</div>
				{services.map((service, idx) => (
					<div
						key={idx}
						className='w-full px-[8px] py-[16px] md:p-[16px] '
					>
						<div className='group h-full w-full select-none rounded-3xl bg-[#f6f7fc] px-[24px] py-[40px] md:px-[40px] md:py-[56px]'>
							<div className='mb-[16px] flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm'>
								<service.Icon className='' />
							</div>
							<h1 className='mb-[16px] text-[20px] text-[#23262f] md:text-[22px]'>
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
