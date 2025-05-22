"use client";
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import NavCollapse from "./NavCollapse";
import SimpleBar from "simplebar-react";
import Image from "next/image";
import profileImage from "/public/images/profile/user-1.jpg"
import { Icon } from "@iconify/react/dist/iconify.js";

import darkIcon from "/public/images/logos/dark-logo-icon.svg"
import lightIcon from "/public/images/logos/white-logo-icon.svg"
import darkText from "/public/images/logos/dark-logo-text.svg"
import lightText from "/public/images/logos/white-logo-text.svg"
import Link from "next/link"

const MobileSidebar = () => {

  const Profile_Navitems = [
    {
      key:'profile',
      title:"My Profile",
      href:"/"
    },
    {
      key:'balance',
      title:"My Balance",
      href:"/"
    },
    {
      key:'inbox',
      title:"My Inbox",
      href:"/"
    },
    {
      key:'logut',
      title:"My Logout",
      href:"/"
    },
  ]

  const[profileDD,setProfileDD] = useState("");
  const handleProfile = () => {
    if(profileDD===""){
      setProfileDD("active");
    }else{
      setProfileDD("")
    }
  }

  return (
    <div>
        <div className="brand-logo bg-white dark:bg-darkgray flex items-center justify-between ps-4">
    <Link
      href="/"
    >
      <b className="text-nowrap logo-img flex items-center gap-3">
        {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
        {/* Dark Logo icon */}
        <Image
          src={darkIcon}
          alt="homepage"
          className="dark-logo block dark:hidden"
        />
        <Image
          src={lightIcon}
          alt="homepage"
          className="dark-logo hidden dark:block"
        />
        {/* Light Logo icon */}
        <Image
          src={darkText}
          alt="homepage"
          className={`light-logo block dark:hidden  shrink-0`}
        />
        <Image
          src={lightText}
          alt="homepage"
          className={`light-logo  hidden dark:block  shrink-0`}
        />
      </b>
      {/*End Logo icon */}
      {/* Logo text */}
    </Link>
  </div>
      <Sidebar
        className=" transition-all menu-sidebar bg-darkgray dark:bg-darkgray px-0  "
        aria-label="Sidebar with multi-level dropdown example"
      >
       <div className="pt-4 pb-2 mb-2 border-b border-darkborder dark:darkborder px-2">
       <Link href="#" className="flex justify-between items-center py-3 px-1 mb-0.5" onClick={handleProfile}>
          <div className="flex items-center hide-profile gap-3">
            <Image src={profileImage} alt="profile-image" width={30} height={30} className="rounded-full  mx-auto" />
             <span className="text-white font-light hide-menu" >Tania Andrew</span>
          </div>
           <Icon icon="octicon:chevron-right-24" className={`text-lg hide-menu shrink-0 transition-all text-white ${profileDD==="active"?"rotate-90":null}`} />
        </Link>
         <ul className={`ps-10 profile-menu ${profileDD} overflow-hidden`}>
          {Profile_Navitems && Profile_Navitems.map((item)=>{
            return (
              <li key={item.key} className="text-white font-light hover:text-opacity-100 text-opacity-60 dark:text-opacity-60 py-3 px-1 mb-0.5 text-sm">
                <Link href={item.href} >{item.title}</Link>
              </li>
            )
          })}
         </ul>
       </div>
        <SimpleBar className="h-[calc(100vh_-_85px)] px-2">

          <Sidebar.Items>
            <Sidebar.ItemGroup className="sidebar-nav">
                {
                  SidebarContent && SidebarContent.map((item,index)=>{
                     return (
                      <React.Fragment key={index} >
                        {item.navlabel?<div>
                          <span className="pt-4 p-1 block hide-menu leading-6 text-xs text-white text-opacity-60 dark:text-opacity-60 uppercase font-medium" >{item.subheader}</span>
                          <Icon icon="tabler:dots" className="text-white text-opacity-60 block mx-auto mt-6 leading-6 dark:text-opacity-60 hide-icon" />
                        </div>:(
                          item.children ? (
                            <NavCollapse item={item} />
                          ) : (
                            <NavItems item={item} />
                          )
                        )}
                      </React.Fragment>
                     )
                  })
                }
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </SimpleBar>
      </Sidebar>
    </div>
  );
};

export default MobileSidebar;
