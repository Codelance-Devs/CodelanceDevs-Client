import React from 'react';
import Image from 'next/image';
import Icon from '../../assets/icon.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className='bg-[#f6f7fc]'>
      <div className="px-[12px] md:px-[20px] lg:px-[5vw] pt-[72px] pb-[32px] mx-auto max-w-[1440px]">
        <div className="flex flex-col items-strech justify-start">
          <div className="p-2 md:p-4 w-full border-b">
            <div className="flex flex-col lg:flex-row items-center md:items-start justify-between">
              <a href='' className='flex items-center'>
                <Image
                  src={Icon.src}
                  alt='Codelance Devs'
                  width={100}
                  height={100}
                  className='h-auto w-10 md:ml-[12px] mb-[40px] lg:mb-0'
                />
                <h1 className='leading-none mb-[40px] lg:mb-0'>
                  Codelance <br />
                  Devs
                </h1>
              </a>
              <div className='w-full flex flex-col md:flex-row items-center justify-between lg:justify-end'>
                <div className='flex flex-col md:flex-row items-stretch mb-4 justify-start text-center'>
                  <a className='p-3 md:px-3 md:py-4 lg:py-2 lg:mx-3 text-[14px] '>How we work</a>
                  <a className='p-3 md:px-3 md:py-4 lg:py-2 lg:mx-3 text-[14px] '>Services</a>
                  <a className='p-3 md:px-3 md:py-4 lg:py-2 lg:mx-3 text-[14px] '>Solution</a>
                  <a className='p-3 md:px-3 md:py-4 lg:py-2 lg:mx-3 text-[14px] '>FAQs</a>
                </div>
                <div className='flex items-center justify-start mb-4 lg:ml-[64px]'>
                  <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/company/codelance-devs/" className='p-3 mx-[2px] hover:text-[#00E07B] transition-all duration-300'><LinkedInIcon/></a>
                  <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/CodelanceDevs' className='p-3 mx-[2px] hover:text-[#00E07B] transition-all duration-300'><TwitterIcon/></a>
                  <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/codelancedevs/' className='p-3 mx-[2px] hover:text-[#00E07B] transition-all duration-300'><InstagramIcon/></a>
                  <a target='_blank' rel="noopener noreferrer" href='mailto:contact@codelancedevs.com' className='p-3 mx-[2px] hover:text-[#00E07B] transition-all duration-300'><EmailOutlinedIcon/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 md:p-4 w-full">
            <div className="flex flex-col md:flex-row items-center justify-start md:justify-between">
              <div className="mb-4 flex flex-col md:flex-row items-stretch justify-center text-center">
                  <Link href='/terms-and-conditions' className='py-2 md:mr-[24px] text-[14px] text-[#777a85]'>Terms and Conditions</Link>
                  <Link href='/privacy-policy' className='py-2 md:mr-[24px] text-[14px] text-[#777a85]'>Privacy Policy</Link>
                  <a target='_blank' rel="noopener noreferrer" href='https://blog.codelancedevs.com' className='py-2 md:mr-[24px] text-[14px] text-[#777a85]'>Blog</a>
              </div>
              <p className='text-[12px] mb-4 text-[#777a85]'>Copyright &copy; {new Date().getFullYear()} Codelance Devs</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer