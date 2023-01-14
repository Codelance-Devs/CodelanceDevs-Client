import React from 'react';
import Image from 'next/image';
import Icon from '../../assets/icon.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer id='contact' className='bg-[#f6f7fc]'>
			<div className='mx-auto max-w-[1440px] px-[12px] pt-[72px] pb-[32px] md:px-[20px] lg:px-[5vw]'>
				<div className='items-strech flex flex-col justify-start'>
					<div className='w-full border-b p-2 md:p-4'>
						<div className='flex flex-col items-center justify-between md:items-start lg:flex-row'>
							<a href='' className='flex items-center'>
								<Image
									src={"https://res.cloudinary.com/dm5excyly/image/upload/v1672321839/assets/branding/logo-png-square.png"}
									alt='Codelance Devs'
									width={100}
									height={100}
									className='mb-[40px] h-auto w-10 md:ml-[12px] lg:mb-0'
								/>
								<h1 className='mb-[40px] leading-none lg:mb-0'>
									Codelance <br />
									Devs
								</h1>
							</a>
							<div className='flex w-full flex-col items-center justify-between md:flex-row lg:justify-end'>
								<div className='mb-4 flex flex-col items-stretch justify-start text-center md:flex-row'>
									{/* <a className='p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 '>
										How we work
									</a>
									<a className='p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 '>
										Services
									</a>
									<a className='p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 '>
										Solution
									</a>
									<a className='p-3 text-[14px] md:px-3 md:py-4 lg:mx-3 lg:py-2 '>
										FAQs
									</a> */}
								</div>
								<div className='mb-4 flex items-center justify-start lg:ml-[64px]'>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.linkedin.com/company/codelance-devs/'
										className='mx-[2px] p-3 transition-all duration-300 hover:text-[#00E07B]'
									>
										<LinkedInIcon />
									</a>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://twitter.com/CodelanceDevs'
										className='mx-[2px] p-3 transition-all duration-300 hover:text-[#00E07B]'
									>
										<TwitterIcon />
									</a>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.instagram.com/codelancedevs/'
										className='mx-[2px] p-3 transition-all duration-300 hover:text-[#00E07B]'
									>
										<InstagramIcon />
									</a>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.github.com/Codelance-Devs/'
										className='mx-[2px] p-3 transition-all duration-300 hover:text-[#00E07B]'
									>
										<GitHubIcon />
									</a>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='mailto:contact@codelancedevs.com'
										className='mx-[2px] p-3 transition-all duration-300 hover:text-[#00E07B]'
									>
										<EmailOutlinedIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='w-full p-2 md:p-4'>
						<div className='flex flex-col items-center justify-start md:flex-row md:justify-between'>
							<div className='mb-4 flex flex-col items-stretch justify-center text-center md:flex-row'>
								<Link
									href='/terms-and-conditions'
									className='py-2 text-[14px] text-[#777a85] md:mr-[24px]'
								>
									Terms and Conditions
								</Link>
								<Link
									href='/privacy-policy'
									className='py-2 text-[14px] text-[#777a85] md:mr-[24px]'
								>
									Privacy Policy
								</Link>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://blog.codelancedevs.com'
									className='py-2 text-[14px] text-[#777a85] md:mr-[24px]'
								>
									Blog
								</a>
							</div>
							<p className='mb-4 text-[12px] text-[#777a85]'>
								Copyright &copy; {new Date().getFullYear()}{' '}
								Codelance Devs
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
