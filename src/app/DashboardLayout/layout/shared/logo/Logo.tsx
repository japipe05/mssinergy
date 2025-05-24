'use client'
import React, { useContext } from 'react';
import Image from "next/image";
import lightLogoIcon from '/public/images/logos/dark-logo-icon.svg'
import darkLogoIcon from '/public/images/logos/white-logo-icon.svg'
import Link from 'next/link';
import { CustomizerContext } from '@/app/context/customizerContext';
const Logo = () => {
  const {activeMode} = useContext(CustomizerContext);
  return (
   <Link href={'/'}>
      {activeMode==="dark"?<Image src={darkLogoIcon} alt="logo" />:<Image src={lightLogoIcon} alt="logo" />}
    </Link>
  )
}

export default Logo
