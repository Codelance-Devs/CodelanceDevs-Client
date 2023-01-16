import Head from 'next/head';
import React from 'react';
import { NextPage } from 'next';
import PublicLayout from '../layouts/public';

const PrivacyPolicy: NextPage = () => {
	return (
		<>
			<Head>
				<title>Privacy Policy</title>
			</Head>
			<PublicLayout>
				<div className='mx-auto max-w-[1440px] px-6 py-28 md:px-8 lg:px-[5vw]'>
					<h1 className='mb-4 text-[32px] font-medium'>
						Privacy Policy
					</h1>
					<div className='flex flex-col gap-4'>
						<h2 className='text-[18px] text-[#4c4f58]'>
							Privacy Statement
						</h2>
						<p className='text-justify text-[14px] text-[#777a85]'>
							A privacy statement states how you will respect the
							privacy of your website users. It says what
							information you will gather, how you will use it and
							how you will keep it secure.
							<br />A privacy statement is a legal document that
							discloses some or all of the ways a party gathers,
							uses, discloses and manages a customer’s data. The
							exact contents of a privacy policy will depend upon
							the applicable law and may need to address the
							requirements of multiple countries or jurisdictions.
							While there is no universal guidance for the content
							of specific privacy policies, a number of
							organizations provide example forms.
						</p>
						<h2 className='text-[18px] text-[#4c4f58]'>
							Website privacy
						</h2>
						<p className='text-justify text-[14px] text-[#777a85]'>
							This privacy policy sets out how Codelance Devs uses
							and protects any information that you give Codelance
							Devs when you use this website.
							<br />
							Codelance Devs is committed to ensuring that your
							privacy is protected. Should we ask you to provide
							certain information by which you can be identified
							when using this website, then you can be assured
							that it will only be used in accordance with this
							privacy statement.
							<br />
							Codelance Devs may change this policy from time to
							time by updating this page. You should check this
							page from time to time to ensure that you are happy
							with any changes.
						</p>
						<h2 className='text-[18px] text-[#4c4f58]'>
							What we collect.
						</h2>
						<p className='text-justify text-[14px] text-[#777a85]'>
							We may collect the following information:
							<br />
							First name, Last Name, Company Name.
							<br />
							Contact information including email address, Phone
							Number
							<br />
							Demographic information such as postcode,
							preferences and interests
							<br />
							Other information relevant to customer surveys
							and/or offers
							<br />
							Business information like company profile, website,
							products, services etc
						</p>
						<h2 className='text-[18px] text-[#4c4f58]'>Security</h2>
						<p className='text-justify text-[14px] text-[#777a85]'>
							We are committed to ensuring that your information
							is secure. In order to prevent unauthorised access
							or disclosure we have put in place suitable
							physical, electronic and managerial procedures to
							safeguard and secure the information we collect
							online.
						</p>
						<h2 className='text-[18px] text-[#4c4f58]'>
							How we use cookies
						</h2>
						<p className='text-justify text-[14px] text-[#777a85]'>
							A cookie is a small file which asks permission to be
							placed on your computer’s hard drive. Once you
							agree, the file is added and the cookie helps
							analyse web traffic or lets you know when you visit
							a particular site. Cookies allow web applications to
							respond to you as an individual. The web application
							can tailor its operations to your needs, likes and
							dislikes by gathering and remembering information
							about your preferences. We use traffic log cookies
							to identify which pages are being used. This helps
							us analyse data about webpage traffic and improve
							our website in order to tailor it to customer needs.
							We only use this information for statistical
							analysis purposes and then the data is removed from
							the system.
							<br></br>
							Overall, cookies help us provide you with a better
							website, by enabling us to monitor which pages you
							find useful and which you do not. A cookie in no way
							gives us access to your computer or any information
							about you, other than the data you choose to share
							with us.
							<br></br>
							You can choose to accept or decline cookies. Most
							web browsers automatically accept cookies, but you
							can usually modify your browser setting to decline
							cookies if you prefer. This may prevent you from
							taking full advantage of the website.
						</p>
						<h2 className='text-[18px] text-[#4c4f58]'>
							Links to other websites
						</h2>
						<p className='text-justify text-[14px] text-[#777a85]'>
							Our website may contain links to other websites of
							interest. However, once you have used these links to
							leave our site, you should note that we do not have
							any control over that other website. Therefore, we
							cannot be responsible for the protection and privacy
							of any information which you provide whilst visiting
							such sites and such sites are not governed by this
							privacy statement. You should exercise caution and
							look at the privacy statement applicable to the
							website in question.
						</p>
						<h2 className='text-[18px] text-[#4c4f58]'>
							Controlling your personal information
						</h2>
						<p className='text-justify text-[14px] text-[#777a85]'>
							We will not sell, distribute or lease your personal
							information to third parties unless we have your
							permission or are required by law to do so. We may
							use your personal information to send you
							promotional information about third parties which we
							think you may find interesting if you tell us that
							you wish this to happen.
						</p>
					</div>
				</div>
			</PublicLayout>
		</>
	);
};

export default PrivacyPolicy;
