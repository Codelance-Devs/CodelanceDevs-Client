import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Icon from '../../assets/icon.png';
import MenuOutlinedIcon from '../icons/MenuOutlinedIcon';

const Navbar = () => {
	const [color, setColor] = useState('bg-transparent');
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColor('bg-[#fff]');
		} else {
			setColor('bg-transparent');
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', changeNavbarColor);
	}, []);

	return (
		<div
			className={`z-10 mx-auto flex w-full p-[12px] md:px-[20px] md:py-[12px] lg:px-[5vw] lg:py-[20px] ${color} fixed items-center justify-between`}
		>
			<a href='' className='flex items-center'>
				<Image
					src={Icon.src}
					alt='Codelance Devs'
					width={100}
					height={100}
					className='h-auto w-10 max-w-full pl-[10px]'
				/>
				<h1 className='text-xs leading-none'>
					Codelance <br />
					Devs
				</h1>
			</a>
			<div className='p-[18px] lg:hidden'>
				<MenuOutlinedIcon className='' />
			</div>
			<div className='hidden items-center justify-start text-[14px] lg:flex'>
				<h1 className='mx-[12px] cursor-pointer px-[12px] py-[8px] transition-all duration-300 hover:text-[#00E07B]'>
					How we work
				</h1>
				<a
					href='#services'
					className='mx-[12px] cursor-pointer px-[12px] py-[8px] transition-all duration-300 hover:text-[#00E07B]'
				>
					Services
				</a>
				<h1 className='mx-[12px] cursor-pointer px-[12px] py-[8px] transition-all duration-300 hover:text-[#00E07B]'>
					Solutions
				</h1>
				<a
					href='#faqs'
					className='mx-[12px] cursor-pointer px-[12px] py-[8px] transition-all duration-300 hover:text-[#00E07B]'
				>
					FAQ
				</a>
				<button className='ml-[40px] w-fit rounded-xl border border-[#eaedf8] bg-transparent py-[16px] px-[24px] transition-all duration-300 hover:border-[#05c87020] hover:bg-[#05c87020]'>
					<h1 className='text-[14px] font-normal text-[#05c870]'>
						Get Quotation
					</h1>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
