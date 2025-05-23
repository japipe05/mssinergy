
import { Icon } from "@iconify/react";
import { Dropdown } from "flowbite-react";
import React from "react";
import * as Notification from "./Data";
import SimpleBar from "simplebar-react";
import Link from "next/link";

const Notifications = () => {

  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className="w-screen sm:w-[360px] py-6  rounded-sm dark:bg-darkgray"
        dismissOnClick={false}
        renderTrigger={() => (
          <div className="relative h-10 w-10 hover:text-primary text-darklink dark:text-darkmuted hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
          <Icon icon="solar:bell-bing-line-duotone" height={20} />
          <div className="notify">
              <span className="heartbit"></span> <span className="point"></span>
        </div>
          </div>
        )}
      >
         <div className="flex items-center px-7 justify-between">
           <h3 className="mb-0 text-base font-medium text-dark dark:text-darkmuted ">
             Notifications
           </h3>
         </div>

                  <SimpleBar className="max-h-80 mt-3">
           {Notification.Notification.map((links, index) => (
             <Link
               href={"/"}
               className="py-3 flex justify-between items-center bg-hover border-t border-border dark:border-darkborder px-6 group/link w-full"
               key={index}
             >
               <div className="flex items-center w-full">
                 <div
                   className={`h-11 w-11 flex-shrink-0 rounded-full flex justify-center items-center ${links.bgcolor} `}
                 >
                   <Icon
                     icon={links.icon}
                     height={20}
                     className={links.color}
                   />
                 </div>
                 <div className="ps-4 flex justify-between w-full">
                   <div className="w-3/4 ">
                     <h5 className="mb-1 text-sm  group-hover/link:text-primary">
                       {links.title}
                     </h5>
                     <div className="text-xs text-darklink dark:text-darkmuted">{links.subtitle}</div>
                   </div>

                   <div className="text-xs block self-start pt-1.5">
                     {links.time}
                   </div>
                 </div>
               </div>
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

export default Notifications;

