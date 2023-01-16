import React, { ReactHTML, useState } from 'react';
import api from '../../utils/api';

const Contact = () => {
	const [textEntries, setTextEntries] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [servicesRequested, setServicesRequested] = useState<string[]>([]);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleTextEntries =
		(prop: 'name' | 'email' | 'message') =>
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setTextEntries((prev) => {
				return {
					...prev,
					[prop]: e.target.value,
				};
			});
		};

	const handleServiceRequestChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		let values = servicesRequested;
		if (e.target.checked) {
			values.push(e.target.value);
			setServicesRequested(values);
		} else {
			if (values.includes(e.target.value)) {
				values = values.filter((entry) => entry !== e.target.value);
				setServicesRequested(values);
			}
		}
	};

	const handleContactFormSubmit = async (
		e: React.ChangeEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		e.stopPropagation();
		try {
			setLoading(true);
			await api.post('/api/contact/landing', {
				...textEntries,
				servicesRequested,
			});
			setSuccess(true);
		} catch (error) {
			setSuccess(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section
			className='w-full scroll-mt-36 bg-primary text-white'
			id='getQuote'
		>
			<div className='mx-auto w-full max-w-[1440px] px-3 py-16 md:px-5 lg:px-[5vw] lg:py-[148px]'>
				<div className='flex w-full flex-col items-stretch justify-start lg:flex-row lg:gap-10'>
					<div className='w-full p-2 lg:p-4'>
						<div className='text-center md:text-left'>
							<h4 className='mb-4 text-[32px] font-medium md:text-[34px] lg:text-[40px]'>
								Need help in building your ideas? Drop us a{' '}
								<span className="h-fit w-fit bg-[url('/underline-white.svg')] bg-bottom bg-no-repeat">
									line
								</span>{' '}
								with your request.
							</h4>
							<p className='text-justify text-[16px]'>
								Take the first step towards launching a
								successful web app by contacting our team of
								skilled web developers. We can&apos;t wait to
								hear about your idea!
							</p>
						</div>
					</div>
					<div className='w-full p-2 lg:p-4'>
						{success ? (
							<div className='flex h-full w-full items-center justify-center text-center text-xl font-semibold'>
								Your request has been noted, we&apos;ll get back
								to you soon!
							</div>
						) : (
							<form
								className='flex flex-col gap-4'
								onSubmit={handleContactFormSubmit}
							>
								<input
									type='text'
									className='w-full rounded-lg bg-slate-500 bg-opacity-20 p-4 text-white outline-none placeholder:text-white focus:outline focus:outline-slate-200'
									placeholder='Name'
									value={textEntries.name}
									required
									onChange={handleTextEntries('name')}
								/>
								<input
									type='email'
									className='w-full rounded-lg bg-slate-500 bg-opacity-20 p-4 text-white outline-none placeholder:text-white focus:outline focus:outline-slate-200'
									placeholder='Email'
									value={textEntries.email}
									required
									onChange={handleTextEntries('email')}
								/>
								<p>What service&apos;s are you looking for?</p>
								<div className='flex items-center gap-4'>
									<label className='flex items-center'>
										<input
											type='checkbox'
											name='service'
											value='development'
											className='mr-2 h-4 w-4'
											onChange={
												handleServiceRequestChange
											}
										/>
										<span>Development</span>
									</label>
									<label className='flex items-center'>
										<input
											type='checkbox'
											name='service'
											value='design'
											className='mr-2 h-4 w-4'
											onChange={
												handleServiceRequestChange
											}
										/>
										<span>Design</span>
									</label>
									<label className='flex items-center'>
										<input
											type='checkbox'
											name='service'
											value='template'
											className='mr-2 h-4 w-4'
											onChange={
												handleServiceRequestChange
											}
										/>
										<span>Template</span>
									</label>
								</div>
								<textarea
									className='max-h-32 w-full overflow-auto rounded-lg bg-slate-500 bg-opacity-20 p-4 text-white outline-none placeholder:text-white focus:outline focus:outline-slate-200'
									placeholder={'Got any message for us?'}
									value={textEntries.message}
									onChange={handleTextEntries('message')}
								></textarea>
								<button
									type='submit'
									disabled={loading}
									className={`${
										loading
											? 'grayscale'
											: 'hover:bg-slate-100'
									} lw-full rounded-lg bg-white py-[20px] px-[64px] text-primary transition-all duration-300 md:w-fit lg:mx-auto`}
								>
									{loading ? 'Submitting...' : 'Submit'}
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
