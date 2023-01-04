/**
 * FAQ Section
 */

// Dependencies
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowIcon from '../icons/ArrowIcon';
import FAQS from '../../data/faqs';

const FAQ = () => {
	return (
		<section className='flex w-full' id='faqs'>
			<div className='mx-auto max-w-[1440px] px-3 py-16 md:px-5 lg:px-[5vw] lg:py-[148px]'>
				<div className='flex flex-col items-stretch justify-start text-center'>
					<div className='w-full justify-center p-2 md:p-4'>
						<h2 className='mb-4 text-[32px] font-medium md:text-[34px] lg:text-[40px]'>
							Frequently Asked Questions
						</h2>
					</div>
					<div className='flex w-full flex-col items-center justify-center p-2 md:p-4'>
						{FAQS.map((faq, idx) => (
							<Accordion
								key={idx}
								sx={{
									all: 'unset',
									borderBottom: '1px solid #777a8540',
								}}
								className='group mx-auto mb-6 w-full max-w-[770px] pb-4'
							>
								<AccordionSummary expandIcon={<ArrowIcon />}>
									<span className='text-base font-medium transition-all duration-300 group-hover:text-primary md:text-lg lg:text-[22px]'>
										{faq.question}
									</span>
								</AccordionSummary>
								<AccordionDetails className='text-justify'>
									<span className='text-base font-normal text-[#777a85]'>
										{faq.answer}
									</span>
								</AccordionDetails>
							</Accordion>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
