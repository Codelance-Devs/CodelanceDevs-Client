/**
 * Landing Section
 */

// Dependencies
import Image from 'next/image';
import React from 'react';
import Construction from '../../assets/construction.svg';

const Landing = () => {
	return (
		<div className="flex w-full flex-col bg-[#f6f7fc] px-3 pt-28 pb-16 md:px-5 md:pt-32 md:pb-16 lg:min-h-[100vh] lg:flex-row lg:bg-[url('/hero-bg.svg')] lg:bg-right-top lg:bg-no-repeat lg:px-[5vw] lg:py-[148px]">
			<div className='h-1/2 w-full p-2 md:py-5 md:px-4 lg:h-full lg:w-1/2 lg:p-4 '>
				<h1 className='mb-6 text-[44px] font-medium text-[#23262f] md:text-[48px] lg:mb-6 lg:pr-10 lg:text-[56px]'>
					<span className=" h-fit w-fit bg-[url('/underline.svg')] bg-bottom bg-no-repeat">
						Creating
					</span>
					{" "}online value for companies and building solutions.
				</h1>
				<p className='mb-6 text-[18px] font-normal text-[#777a85]'>
					Utilizing web technology to strengthen our client&apos;s
					online presence and increase revenue.
				</p>
				<div className='pt-5'>
					<a href='#getQuote'>
						<button className='w-full rounded-xl bg-primary py-5 px-16 transition-all duration-300 hover:bg-[#05c870] md:w-fit'>
							<h1 className='text-[14px] font-medium text-[#23262f]'>
								Get Quotation
							</h1>
						</button>
					</a>
				</div>
			</div>
			<div className='h-1/2 w-full p-2 md:py-5 md:px-4 lg:h-full lg:w-1/2 lg:p-4 '>
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
