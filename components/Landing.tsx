import Image from 'next/image';
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
// import Line from '../assets/underline.svg'
import Construction from '../assets/construction.svg';

const Landing = () => {
	const [input, setInput] = useState({ name: '', email: '' });
	const [disable, setDisable] = useState(true);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState({ error: false, message: '' });

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
			const response = await axios.post('/api/subscribe', { ...input });
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
				}
			}
		}
	};

	return (
		<div className="flex w-full flex-col px-[12px] pt-[112px] pb-[64px] md:px-[20px] md:pt-[128px] md:pb-[64px] lg:min-h-[100vh] lg:flex-row lg:bg-[url('../assets/hero-bg.svg')] lg:bg-right-top lg:bg-no-repeat lg:px-[5vw] lg:py-[148px]">
			<div className='h-1/2 w-full p-[8px] md:py-[20px] md:px-[16px] lg:h-full lg:w-1/2 lg:p-[16px] '>
				<h1 className='mb-[24px] text-[44px] font-medium text-[#23262f] md:text-[48px] lg:mb-[24px] lg:pr-[40px] lg:text-[56px]'>
					<div className=" h-fit w-fit bg-[url('../assets/underline.svg')] bg-bottom bg-no-repeat">
						Website
					</div>
					under construction
				</h1>
				<p className='mb-[24px] text-[18px] font-normal text-[#777a85]'>
					If your interested in our services fill in your details and
					we will get back to you.
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
					<div></div>
				)}
			</div>
			<div className='h-1/2 w-full p-[8px] md:py-[20px] md:px-[16px] lg:h-full lg:w-1/2 lg:p-[16px] '>
				<Image
					src={Construction}
					alt='Construction'
					className='w-full'
				/>
			</div>
		</div>
	);
};

export default Landing;
