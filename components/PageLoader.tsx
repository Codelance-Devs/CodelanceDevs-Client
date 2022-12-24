/**
 * Page Loader 
 * Loads when user first visits the website.
 */

import React from 'react';
import Image from 'next/image';
import Logo from "../assets/codelance.png";

const PageLoader = () => {
  return (
    <div className="w-full h-screen fixed inset-0 z-50 flex items-center justify-center bg-slate-200 animate-page-load">
        <Image src={Logo} alt="logo" className="relative w-60 animate-page-load-image" />
    </div>
  )
}

export default PageLoader