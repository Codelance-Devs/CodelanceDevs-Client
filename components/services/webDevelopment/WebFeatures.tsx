import React from "react";
import DesignIcon from '../../icons/DesignIcon';


const WebFeatures = () => {
    const features = [
        {
            title: "Mobile Friendly",
        },
        {
            title: "User Accessibility",
        },
        {
            title: "Best SEO Practices",
        },
        {
            title: "Hosting Support",
        },
        {
            title: "Technical Maintenance",
        },
    ];

    return (
        <div id="services" className="grid py-16 lg:grid-cols-5 lg:pb-[148px]">
            <div className="flex flex-col items-center justify-start p-[8px] text-center md:p-4 lg:col-span-5 md:col-span-3">
                <h1 className="mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]">
                    Features we deliver
                </h1>
                <p className="text-[18px] text-[#4c4f58]">
                    Your website&apos;s success is our top concern, we ensure
                    it&apos;s equipped with the best features
                </p>
            </div>
            {features.map((feature, idx) => (
                <div key={idx} className="w-full px-2 py-4 md:py-10 md:px-8 ">
                    <div className="group h-full w-full select-none flex flex-col items-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                            <DesignIcon/>
                        </div>
                        <p className={`text-[#23262f]`}>
                            {feature.title}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WebFeatures;
