"use client";

import Logo from "@/app/DashboardLayout/layout/shared/logo/Logo";
import CardBox from "@/app/components/shared/CardBox";
import React, { useEffect } from "react";
import SocialButtons from "../../authforms/SocialButtons";
import AuthLogin from "../../authforms/AuthLogin";
import Link from "next/link";

import rightBgimg from "/public/images/backgrounds/leaf-right.png";
import leftBgimg from "/public/images/backgrounds/leaf-left.png";
import Image from "next/image";
import FullLogo from "@/app/DashboardLayout/layout/shared/logo/FullLogo";
import { useRouter } from "next/navigation";

const BoxedLogin = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/auth/auth2/register");
  }, [router]);

  return (
    <div className="relative overflow-hidden h-screen bg-lightsubtle dark:bg-dark">
      <div className="absolute start-0 bottom-0 z-1 md:block hidden">
        <Image src={leftBgimg} alt="img" />
      </div>
      <div className="flex h-full justify-center items-center px-4">
        <CardBox className="md:w-[450px] w-full border-none">
          <div className="mx-auto mb-4">
            <FullLogo />
          </div>
          <AuthLogin />
          <div className="flex gap-2 text-base text-dark dark:text-white font-medium mt-6 items-center justify-center">
            <p>No tienes Cuenta?</p>
            <Link
              href={"/auth/auth2/register"}
              className="text-primary text-sm font-medium"
            >
              Create an account
            </Link>
          </div>
        </CardBox>
      </div>
      <div className="absolute end-0 bottom-0 z-1 md:block hidden">
        <Image src={rightBgimg} alt="img" />
      </div>
    </div>
  );
};

export default BoxedLogin;
