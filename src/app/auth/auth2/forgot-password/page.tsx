

'use client';
import Logo from "@/app/ModulosMssinergy/layout/shared/logo/Logo";
import CardBox from "@/app/components/shared/CardBox";
import React from "react";
import SocialButtons from "../../authforms/SocialButtons";
import AuthLogin from "../../authforms/AuthLogin";
import Link from "next/link";
import type { Metadata } from "next";
import rightBgimg from "/public/images/backgrounds/leaf-right.png"
import leftBgimg from "/public/images/backgrounds/leaf-left.png"
import Image from "next/image";
import FullLogo from "@/app/ModulosMssinergy/layout/shared/logo/FullLogo";
import AuthForgotPassword from "../../authforms/AuthForgotPassword";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

const BoxedForgotpwd = () => {
  const { t } = useTranslation();

  
  return (
    <>
      <div className="relative overflow-hidden h-screen bg-lightsubtle dark:bg-dark">
      <div className="absolute start-0 bottom-0 z-1 md:block hidden">
            <Image src={leftBgimg} alt="img"/>
      </div>
        <div className="flex h-full justify-center items-center px-4">
          <CardBox className="md:w-[450px] w-full border-none">
          <div className="w-full">
                <div className="flex justify-center mb-4">
                <FullLogo/>
                </div>
                 <p className="text-bodyclr dark:text-darkmuted text-center text-sm font-medium">
                 {t("Ingrese el Email para recuperar contraseña")}
                 </p>
                 <AuthForgotPassword />
                 
               </div>
          </CardBox>
        </div>
        <div className="absolute end-0 bottom-0 z-1 md:block hidden">
            <Image src={rightBgimg} alt="img"/>
      </div>
      </div>
    </>
  );
};

export default BoxedForgotpwd;


