import React from "react";

const services = [
    // {
    // 	title: 'Expertise',
    // 	description:
    // 		'Our team has years of experience in web design and development, and we have a track record of delivering successful projects for businesses of all sizes and industries. We have the skills and knowledge to create a website that meets your needs and exceeds your expectations',
    // },
    {
        title: "Customization",
        description:
            "We understand that every business is unique, and we work closely with you to create a custom website that reflects your brand and meets your specific goals. Whether you need a simple brochure website or a complex e-commerce platform, we have the expertise to build a solution that fits your needs.",
    },
    {
        title: "Innovation",
        description:
            "We are always exploring new technologies and approaches to web development, and we bring a fresh perspective to every project. We are not afraid to think outside the box and come up with creative solutions that help you stand out in a crowded online marketplace.",
    },
    {
        title: "Performance",
        description:
            "We are focused on delivering websites that are fast, reliable, and user-friendly. We use the latest techniques and technologies to optimize your website's performance, and we test and fine-tune every aspect to ensure that it provides a seamless experience for your users.",
    },
    {
        title: "Support",
        description:
            "We believe in building long-term relationships with our clients, and we are dedicated to providing ongoing support and maintenance to ensure that your website stays up-to-date and performs at its best. We are always available to answer your questions and provide guidance as needed",
    },
];

const WhyUs = () => {
    return (
        <div className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-3 py-16 md:px-5 lg:grid-cols-5 lg:px-[5vw] lg:pb-[148px]">
            <div className="mx-auto w-full max-w-[1440px] px-4 py-12">
                <div className="mx-4 grid gap-4 sm:grid-cols-12">
                    <div className="-z-10 col-span-12 sm:col-span-3 ">
                        <div className="sticky top-28 text-center sm:text-left sm:before:mx-0">
                            <h3 className="mb-2 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:mb-0 lg:text-[40px]">
                                Why choose{" "}
                                <span className=" h-fit w-fit bg-[url('/underline.svg')] bg-bottom bg-no-repeat">
                                    us?
                                </span>
                            </h3>
                            <span className="text-sm tracking-wider text-gray-400">
                                Our web development agency creates custom,
                                innovative websites that meet the specific needs
                                and goals of our clients. We have a team of
                                developers who are dedicated to providing
                                ongoing support and maintenance to ensure the
                                success of our client&apos;s websites. Choose us
                                to build your website and you&apos;ll benefit
                                from our expertise, customization, and
                                commitment to your success.
                            </span>
                        </div>
                    </div>
                    <div className="relative -z-10 col-span-12 space-y-6 sm:col-span-9 lg:ml-8 lg:px-4">
                        <div className="relative col-span-12 space-y-12 before:dark:bg-gray-700 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:-left-3 sm:before:w-0.5 lg:px-4">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center before:dark:bg-primary sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full md:items-start"
                                >
                                    <h3 className="text-xl font-semibold tracking-wide">
                                        {service.title}
                                    </h3>
                                    {/* <time className="text-xs uppercase tracking-wide dark:text-gray-400">
                                Dec 2020
                            </time> */}
                                    <p className="mt-3 text-center md:text-justify">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
