
import { Icon } from "@iconify/react";
import Link from "next/link";
import * as MessagesData from "./Data";
import React from "react";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Badge, Button, Dropdown } from "flowbite-react";

const Messages = () => {
  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className="w-screen sm:w-[360px] py-6 dark:bg-darkgray  rounded-sm"
        dismissOnClick={false}
        renderTrigger={() => (
          <div className="relative h-10 w-10 hover:text-primary text-darklink dark:text-darkmuted hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
          <Icon icon="solar:inbox-line-line-duotone" height={21} />
          <div className="notify">
              <span className="heartbit"></span> <span className="point"></span>
        </div>
          </div>
        )}
      >
         <div className="flex items-center  px-7 justify-between">
           <h3 className="mb-0 text-base font-medium text-dark  dark:text-darkmuted">
           You have 4 new messages
           </h3>
         </div>
            <SimpleBar className="max-h-80 mt-3 border-transparent">
             {MessagesData.MessagesLink.map((links, index) => (
               <Link
                 href={"/"}
                 className="py-3 flex justify-between border-t border-border dark:border-darkborder items-center bg-hover px-6 group/link"
                 key={index}
               >
                 <div className="flex items-center">
                   <span className="flex-shrink-0 relative">
                     <Image
                       src={links.avatar}
                       width={45}
                       height={45}
                       alt="materialm"
                       className="rounded-full"
                     />
                     <i
                       className={`h-2 w-2 rounded-full absolute end-0 top-0 ${links.color}`}
                     ></i>
                   </span>
                   <div className="ps-4">
                     <h5 className="mb-1 text-sm  group-hover/link:text-primary">
                       {links.title}
                     </h5>
                     <span className="text-xs block truncate text-darklink dark:text-darkmuted">
                       {links.subtitle}
                     </span>
                   </div>
                 </div>
                 <span className="text-xs block self-start pt-1.5">
                   {links.time}
                 </span>
               </Link>
             ))}
           </SimpleBar>
          <div className="pt-5 px-6">
           <Link
               href='/'
               className="text-sm flex gap-2 items-center justify-center font-semibold text-link dark:text-white hover:text-primary dark:hover:text-primary"
             >
               Check all notifications <Icon icon='fluent:chevron-right-28-filled' className="shrink-0 text-base" />
             </Link>
           </div>
      </Dropdown>
    </div>
  );
};

export default Messages;

