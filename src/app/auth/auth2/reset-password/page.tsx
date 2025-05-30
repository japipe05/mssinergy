'use client';

import React, { Suspense } from "react";
import Image from "next/image";
import leftBgimg from "/public/images/backgrounds/leaf-left.png";
import rightBgimg from "/public/images/backgrounds/leaf-right.png";
import CardBox from "@/app/components/shared/CardBox";
import FullLogo from "@/app/ModulosMssinergy/layout/shared/logo/FullLogo";
import AuthResetPassword from "../../authforms/AuthResetPassword";

const ResetPassword = () => {
  return (
    <div className="relative overflow-hidden h-screen bg-lightsubtle dark:bg-dark">
      <div className="absolute start-0 bottom-0 z-1 md:block hidden">
        <Image src={leftBgimg} alt="img" />
      </div>

      <div className="flex h-full justify-center items-center px-4">
        <CardBox className="md:w-[450px] w-full border-none">
          <div className="w-full">
            <div className="flex justify-center mb-4">
              <FullLogo />
            </div>
            <p className="text-bodyclr dark:text-darkmuted text-center text-sm font-medium">
              Digite la contraseña nueva
            </p>

            {/* 👇 Suspense aquí es clave */}
            <Suspense fallback={<p className="text-center">Cargando...</p>}>
              <AuthResetPassword />
            </Suspense>
          </div>
        </CardBox>
      </div>

      <div className="absolute end-0 bottom-0 z-1 md:block hidden">
        <Image src={rightBgimg} alt="img" />
      </div>
    </div>
  );
};

export default ResetPassword;
