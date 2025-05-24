"use client";
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import SimpleBar from "simplebar-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import user1 from "/public/images/profile/user-3.jpg"
import user2 from "/public/images/profile/user-6.jpg"
import user3 from "/public/images/profile/user-5.jpg"
import CardBox from "@/app/components/shared/CardBox";
import RightMsgItem from "./RightSidebarItems";

const MessageItems = [
  {key:"item1",desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",img:user1,title:"Mark Freeman",time:"04:12"},
  {key:"item2",desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",img:user2,title:"Mark Freeman",time:"04:12"},
  {key:"item3",desc:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",img:user3,title:"Mark Freeman",time:"04:12"},
]

export const RightSidebarContent = () => {
  return (
    <SimpleBar className="h-[calc(100vh_-_85px)]">
    <div className="px-4 pt-4 ">
    <h5 className=" mb-0 font-medium text-base text-muted dark:text-darkmuted">San Francisco, CA</h5>
    <h3 className=' text-21 font-medium text-heading dark:text-white'>Mon, July 14 11 AM</h3>
    <div className="flex mt-6">
        <div className="text-5xl flex text-primary dark:text-primary">
            <Icon icon="solar:cloud-sun-2-line-duotone"></Icon>
        </div>
        <div className="ms-3">
            <h2 className="text-2xl mb-0 text-heading dark:text-white font-medium">72°F</h2>
            <span className="text-body font-medium dark:text-darkmuted" >Clear with periodic clouds</span>
        </div>
    </div>
    <div className=" flex flex-col self-stretch gap-6 mt-4">
        <div className="flex items-center w-full justify-between">
            <div className="flex items-center gap-2 font-medium dark:text-darkmuted">
                <span className="text-2xl flex">
                    <Icon icon="solar:cloud-snowfall-line-duotone" className="shrink-0" ></Icon>
                </span>
                Saturday
            </div>
            <span className="font-medium dark:text-darkmuted text-sm">65 ° F</span>
        </div>
        <div className="flex items-center w-full justify-between">
            <div className="flex items-center gap-2 font-medium dark:text-darkmuted">
                <span className="text-2xl flex">
                    <Icon icon="solar:cloud-sun-line-duotone"></Icon>
                </span>
                Sunday
            </div>
            <span className="font-medium dark:text-darkmuted">70 ° F</span>
        </div>
        <div className="flex items-center w-full justify-between">
            <div className="flex items-center gap-2 font-medium dark:text-darkmuted">
                <span className="text-2xl flex">
                    <Icon icon="solar:cloud-sun-line-duotone"></Icon>
                </span>
                Monday
            </div>
            <span className="font-medium dark:text-darkmuted">73 ° F</span>
        </div>
    </div>
</div>
<div className="p-4 pt-4 mt-1">
        <h3 className="relative flex items-center text-21 font-medium">
          <span className="w-0.5 h-30px -ms-[16px] me-18px bg-primary inline-block align-middle"></span>
          Message<span className="ms-auto text-sm h-8 w-8 flex items-center justify-center text-white font-medium badge rounded-full bg-success">16</span>
        </h3>
        <div className="msg-widget mt-3">
            {MessageItems.map((item)=>{
              return (<RightMsgItem key={item.key} desc={item.desc} title={item.title} img={item.img} time={item.time} />)
            })}
        </div>
        <div className="p-0">
        <CardBox className="mb-6 bg-indigo dark:bg-indigo">
    <div className="flex">
      <div className="stats">
        <h1 className="text-white font-medium text-4xl mb-2">3,257+</h1>
        <h6 className="text-white  font-medium text-sm mb-2">Twitter Followers</h6>
        <Link href="/" className="btn-custom-dark px-5 font-medium inline-block py-2 mt-2 fs-6 border-0 rounded-full">
                        Check list
         </Link>
      </div>
      <div className="ms-auto">
      <Icon icon="mdi:twitter" className="text-5xl text-white shrink-0"></Icon>
      </div>
    </div>
 </CardBox>

 <CardBox className="mb-6 bg-primary dark:bg-primary">
    <div className="flex">
      <div className="stats">
        <h1 className="text-white font-medium text-4xl mb-2">6509+</h1>
        <h6 className="text-white  font-medium text-sm mb-2">Facebook Likes</h6>
        <Link href="/" className="btn-custom-dark px-5 font-medium inline-block py-2 mt-2 fs-6 border-0 rounded-full">
         Check List
         </Link>
      </div>
      <div className="ms-auto">
      <Icon icon="ri:facebook-fill" className="text-5xl text-white shrink-0"></Icon>
      </div>
    </div>
 </CardBox>

   <CardBox className="mb-0 bg-white dark:bg-dark">
    <div className="flex">
      <div className="stats">
        <h1 className="text-dark font-medium text-4xl mb-2">9062+</h1>
        <h6 className="text-muted dark:text-darkmuted  font-medium text-sm mb-2">Subscribe</h6>
        <Link href="/" className="bg-body hover:bg-darklink text-white dark px-5 font-medium inline-block py-2 mt-2 fs-6 border-0 rounded-full">
        Check List
         </Link>
      </div>
      <div className="ms-auto">
      <Icon icon="solar:letter-bold-duotone" className="text-5xl text-muted shrink-0"></Icon>
      </div>
    </div>
 </CardBox>

      </div>
      </div>
    </SimpleBar>
  )
}

const RightSidebar = () => {
  return (
    <div>
      <Sidebar
        className="fixed top-[70px] lg:end-0  -end-[260px] transition-all  bg-lightemphasis dark:bg-darkgray px-0  "
        aria-label="RightSidebar with multi-level dropdown example"
      >
        <RightSidebarContent/>
      </Sidebar>
    </div>
  );
};

export default RightSidebar;
