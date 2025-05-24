// NavItems.tsx
"use client";
import React from "react";

import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuitemsType } from "../Sidebaritems";
import { useTranslation } from "react-i18next";
import '../../../../../../utils/i18n';
interface NavItemsProps {
  item: MenuitemsType;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const pathname = usePathname();
  const { t } = useTranslation();
  return (
    <>
      <Sidebar.Item
        href={item.href}
        as={Link}
        className={`${item.href == pathname
          ? "text-white text-opacity-100 mb-0.5 dark:text-opacity-100 dark:text-white"
          : "text-white dark:text-opacity-60 text-opacity-60 bg-transparent group/link mb-0.5"
          } `}
      >
        <span className={`flex align-center items-center ${item.dropdownItem?'gap-[9px]':'gap-1'}`}>
          {item.icon ? (
            item.dropdownItem?<Icon icon={item.icon} height={10} className="dropdown-item-icon" />:<Icon icon={item.icon} height={20} className="collapsed-icon" />
          ) : (
            <span className="h-[6px] w-[6px] bg-darklink dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"></span>
          )}
          <p className="text-sm font-light hide-menu" >{t(`${item.title}`)}</p>
        </span>
      </Sidebar.Item>
    </>
  );
};

export default NavItems;
