"use client";
import React from "react";
import { Button, Drawer, Tooltip } from "flowbite-react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { RightSidebarContent } from "./RightSidebar";

export const MobileRightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);



  return (
    <div>
      <div>
        <div
          className="bg-success flex justify-center rounded-l-full lg:hidden items-center z-10 fixed py-3.5 px-4 bottom-[200px] end-0 hover:bg-successemphasis"
          onClick={() => setIsOpen(true)}
        >
          <Icon icon="mingcute:menu-fill" className="text-xl text-white" />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="bg-lightemphasis dark:bg-darkgray px-0 sm:w-[260px]"
      >
        <RightSidebarContent/>
      </Drawer>
    </div>
  );
};
