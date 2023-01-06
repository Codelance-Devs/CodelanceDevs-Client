/**
 * Navbar Component
 */

// Dependencies
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Icon from '../../assets/icon.png';
import MenuOutlinedIcon from '../icons/MenuOutlinedIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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

	const navigation = [
		{
			text: 'About',
			link: '/about',
		},
		{
			text: 'Services',
			link: '/#services',
		},
		{
			text: 'FAQs',
			link: '/#faqs',
		},
		{
			text: 'Contact',
			link: '/#contact',
		},
	]

	return (
		<nav
			className={` ${color} w-full fixed`}
		>
			<div className='mx-auto z-10 flex w-full p-3 md:px-5 md:py-3 lg:px-[5vw] lg:py-5  max-w-[1440px] items-center justify-between'>
				<Link href='/' className='flex items-center'>
					<Image
						src={Icon.src}
						alt='Codelance Devs'
						width={100}
						height={100}
						className='h-auto w-10 max-w-full'
					/>
					<h1 className='leading-none'>
						Codelance <br />
						Devs
					</h1>
				</Link>
				<div className='p-[18px] lg:hidden'>
					<IconButton onClick={handleClick}>
						<MenuOutlinedIcon 
							aria-controls={open ? 'basic-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
						/>
					</IconButton>
					<div className="min-w-full bg-red-200">
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							className="h-full w-full"
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
						>
							{
								navigation.map((navi, idx) => (
									<div key={idx} className="flex flex-col">
										<Link
											onClick={handleClose}
											href={navi.link}
											className='mx-3 cursor-pointer px-3 py-2 transition-all duration-300 hover:text-primary'
										>
											{navi.text}
										</Link>
									</div>
								))
							}
							<Link onClick={handleClose} href='#getQuote' className='w-fit mx-3 rounded-lg border border-[#eaedf8] bg-transparent py-4 px-6 transition-all duration-300 hover:border-[#00E07B20] hover:bg-[#00E07B20]'>
								<button
									
									className='text-[14px] m-4 font-normal text-[#00E07B]'
								>
									Get Quotation
								</button>
							</Link>
							{/* <MenuItem onClick={handleClose} sx={{all: 'unset'}} className='hover:bg-primary'>How we work</MenuItem>
							<MenuItem onClick={handleClose}>Services</MenuItem>
							<MenuItem onClick={handleClose}>FAQs</MenuItem>
							<MenuItem onClick={handleClose}>Contact</MenuItem>
							<MenuItem onClick={handleClose}>Get Quotation</MenuItem> */}
						</Menu>
					</div>
				</div>
				<div className='hidden items-center justify-start text-[14px] lg:flex'>
					{
						navigation.map((navi, idx) => (
							<a
								key={idx}
								href={navi.link}
								className='mx-3 cursor-pointer px-3 py-2 transition-all duration-300 hover:text-primary'
							>
								{navi.text}
							</a>
						))
					}
					<a href='#getQuote' className='ml-10 w-fit rounded-lg border border-[#eaedf8] bg-transparent py-4 px-6 transition-all duration-300 hover:border-[#00E07B20] hover:bg-[#00E07B20]'>
						<button
							
							className='text-[14px] font-normal text-[#00E07B]'
						>
							Get Quotation
						</button>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
