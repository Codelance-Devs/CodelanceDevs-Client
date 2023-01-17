/**
 * FAQ Section
 */

// Dependencies
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowIcon from '../icons/ArrowIcon';
import FAQS from '../../data/faqs';
import Link from 'next/link';

const FAQ = () => {
	return (
		<section className='flex w-full scroll-mt-24' id='faqs'>
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
								<AccordionSummary
									expandIcon={<ArrowIcon />}
									className=''
								>
									<span className='text-left text-base font-medium transition-all duration-300 group-hover:text-primary md:text-lg lg:text-[22px]'>
										{faq.question}
									</span>
								</AccordionSummary>
								<AccordionDetails className='z-10 text-justify'>
									<span className='text-base font-normal text-[#777a85]'>
										{faq.answer}
									</span>
								</AccordionDetails>
							</Accordion>
						))}
						<Accordion
							sx={{
								all: 'unset',
								borderBottom: '1px solid #777a8540',
							}}
							className='group mx-auto mb-6 w-full max-w-[770px] pb-4'
						>
							<AccordionSummary expandIcon={<ArrowIcon />}>
								<span className='text-left text-base font-medium transition-all duration-300 group-hover:text-primary md:text-lg lg:text-[22px]'>
									How can I get in touch with you?
								</span>
							</AccordionSummary>
							<AccordionDetails className='text-justify'>
								<span className='text-base font-normal text-[#777a85]'>
									You can contact us by phone, email, or
									through our online contact form. Our team is
									available to answer any questions you may
									have and discuss your project needs in more
									detail. You can find our contact information
									on our website, or feel free to reach out to
									us directly using the information provided
									below:
									<br />
									<br />
									Phone:{' '}
									<Link
										className='underline'
										href='tel:+917200249230'
									>
										+91 7200249230
									</Link>
									<br />
									Email:{' '}
									<Link
										className='underline'
										href='mailto:contact@codelancedevs.com'
									>
										contact@codelancedevs.com
									</Link>
									<br />
									Contact form:{' '}
									<a className='underline' href='#getQuote'>
										codelancedevs.com/get-quotation
									</a>
									<br />
									<br />
									We are happy to schedule a consultation at a
									time that is convenient for you. We look
									forward to working with you and helping you
									achieve your website and online goals.
								</span>
							</AccordionDetails>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
