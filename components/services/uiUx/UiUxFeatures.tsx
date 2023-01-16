import { Tooltip } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import WireframeIcon from '../../icons/WireframeIcon';
import PrototypeIcon from '../../icons/PrototypeIcon';
import LayoutIcon from '../../icons/LayoutIcon';
import ConsistencyIcon from '../../icons/ConsistencyIcon';

const UiUxFeatures = () => {
	const features = [
		{
			title: 'Wireframing',
			icon: WireframeIcon,
		},
		{
			title: 'Prototyping',
			icon: PrototypeIcon,
		},
		{
			title: 'Screen Layouts',
			icon: LayoutIcon,
		},
		{
			title: 'Consistency',
			icon: ConsistencyIcon,
		},
	];

	const techs = [
		{
			path: '/icons/figma.png',
			title: 'Figma',
		},
	];

	return (
		<>
			<div className='grid py-16 lg:grid-cols-4 lg:pb-[148px]'>
				<div className='col-span-2 flex flex-col items-center justify-start p-[8px] text-center md:col-span-3 md:p-4 lg:col-span-4'>
					<h1 className='mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
						Features we deliver
					</h1>
					<p className='text-[18px] text-[#4c4f58]'>
						Our team uses the best, community-approved technologies
						to create robust websites
					</p>
				</div>
				{features.map((feature, idx) => (
					<div
						key={idx}
						className='group w-full px-2 py-4 md:py-10 md:px-8 '
					>
						<div className='group flex h-full w-full select-none flex-col items-center'>
							<div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md'>
								{
									<feature.icon className='transition-all duration-300 group-hover:text-primary' />
								}
							</div>
							<p className={`text-[#23262f]`}>{feature.title}</p>
						</div>
					</div>
				))}
			</div>
			<div className='grid py-16 lg:grid-cols-1 lg:pb-[148px]'>
				<div className='col-span-2 flex flex-col items-center justify-start p-[8px] text-center md:col-span-1 md:p-4 lg:col-span-1'>
					<h1 className='mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]'>
						Technologies we use
					</h1>
					<p className='text-[18px] text-[#4c4f58]'>
						Your website&apos;s success is our top concern, we
						ensure it&apos;s equipped with the best features
					</p>
				</div>
				{techs.map((tech, idx) => (
					<div
						key={idx}
						className='w-full px-2 py-4 md:py-10 md:px-8 '
					>
						<div className='group flex h-full w-full select-none flex-col items-center'>
							<div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white'>
								<Tooltip title={tech.title} placement='top'>
									<Image
										src={tech.path}
										width={100}
										height={100}
										alt='^_^'
										className='tranistion-all h-auto w-16 duration-300'
									/>
								</Tooltip>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default UiUxFeatures;
