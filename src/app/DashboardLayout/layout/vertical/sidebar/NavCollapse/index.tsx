

import { Sidebar } from "flowbite-react";
import React, { useContext, useEffect } from "react";

import NavItems from "../NavItems";
import { Icon } from "@iconify/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { MenuitemsType } from "../Sidebaritems";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import '../../../../../../utils/i18n';
interface NavCollapseProps {
  item: MenuitemsType;
}


const NavCollapse: React.FC<NavCollapseProps> = ({ item }) => {
  const pathname = usePathname();
  const activeDD = item.children?.find((item)=>{
    return (
      item.href===pathname
    )
  });
  const {t} = useTranslation();
  return (
    <>
      <Sidebar.Collapse
        label={t(`${item.title}`)}
        icon={() => <Icon icon={item.icon} height={20} className="shrink-0 collapsed-icon" />}
        className={`sidebar-dropdown-trigger ${activeDD ? 'text-opacity-100 dark:text-opacity-100' : ''} collapse-menu`}

        renderChevronIcon={(theme, open) => {
          const IconComponent = open
            ? HiOutlineChevronDown
            : HiOutlineChevronDown;

          return (
            <IconComponent
              aria-hidden
              className={`${twMerge(theme.label.icon.open[open ? "on" : "off"])} drop-icon`}
            />
          );
        }}
      >
        {/* Render child items */}
        {item.children && (
          <Sidebar.ItemGroup className="sidebar-dropdown">
            {item.children.map((child) => (
              <React.Fragment key={child.id}>
                {/* Render NavItems for child items */}
                {child.children ? (
                  <NavCollapse item={child} /> // Recursive call for nested collapse
                ) : (
                  <NavItems item={child} />
                )}
              </React.Fragment>
            ))}
          </Sidebar.ItemGroup>
        )}
      </Sidebar.Collapse>
    </>
  );
};

export default NavCollapse;
