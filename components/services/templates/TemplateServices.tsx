import React from 'react'

const TemplateServices = () => {
    const services = [
        {
            title: "Website Redesign",
            description:
                "Revitalize your online presence with our Website Revamp service. Our team of experts will work with you to modernize your website, improve its functionality, and enhance its design to reflect your brand and meet the needs of your customers. Whether you're looking to update your website's look and feel or add new features, we've got you covered.",
        },
        {
            title: "E-Commerce Website",
            description:
                "Take your business to the next level with our Ecommerce Website service. We specialize in creating visually appealing, user-friendly, and fully-functional ecommerce websites that are optimized for conversions and sales. Our team will work with you to create an online store that meets your business needs and exceeds your expectations.",
        },
        {
            title: "Website Maintanence",
            description:
                "Ensure your website stays up-to-date and running smoothly with our Website Maintenance service. Our team will handle all the technical aspects of maintaining your website, including software updates, security, backups, and more. With our maintenance service, you can focus on running your business while we take care of keeping your website running at peak performance.",
        },
        {
            title: "Custom-Built Website",
            description:
                "Our team of developers will work with you to create a brand new website from scratch, tailored to your business needs and designed to reflect your brand and attract customers. Whether you're a new business or looking to rebrand, our Fresh Website service will help you establish a strong online presence.",
        },
    ];
    return (
        <div id="services" className="grid lg:grid-cols-2 py-16 lg:pb-[148px]">
            <div className="flex flex-col items-center justify-start p-[8px] text-center md:p-4 lg:col-span-2">
                <h1 className="mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]">
                    Types of services we offer
                </h1>
                <p className="text-[18px] text-[#4c4f58]">
                    Get the web development solution you need: SPAs, MPAs,
                    static or dynamic
                </p>
            </div>
            {services.map((service, idx) => (
                <div key={idx} className="w-full px-[8px] py-4 md:p-4 ">
                    <div className="group h-full w-full select-none rounded-3xl bg-[#f6f7fc] px-[24px] py-10 md:px-10 md:py-14">
                        <h1 className={`mb-4 text-[#23262f] md:text-[22px]`}>
                            {service.title}
                        </h1>
                        <p className="mb-[24px] text-justify text-[#777a85]">
                            {service.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TemplateServices