"use client";
import "flowbite";
import React, { useState, useEffect, useContext } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Search from "./Search";
import { Icon } from "@iconify/react";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";
import { Language } from "./Language";
import Logo from "./Logo";
import MobileLogo from "./MobileLogo";
import MobileHeaderItems from "./MobileHeaderItems";
import {  Drawer } from "flowbite-react";
import MobileSidebar from "../sidebar/MobileSidebar";
import AppLinks from "./AppLinks";
import DarkModeToggle from "./DarkModeToggle";
import HorizontalMenu from "../../horizontal/header/HorizontalMenu";
import { CustomizerContext } from "@/app/context/customizerContext";


const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const {setIsCollapse,isCollapse,activeLayout,isLayout} = useContext(CustomizerContext);
  
  const[mobileMenu,setMobileMenu] = useState("");
 
  const handleMobileMenu = () => {
    if(mobileMenu==="active"){
      setMobileMenu("")
    }else{
      setMobileMenu("active")
    }
  }
  // mobile-sidebar
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
    <header
      className={`fixed  shadow-sm  start-0 w-full top-0 z-5 ${
        isSticky ? "bg-white dark:bg-darkgray shadow-md " : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between dark:bg-darkgray">
      <div className={activeLayout==="vertical"?"block":"hidden"}> 
        <Logo/>
      </div>
      <Navbar
        fluid
        className={`rounded-none bg-white dark:bg-darkgray flex-1  ${activeLayout==="vertical"?"py-4 sm:px-6":`py-0 px-0 ${isLayout==="boxed"?'container':' '}`}`}
      >
      <div className="flex gap-3 xl:hidden">
                {/* Mobile Toggle Icon */}
                <span onClick={() => setIsOpen(true)} className="h-10 w-10 flex dark:hover:text-primary text-darklink dark:text-darkmuted text-opacity-65  hover:text-primary hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer">
              <Icon icon="solar:hamburger-menu-line-duotone" height={21} />
        </span>
       <div className="lg:block hidden" >
       <Search />
       </div>
      </div>

        {/* Toggle Icon   */}
        <Navbar.Collapse className="xl:block hidden">
          <div className="flex gap-3 items-center relative">
            {/* Toggle Menu    */}

            <span onClick={()=>{
              if(isCollapse==="full-sidebar"){
                setIsCollapse("mini-sidebar")
              }
              else{
                setIsCollapse("full-sidebar")
              }
            }}  className={`h-10 w-10 dark:text-darkmuted dark:hover:text-primary hover:text-primary hover:bg-lightprimary rounded-full  justify-center items-center cursor-pointer ${activeLayout==="vertical"?"flex":"hidden"}`}>
              <Icon icon="solar:hamburger-menu-line-duotone" height={21} />
            </span>
            <div className={activeLayout==="vertical"?"hidden":"block"}> 
           <Logo/>
          </div>

            <Search />

          </div>
        </Navbar.Collapse>

         {/* mobile-logo */}
        <MobileLogo />

        <Navbar.Collapse className="lg:block hidden">
          <div className="flex gap-3 items-center">
            {/* Search   */}

            {/* Theme Toggle */}
            <DarkModeToggle/>

             {/* Notification Dropdown */}
                <Notifications/>

               {/* Messages Dropdown */}
              <Messages />

              {/* App Link Dropwown   */}
            <AppLinks />

            {/* Language Dropdown*/}
            <Language />

            {/* Profile Dropdown */}
            <Profile />
          </div>
        </Navbar.Collapse>
          {/* Mobile Toggle Icon */}
            <span className="h-10 w-10 flex lg:hidden hover:text-primary hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer" onClick={handleMobileMenu} >
              <Icon icon="tabler:dots" height={21} />
            </span>
      </Navbar>
      </div>
      <div className={`w-full bg-white dark:bg-darkgray lg:hidden block mobile-header-menu ${mobileMenu}`}>
       <MobileHeaderItems/>
      </div>
      {/* Horizontal Menu  */}
      {
        activeLayout==="vertical"? null :<div className="bg-heading border-border dark:border-darkborder border-t border-b" >
          <HorizontalMenu/>
        </div>
      }
    </header>

   {/* Mobile Sidebar */}
   <Drawer open={isOpen} onClose={handleClose} className="w-130">

        <Drawer.Items>
          <MobileSidebar/>
        </Drawer.Items>
      </Drawer>

    </>


  );
};

export default Header;
