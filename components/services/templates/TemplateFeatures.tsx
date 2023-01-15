import Image from 'next/image';
import React from 'react';
import GearIcon from '../../icons/GearIcon';
import LaunchIcon from '../../icons/LaunchIcon';
import Tooltip from '@mui/material/Tooltip';
import ConsistencyIcon from '../../icons/ConsistencyIcon';
import GiftIcon from '../../icons/GiftIcon';

const TemplateFeatures = () => {
	const features = [
		{
			title: 'Ready to Use',
			icon: GiftIcon,
		},
		{
			title: 'Instant Set-up',
			icon: GearIcon,
		},
		{
			title: 'Instant Hosting',
			icon: LaunchIcon,
		},
		{
			title: 'Plugins Integration',
			icon: ConsistencyIcon,
		},
	];

	const techs = [
		{
			path: '/icons/mern.png',
			title: 'MERN',
		},
		{
			path: '/icons/wordpress.png',
			title: 'WordPress',
		},
		{
			path: '/icons/webflow.png',
			title: 'WebFlow',
		},
	];

	return (
		<>
			<div className='grid py-16 lg:grid-cols-4 lg:pb-[148px]'>
				<div className='flex flex-col items-center justify-start p-[8px] text-center md:col-span-2 md:p-4 lg:col-span-4'>
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
			<div className='grid py-16 lg:grid-cols-3 lg:pb-[148px]'>
				<div className='col-span-2 flex flex-col items-center justify-start p-[8px] text-center md:col-span-3 md:p-4 lg:col-span-3'>
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

export default TemplateFeatures;
