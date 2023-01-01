import Image from 'next/image';
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
// import Line from '../assets/underline.svg'
import { CODELANCE_DEVS_SERVER_BASE_URL } from '../config';
import Construction from '../assets/construction.svg';
import Mailsent from '../assets/mailsent.svg';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const socials = [
	{
		name: 'LinkedIn',
		Icon: LinkedInIcon,
		url: 'https://www.linkedin.com/company/codelance-devs/',
	},
	{
		name: 'Twitter',
		Icon: TwitterIcon,
		url: 'https://twitter.com/CodelanceDevs',
	},
	{
		name: 'Instagram',
		Icon: InstagramIcon,
		url: 'https://www.instagram.com/codelancedevs/',
	},
	{ name: 'Email', Icon: EmailIcon, url: 'contact@codelancedevs.com' },
];

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Landing = () => {
	const [input, setInput] = useState({ name: '', email: '' });
	const [disable, setDisable] = useState(true);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState({ error: false, message: '' });

	const [open, setOpen] = useState(false);

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const handleInput =
		(type: 'email' | 'name') =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setInput((prev) => {
				return { ...prev, [type]: e.target.value };
			});
			if (input.email !== '' && input.name !== '') {
				return setDisable(false);
			}
			setDisable(true);
		};

	const handleSubscribe = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${CODELANCE_DEVS_SERVER_BASE_URL}/api/subscribe`,
				{ ...input }
			);
			if (response.data.message === 'app/new-subscriber-added') {
				setSuccess(true);
				setError({ error: false, message: '' });
			}
		} catch (error) {
			setSuccess(false);
			if (axios.isAxiosError(error)) {
				if (error.response!.data.message === 'app/already-subscribed') {
					setSuccess(false);
					setError({
						error: true,
						message: 'Email has already subscribed to our updates!',
					});
					setOpen(true);
				}
			}
		}
	};

	return (
		<>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert
					sx={{
						background: `#ffbf0020`,
						color: `#ffbf00`,
						width: '100%',
						boxShadow: 'none',
					}}
					onClose={handleClose}
					severity='warning'
				>
					{error.message}
				</Alert>
			</Snackbar>
			<div className="flex w-full flex-col px-[12px] pt-[112px] pb-[64px] md:px-[20px] md:pt-[128px] md:pb-[64px] lg:min-h-[100vh] lg:flex-row lg:bg-[url('../assets/hero-bg.svg')] lg:bg-right-top lg:bg-no-repeat lg:px-[5vw] lg:py-[148px]">
				<div className='h-1/2 w-full p-[8px] md:py-[20px] md:px-[16px] lg:h-full lg:w-1/2 lg:p-[16px]'>
					<h1 className='mb-[24px] text-[44px] font-medium text-[#23262f] md:text-[48px] lg:mb-[24px] lg:pr-[40px] lg:text-[56px]'>
						<div className=" h-fit w-fit bg-[url('../assets/underline.svg')] bg-bottom bg-no-repeat">
							Website
						</div>
						under construction
					</h1>
					<p className='mb-[24px] text-[18px] font-normal text-[#777a85]'>
						If your interested in our{' '}
						<a
							href='#services'
							className='text-[#00E07B] transition-all hover:underline'
						>
							services
						</a>{' '}
						fill in your details and we will get back to you.
					</p>
					{!success ? (
						<form onSubmit={handleSubscribe}>
							<div className='flex w-full flex-col gap-6 md:w-3/4'>
								<input
									type='text'
									className='rounded p-[16px] outline outline-gray-300 focus:outline-[#00E07B]'
									placeholder='Name'
									required
									value={input.name}
									onChange={handleInput('name')}
								/>
								<input
									type='email'
									className='rounded p-[16px] outline outline-gray-300 focus:outline-[#00E07B]'
									placeholder='Email'
									required
									value={input.email}
									onChange={handleInput('email')}
								/>
								<button
									className={`w-full rounded-xl bg-[#00E07B] py-[20px] px-[64px] transition-all duration-300 md:w-fit ${
										disable
											? 'opacity-40'
											: 'cursor-pointer hover:bg-[#05c870]'
									}`}
									disabled={disable}
								>
									<h1 className='text-[14px] font-medium text-[#23262f]'>
										Get Notified
									</h1>
								</button>
							</div>
						</form>
					) : (
						<div className='mt-12 flex w-full flex-col items-center justify-center gap-4'>
							<Image
								src={Mailsent}
								alt='success'
								className='w-32'
							/>
							<h1 className=''>
								Thank you for your response, we&apos;ll update
								you soon!
							</h1>
						</div>
					)}
					<ul className='mt-6 flex gap-4'>
						{socials.map((social, idx) => (
							<li key={idx} title={social.name}>
								<a
									className='rounded-full border-transparent p-2 text-[#777a85] transition-all hover:border hover:border-[#00E07B] hover:text-black'
									href={
										social.url.includes('@')
											? `mailto${social.url}`
											: social.url
									}
									target='_blank'
									rel='noreferrer'
								>
									<social.Icon className='text-[18px]' />
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className='h-1/2 w-full p-[8px] md:py-[20px] md:px-[16px] lg:h-full lg:w-1/2 lg:p-[16px]'>
					<Image
						src={Construction}
						alt='Construction'
						className='w-full'
					/>
				</div>
			</div>
		</>
	);
};

export default Landing;
