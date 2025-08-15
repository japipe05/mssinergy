"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Sidebar } from "flowbite-react";
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import SimpleBar from "simplebar-react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import axios from "axios";

import darkIcon from "/public/images/logos/dark-logo-icon.svg";
import lightIcon from "/public/images/logos/white-logo-icon.svg";
import darkText from "/public/images/logos/dark-logo-text.svg";
import lightText from "/public/images/logos/white-logo-text.svg";

interface User {
  usr_id: number;
  usr_nombre: string;
  usr_fotografia: string;
  accesos: string[];
}

interface Acceso {
  usr_modulo: string;
}

interface MenuitemsType {
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  modulo?: string;
}

// Recursivo para filtrar menú según permisos
const filterSidebarByAccess = (
  items: MenuitemsType[],
  allowed: string[]
): MenuitemsType[] =>
  items
    .map((item) => {
      if (item.children) {
        const filteredChildren = filterSidebarByAccess(item.children, allowed);
        return filteredChildren.length ? { ...item, children: filteredChildren } : null;
      }
      if (!item.modulo || allowed.includes(item.modulo)) return item;
      return null;
    })
    .filter(Boolean) as MenuitemsType[];

// Componente para submenús en mobile
const NavCollapseMobile = ({ item }: { item: MenuitemsType }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full px-3 py-2 text-white hover:bg-gray-700 rounded-md"
      >
        <div className="flex items-center gap-3">
          {item.icon && <item.icon className="text-lg" />}
          <span>{item.title}</span>
        </div>
        <Icon
          icon="mdi:chevron-down"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="pl-8 mt-1 space-y-1">
          {item.children?.map((child) => (
            <li key={child.id || child.title}>
              <NavItems item={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MobileSidebar = () => {
  const [profileDD, setProfileDD] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [modulos, setModulos] = useState<string[]>([]);
  const [filteredSidebarContent, setFilteredSidebarContent] = useState<MenuitemsType[]>([]);

  const handleProfile = () => setProfileDD((prev) => (prev === "" ? "active" : ""));

  useEffect(() => {
    const fetchUserAndAccess = async () => {
      try {
        const res = await axios.get("/api/auth/me");
        const userData: User = res.data.user;
        setUser(userData);

        const accessRes = await axios.get(`/api/access?usr_id=${userData.usr_id}`);
        const accesos: string[] = accessRes.data.accesos.map((acc: Acceso) => acc.usr_modulo);
        setModulos(accesos);

        setFilteredSidebarContent(filterSidebarByAccess(SidebarContent, accesos));
      } catch (err) {
        console.error("❌ Error al cargar usuario o accesos", err);
      }
    };

    fetchUserAndAccess();
  }, []);

  const Profile_Navitems = [
    { key: "profile", title: "Mi Perfil", href: "/ModulosMssinergy/apps/user-profile/profile" },
    { key: "profiles", title: "Perfiles", href: "/ModulosMssinergy/apps/user-profile/profiles", modulo: "PERFILES" },
    { key: "accesos", title: "Accesos", href: "/ModulosMssinergy/apps/user-profile/accesos", modulo: "ACCESOS" },
  ];

  const filteredProfileItems = useMemo(
    () => Profile_Navitems.filter((item) => !item.modulo || modulos.includes(item.modulo)),
    [modulos]
  );

  const userName = user?.usr_nombre || "Cargando...";
  const userPhoto = user?.usr_fotografia || "/images/profile/default.jpg";

  return (
    <div>
      {/* Logo */}
      <div className="brand-logo bg-white dark:bg-darkgray flex items-center justify-between ps-4">
        <p>Ms Sinergy</p>
      </div>

      {/* Sidebar */}
      <Sidebar className="transition-all menu-sidebar bg-darkgray dark:bg-darkgray px-0" aria-label="Sidebar móvil">
        {/* Perfil */}
        <div className="pt-4 pb-2 mb-2 border-b border-darkborder dark:border-darkborder px-2">
          <button
            className="flex justify-between items-center py-3 px-1 w-full"
            onClick={handleProfile}
          >
            <div className="flex items-center gap-3">
              <Image src={userPhoto} alt="profile-image" width={30} height={30} className="rounded-full" />
              <span className="text-white font-light">{userName}</span>
            </div>
            <Icon
              icon="octicon:chevron-right-24"
              className={`text-lg transition-all text-white ${profileDD === "active" ? "rotate-90" : ""}`}
            />
          </button>
          <ul className={`ps-10 profile-menu ${profileDD} overflow-hidden`}>
            {filteredProfileItems.map((item) => (
              <li
                key={item.key}
                className="text-white font-light hover:text-opacity-100 text-opacity-60 py-3 text-sm"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú principal */}
        <SimpleBar className="h-[calc(100vh_-_85px)] px-2">
          <Sidebar.Items>
            <Sidebar.ItemGroup className="sidebar-nav">
              {filteredSidebarContent.map((item) => (
                <React.Fragment key={item.id}>
                  {item.navlabel ? (
                    <div>
                      <span className="pt-4 p-1 block leading-6 text-xs text-white text-opacity-60 uppercase font-medium">
                        {item.subheader}
                      </span>
                      <Icon icon="tabler:dots" className="text-white text-opacity-60 block mx-auto mt-6 leading-6" />
                    </div>
                  ) : item.children ? (
                    <NavCollapseMobile item={item} />
                  ) : (
                    <NavItems item={item} />
                  )}
                </React.Fragment>
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </SimpleBar>
      </Sidebar>
    </div>
  );
};

export default MobileSidebar;
