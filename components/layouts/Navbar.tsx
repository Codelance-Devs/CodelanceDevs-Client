/**
 * Navbar Component
 */

// Dependencies
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Icon from '../../assets/icon.png';
import MenuOutlinedIcon from '../icons/MenuOutlinedIcon';

const Navbar = () => {
	const [color, setColor] = useState('bg-transparent');
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColor('bg-white');
		} else {
			setColor('bg-transparent');
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', changeNavbarColor);
	}, []);

	return (
		<nav
			className={`z-10 mx-auto flex w-full p-3 md:px-5 md:py-3 lg:px-[5vw] lg:py-5 ${color} fixed items-center justify-between`}
		>
			<Link href='/' className='flex items-center'>
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
			</Link>
			<div className='p-[18px] lg:hidden'>
				<MenuOutlinedIcon />
			</div>
			<div className='hidden items-center justify-start text-[14px] lg:flex'>
				<a
					href='#'
					className='mx-3 cursor-pointer px-3 py-2 transition-all duration-300 hover:text-primary'
				>
					How we work
				</a>
				<a
					href='#services'
					className='mx-3 cursor-pointer px-3 py-2 transition-all duration-300 hover:text-primary'
				>
					Services
				</a>
				<a
					href='#'
					className='mx-3 cursor-pointer px-3 py-2 transition-all duration-300 hover:text-primary'
				>
					Solutions
				</a>
				<a
					href='#faqs'
					className='mx-3 cursor-pointer px-3 py-2 transition-all duration-300 hover:text-primary'
				>
					FAQ
				</a>
				<button className='ml-10 w-fit rounded-xl border border-[#eaedf8] bg-transparent py-4 px-6 transition-all duration-300 hover:border-[#00E07B20] hover:bg-[#00E07B20]'>
					<a
						href='#'
						className='text-[14px] font-normal text-[#00E07B]'
					>
						Get Quotation
					</a>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
