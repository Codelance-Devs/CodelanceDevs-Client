/**
 * Services Section
 */

// Dependencies
import React from 'react';
import PlanningIcon from '../icons/PlanningIcon';
import DesignIcon from '../icons/DesignIcon';
import LaunchIcon from '../icons/LaunchIcon';
import GearIcon from '../icons/GearIcon';
import CodingIcon from '../icons/CodingIcon';

const services = [
	{
		title: 'Planning',
		icon: (
			<PlanningIcon className='transition-all duration-300 group-hover:text-primary' />
		),
		description:
			'Understanding and defining the project flow to establish the goals and vision of the project to ensure we capture all the requirements.',
	},
	{
		title: 'Design',
		icon: (
			<DesignIcon className='transition-all duration-300 group-hover:text-primary' />
		),
		description:
			'After understanding your requirments, we will create layouts based on the MVP discussed. We use various tools to create and customize a prototype.',
	},
	{
		title: 'Development',
		icon: (
			<CodingIcon className='transition-all duration-300 group-hover:text-primary' />
		),
		description:
			'We will start execution once all the metrics are defined. We ensure that the project schedules included with appropriate milestones.',
	},
	{
		title: 'Launch',
		icon: (
			<LaunchIcon className='transition-all duration-300 group-hover:text-primary' />
		),
		description:
			'Once the execution of the project is completed, our quality analyse team will analyse the work before the first launch.',
	},
	{
		title: 'Maintanance',
		icon: (
			<GearIcon className='transition-all duration-300 group-hover:text-primary' />
		),
		description:
			'Free post support will be for 2 months, upon completion of free support, we will start the paid maintenance support.',
	},
];

const HowWeWork = () => {
	return (
		<>
			<div className='mx-auto grid w-full scroll-mt-24 px-3 py-16 md:px-5 lg:grid-cols-5 lg:px-[5vw] lg:py-[148px]'>
				<div className='flex flex-col items-center justify-start p-[8px] text-center md:p-4 lg:col-span-5'>
					<h1 className='mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
						How we work
					</h1>
					<p className='text-[18px] text-[#4c4f58]'>
						We follow the most effective working methodology. We
						believe success always comes when we have creativity,
						efforts, determination in our team.
					</p>
				</div>
				{services.map((service, idx) => (
					<div key={idx} className='w-full px-[8px] py-4 md:p-1 '>
						<div className='group flex h-full w-full select-none flex-col items-center rounded-3xl px-[24px] py-10 md:px-4 md:py-14'>
							<div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md'>
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

export default HowWeWork;
