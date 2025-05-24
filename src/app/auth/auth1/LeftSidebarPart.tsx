"use client";
import Image from "next/image";
import React from "react";
import Bgimg from "/public/images/logos/logo-icon.svg";
import loginBgimg from "/public/images/backgrounds/login-security.svg";
import leftBgimg from "/public/images/backgrounds/leaf-left.png";
import rightBgimg from "/public/images/backgrounds/leaf-right.png";
import { Button } from "flowbite-react";

const LeftSidebarPart = () => {
  return (
    <>

      <div className="flex justify-center h-screen items-center z-10 relative">
       <Image src={loginBgimg} alt="login-bg-img"  />
      </div>
      <div className="fixed start-0 bottom-0 z-10">
        <Image src={leftBgimg} alt="img"/>
      </div>
    </>
  );
};

export default LeftSidebarPart;
