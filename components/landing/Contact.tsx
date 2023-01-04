import React from 'react';

const Contact = () => {
	const handleContactFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
	};

	return (
		<section className='w-full bg-primary' id='contact'>
			<div className='mx-auto w-full max-w-[1440px] px-3 py-16 md:px-5 lg:px-[5vw] lg:py-[148px]'>
				<div className='flex w-full flex-col items-stretch justify-start lg:flex-row lg:gap-10'>
					<div className='w-full p-2 lg:p-4'>
						<div className='text-center md:text-left'>
							<h4 className='mb-4 text-[32px] font-medium md:text-[34px] lg:text-[40px]'>
								Still have any questions? Drop us a line with
								your request.
							</h4>
							<p className='text-justify text-[16px] text-slate-600'>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Assumenda, consectetur libero
								nobis fugiat quam tenetur sit enim officia fugit
								non explicabo veritatis dolor. Repudiandae rerum
								saepe voluptate iure impedit quo.
							</p>
						</div>
					</div>
					<div className='w-full p-2 lg:p-4'>
						<form className='flex flex-col gap-4'>
							<input
								type='text'
								name=''
								id=''
								className='w-full rounded-lg p-4 outline outline-gray-300 '
								placeholder='Name'
							/>
							<input
								type='email'
								name=''
								id=''
								className='w-full rounded-lg p-4 outline outline-gray-300 '
								placeholder='Email'
							/>
							<p>What service&apos;s are you looking for?</p>
							<div className='flex gap-4'>
								<label>
									<input
										type='checkbox'
										name='service'
										value='development'
										className='mr-2 rounded-full'
									/>
									<span>Development</span>
								</label>
								<label>
									<input
										type='checkbox'
										name='service'
										value='design'
										className='mr-2 rounded-full'
									/>
									<span>Design</span>
								</label>
								<label>
									<input
										type='checkbox'
										name='service'
										value='template'
										className='mr-2 rounded-full'
									/>
									<span>Template</span>
								</label>
							</div>
							<textarea
								name=''
								id=''
								className='w-full rounded-lg p-4 outline outline-gray-300'
								placeholder={'Got any message for us?'}
							></textarea>
							<button
								type='submit'
								className='w-full rounded-lg bg-white py-[20px] px-[64px] text-primary transition-all duration-300 hover:bg-slate-100 md:w-fit lg:mx-auto'
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
