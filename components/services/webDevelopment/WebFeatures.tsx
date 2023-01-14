import Image from "next/image";
import React from "react";
import AccessibilityIcon from "../../icons/AccessibilityIcon";
import DesignIcon from '../../icons/DesignIcon';
import GearIcon from "../../icons/GearIcon";
import LaunchIcon from "../../icons/LaunchIcon";
import MobileIcon from "../../icons/MobileIcon";
import SearchCircledIcon from "../../icons/SearchCircledIcon";
import Tooltip from '@mui/material/Tooltip'


const WebFeatures = () => {
    const features = [
        {
            title: "Mobile Friendly",
            icon: MobileIcon,
        },
        {
            title: "User Accessibility",
            icon: AccessibilityIcon,
        },
        {
            title: "Best SEO Practices",
            icon: SearchCircledIcon,
        },
        {
            title: "Hosting Support",
            icon: LaunchIcon,
        },
        {
            title: "Technical Maintenance",
            icon: GearIcon,
        },
    ];

    const techs = [
        {
            path: "/icons/react.png",
            title: 'React.js'
        },
        {
            path: "/icons/next.png",
            title: 'Next.js'
        },
        {
            path: "/icons/tailwind.png",
            title: 'Tailwind CSS'
        },
        {
            path: "/icons/mui.png",
            title: 'Material UI'
        },
        {
            path: "/icons/typescript.png",
            title: 'TypeScript'
        },
        {
            path: "/icons/javascript.png",
            title: 'JavaScript'
        },
        {
            path: "/icons/html.png",
            title: 'HTML5'
        },
        {
            path: "/icons/css.png",
            title: 'CSS3'
        },
        {
            path: "/icons/node.png",
            title: 'Node.js'
        },
        {
            path: "/icons/express.png",
            title: 'Express.js'
        },
        {
            path: "/icons/mongodb.png",
            title: 'MongoDB'
        },
        {
            path: "/icons/mysql.png",
            title: 'MySQL'
        }
    ]

    return (
        <>
            <div className="grid py-16 lg:grid-cols-5 lg:pb-[148px]">
                <div className="flex flex-col items-center justify-start p-[8px] text-center md:p-4 lg:col-span-5 md:col-span-3">
                    <h1 className="mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]">
                        Features we deliver
                    </h1>
                    <p className="text-[18px] text-[#4c4f58]">
                        Our team uses the best, community-approved technologies to create robust websites
                    </p>
                </div>
                {features.map((feature, idx) => (
                    <div key={idx} className="group w-full px-2 py-4 md:py-10 md:px-8 ">
                        <div className="group h-full w-full select-none flex flex-col items-center">
                        <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md'>
                                        {<feature.icon className='group-hover:text-primary transition-all duration-300' />}
                                    </div>
                            <p className={`text-[#23262f]`}>
                                {feature.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid py-16 lg:grid-cols-6 lg:pb-[148px]">
            <div className="flex flex-col items-center justify-start p-[8px] text-center col-span-2 md:p-4 lg:col-span-6 md:col-span-4">
                <h1 className="mb-4 select-text text-[32px] font-medium text-[#23262f] md:text-[34px] lg:text-[40px]">
                    Technologies we use
                </h1>
                <p className="text-[18px] text-[#4c4f58]">
                    Your website&apos;s success is our top concern, we ensure
                    it&apos;s equipped with the best features
                </p>
            </div>
            {techs.map((tech, idx) => (
                <div key={idx} className="w-full px-2 py-4 md:py-10 md:px-8 ">
                    <div className="group h-full w-full select-none flex flex-col items-center">
                    <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white'>
							<Tooltip title={tech.title} placement="top">
                                <Image src={tech.path} width={100} height={100} alt="^_^" className="w-16 h-auto tranistion-all duration-300"/>
                            </Tooltip>
						</div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default WebFeatures;
