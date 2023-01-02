import Image from 'next/image';
import React from 'react';
import Construction from '../assets/construction.svg';

const Landing = () => {
	return (
		<div className="flex w-full flex-col bg-[#f6f7fc] px-[12px] pt-[112px] pb-[64px] md:px-[20px] md:pt-[128px] md:pb-[64px] lg:min-h-[100vh] lg:flex-row lg:bg-[url('/hero-bg.svg')] lg:bg-right-top lg:bg-no-repeat lg:px-[5vw] lg:py-[148px]">
			<div className='h-1/2 w-full p-[8px] md:py-[20px] md:px-[16px] lg:h-full lg:w-1/2 lg:p-[16px] '>
				<h1 className='mb-[24px] text-[44px] font-medium text-[#23262f] md:text-[48px] lg:mb-[24px] lg:pr-[40px] lg:text-[56px]'>
					<span className=" h-fit w-fit bg-[url('/underline.svg')] bg-bottom bg-no-repeat">
						Creating{' '}
					</span>
					online value for companies and building solutions.
				</h1>
				<p className='mb-[24px] text-[18px] font-normal text-[#777a85]'>
					Utilizing web technology to strengthen our client&apos;s
					online presence and increase revenue.
				</p>
				<div className='pt-[20px]'>
					<button className='w-full rounded-xl bg-[#00E07B] py-[20px] px-[64px] transition-all duration-300 hover:bg-[#05c870] md:w-fit'>
						<h1 className='text-[14px] font-medium text-[#23262f]'>
							Get Quotation
						</h1>
					</button>
				</div>
			</div>
			<div className='h-1/2 w-full p-[8px] md:py-[20px] md:px-[16px] lg:h-full lg:w-1/2 lg:p-[16px] '>
				<Image
					src={Construction.src}
					width={100}
					height={100}
					alt='Construction'
					className='w-full'
				/>
			</div>
		</div>
	);
};

export default Landing;
