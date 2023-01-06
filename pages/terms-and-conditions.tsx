import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next';
import PublicLayout from '../layouts/public';

const TermsAndConditions = () => {
    return (
        <section>
            <Head>
				<title>Terms And Conditions</title>
			</Head>
            <PublicLayout>
                <div className="px-6 md:px-8 lg:px-[5vw] py-28 mx-auto max-w-[1440px]">
                    <h1 className='text-[32px] font-medium mb-4'>Terms And Conditions</h1>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-[18px] text-[#4c4f58]'>Terms of Use</h2>
                        <p className='text-[14px] text-[#777a85] text-justify'>
                            The Website Owner, including subsidiaries and affiliates (“Website” or “Website Owner” or “we” or “us” or “our”) provides the information contained on the website or any of the pages comprising the website (“website”) to visitors (“visitors”) (cumulatively referred to as “you” or “your” hereinafter) subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.
                        </p>
                        <h2 className='text-[18px] text-[#4c4f58]'>Terms & Conditions</h2>
                        <p className='text-[14px] text-[#777a85] text-justify'>
                            Welcome to our website [www.trionix.qa]. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Trionix Global relationship with you in relation to this website.
                            The term &apos;Trionix Global&apos; or ‘us’ or ‘we’ refers to the owner of the website whose office is
                            Khaybar Street, Doha, Qatar - P.O. Box 19630. The term ‘you’ refers to the user or viewer of our website.
                        </p>
                        <h2 className='text-[18px] text-[#4c4f58]'>The use of this website is subject to the following terms of use.</h2>
                        <p className='text-[14px] text-[#777a85] text-justify'>
                            The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                            <br/>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                            <br/>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
                            <br/>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                            <br/>All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
                            <br/>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
                            <br/>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
                            <br/>You may not create a link to this website from another website or document without Trionix Global prior written consent.
                            <br/>Your use of this website and any dispute arising out of such use of the website is subject to the law or other regulatory authority.
                        </p>
                    </div>
                </div>
            </PublicLayout>
        </section>
    )
}

export default TermsAndConditions