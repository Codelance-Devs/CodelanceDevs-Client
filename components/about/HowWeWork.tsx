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
		<div className='mx-auto w-full max-w-[1440px] scroll-mt-24 px-3 py-16 md:px-5 lg:grid-cols-5 lg:px-[5vw] lg:pb-[148px]'>
			<div className='mx-auto w-full max-w-[1440px] px-4 py-12'>
				<div className='mx-4 grid gap-4 sm:grid-cols-12'>
					<div className='-z-10 col-span-12 mb-4 sm:col-span-3'>
						<div className='sticky top-28 text-center sm:text-left sm:before:mx-0'>
							<h3 className='select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
								How we{' '}
								<span className=" h-fit w-fit bg-[url('/underline.svg')] bg-bottom bg-no-repeat">
									work?
								</span>
							</h3>
							<span className='text-sm tracking-wider text-gray-400'>
								We follow the most effective working
								methodology. We believe success always comes
								when we have creativity, efforts, determination
								in our team.
							</span>
						</div>
					</div>
					<div className='relative -z-10 col-span-12 space-y-6 px-4 sm:col-span-9 lg:ml-8'>
						<div className='relative col-span-12 space-y-12 before:dark:bg-gray-700 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:-left-3 sm:before:w-0.5 lg:px-4'>
							{services.map((service, idx) => (
								<div
									key={idx}
									className='flex flex-col before:dark:bg-primary sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full'
								>
									<div className='mb-4 -mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md'>
										{service.icon}
									</div>
									<h3 className='text-xl font-semibold tracking-wide'>
										{service.title}
									</h3>
									{/* <time className="text-xs uppercase tracking-wide dark:text-gray-400">
                                Dec 2020
                            </time> */}
									<p className='mt-3'>
										{service.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowWeWork;
