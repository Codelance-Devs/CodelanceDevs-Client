import Image from 'next/image';
import React from 'react';
// import Line from '../assets/underline.svg'
import Construction from '../assets/construction.svg'

const Landing = () => {
  return (
    <div className="lg:bg-[url('../assets/hero-bg.svg')] lg:bg-no-repeat lg:bg-right-top pt-[112px] pb-[64px] px-[12px] flex flex-col lg:flex-row w-full md:px-[20px] md:pt-[128px] md:pb-[64px] lg:px-[5vw] lg:py-[148px] lg:min-h-[100vh]">
      <div className="p-[8px] w-full h-1/2 md:py-[20px] md:px-[16px] lg:w-1/2 lg:h-full lg:p-[16px] ">
        <h1 className="mb-[24px] font-medium text-[44px] text-[#23262f] md:text-[48px] lg:pr-[40px] lg:mb-[24px] lg:text-[56px]">
          <div className=" bg-[url('../assets/underline.svg')] w-fit h-fit bg-no-repeat bg-bottom">Website</div>
          under construction
        </h1>
        <p className="mb-[24px] text-[18px] font-normal text-[#777a85]">If your interested in our services fill in your details and we will get back to you.</p>
        <form>
          <div className="flex flex-col gap-6 w-full md:w-3/4">
            <input type="text" className="outline outline-gray-300 rounded p-[16px] focus:outline-[#00E07B]" placeholder="Name" required />
            <input type="email" className="outline outline-gray-300 rounded p-[16px] focus:outline-[#00E07B]" placeholder="Email" required/>
            <button className="w-full md:w-fit py-[20px] px-[64px] bg-[#00E07B] hover:bg-[#05c870] transition-all duration-300 rounded-xl"><h1 className="font-medium text-[14px] text-[#23262f]">Get Notified</h1></button>
          </div>
        </form>
      </div>
      <div className="p-[8px] w-full h-1/2 md:py-[20px] md:px-[16px] lg:w-1/2 lg:h-full lg:p-[16px] ">
        <Image src={Construction} alt="Construction" className="w-full" />
      </div>
    </div>
  )
}

export default Landing