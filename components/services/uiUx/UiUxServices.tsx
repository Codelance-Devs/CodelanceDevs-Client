import React from 'react'

const UiUxServices = () => {
    const services = [
        {
            title: "Website Design",
            description:
                "A well-designed website is crucial for any business and our Website Design service is here to help. Let us help you create a website that truly represents your brand and meets your business needs.",
        },
        {
            title: "Web App Design",
            description:
                "Our Website App Design service specializes in creating visually pleasing and user-friendly web applications that reflect your brand and meet the needs of your customers. Whether you're looking to revamp your existing web app or create a new one, we've got you covered.",
        },
        {
            title: "Mobile App Design",
            description:
                "Your mobile app is the face of your business and our Mobile App Design service is dedicated to creating a mobile app that truly represents your brand. Let us help you create a mobile app that truly represents your brand and meets your business needs.",
        },
        {
            title: "Redesign",
            description:
                "Our Redesign service specializes in modernizing and revitalizing your website or mobile app to improve its functionality and enhance its design to reflect your brand and meet the needs of your customers.",
        }
    ];
    return (
        <>
        <div id="services" className="grid lg:grid-cols-2 py-16">
            <div className="flex flex-col items-center justify-start p-[8px] text-center md:p-4 lg:col-span-2">
                <h1 className="mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]">
                    Types of services we offer
                </h1>
                <p className="text-[18px] text-[#4c4f58]">
                    Tailor your UI/UX needs with our design options
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
            <p className='lg:mb-[148px] text-center flex items-center justify-center text-white bg-primary px-4 py-8 rounded-lg'>Our team of UI/UX experts will work with you to create a design that is not only visually appealing, but also easy to navigate and optimized for conversions. We use the latest design trends and technologies to ensure your website stands out and provides a great user experience.</p>
        </>
    );
}

export default UiUxServices