"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Sidebar } from "flowbite-react";
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import NavCollapse from "./NavCollapse";
import SimpleBar from "simplebar-react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import axios from "axios";

interface User {
  usr_id: number;
  usr_nombre: string;
  usr_correo: string;
  usr_fotografia: string;
  usr_codigo_pais: string;
  usr_celular: string;
  usr_credencial: string;
  usr_estado: string;
  usr_ROL: string;
  usr_fecha_creacion: string;
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
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
  collapsedMenu?: boolean;
  dropdownItem?: boolean;
  modulo?: string; // Permiso requerido
}

// ✅ Función recursiva para filtrar Sidebar por permisos
const filterSidebarByAccess = (
  items: MenuitemsType[],
  allowed: string[]
): MenuitemsType[] => {
  return items
    .map((item) => {
      if (item.children) {
        const filteredChildren = filterSidebarByAccess(item.children, allowed);
        if (filteredChildren.length > 0) {
          return { ...item, children: filteredChildren };
        }
        return null;
      }

      if (!item.modulo || allowed.includes(item.modulo)) {
        return item;
      }

      return null;
    })
    .filter(Boolean) as MenuitemsType[];
};

const SidebarLayout = () => {
  const [profileDD, setProfileDD] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [modulos, setModulos] = useState<string[]>([]);
  const [filteredSidebarContent, setFilteredSidebarContent] = useState<MenuitemsType[]>([]);

  const handleProfile = () =>
    setProfileDD((prev) => (prev === "" ? "active" : ""));

  useEffect(() => {
    const fetchUserAndAccess = async () => {
      try {
        const res = await axios.get("/api/auth/me");
        const userData: User = res.data.user;
        setUser(userData);

        const accessRes = await axios.get(`/api/access?usr_id=${userData.usr_id}`);
        const accesos: string[] = accessRes.data.accesos.map((acc: Acceso) => acc.usr_modulo);
        setModulos(accesos);

        const filtered = filterSidebarByAccess(SidebarContent, accesos);
        console.log("✅ Menú filtrado:", filtered);
        setFilteredSidebarContent(filtered);
      } catch (err) {
        console.error("❌ No autenticado o error al cargar datos", err);
      }
    };

    fetchUserAndAccess();
  }, []);

  const Profile_Navitems = [
    {
      key: "profile",
      title: "Mi Perfil",
      href: "/ModulosMssinergy/apps/user-profile/profile",
    },
    {
      key: "profiles",
      title: "Perfiles",
      href: "/ModulosMssinergy/apps/user-profile/profiles",
      modulo: "PERFILES",
    },
    {
      key: "accesos",
      title: "Accesos",
      href: "/ModulosMssinergy/apps/user-profile/accesos",
      modulo: "ACCESOS",
    },
  ];

  const filteredProfileItems = useMemo(
    () =>
      Profile_Navitems.filter((item) => !item.modulo || modulos.includes(item.modulo)),
    [modulos]
  );

  const userName = user?.usr_nombre || "Cargando...";
  const userPhoto = user?.usr_fotografia || "/images/profile/default.jpg";

  return (

    <Sidebar
      className="fixed top-[72px] xl:start-0 -start-[240px] z-10 transition-all menu-sidebar bg-darkgray dark:bg-darkgray px-0"
      aria-label="Sidebar with multi-level dropdown example"
    >

      <SimpleBar className="h-[calc(100vh_-_100px)]">
        <div className="pt-4 pb-2 mb-2 border-b border-darkborder dark:border-darkborder px-2">
          <Link
            href="#"
            className="flex justify-between items-center py-3 px-1 mb-0.5"
            onClick={handleProfile}
          >
            <div className="flex items-center hide-profile gap-3 overflow-hidden">
              <Image
                src={userPhoto}
                alt="profile-image"
                width={30}
                height={30}
                className="rounded-full ml-[5px]"
              />
              <span
                className={`text-white whitespace-nowrap font-light hide-menu truncate max-w-[150px] overflow-hidden text-ellipsis ${profileDD === "active" ? "font-medium" : ""
                  }`}
                title={userName} // 👉 Tooltip con el nombre completo
              >
                {userName}
              </span>
            </div>


            <Icon
              icon="octicon:chevron-right-24"
              className={`text-lg hide-menu shrink-0 transition-all text-white ${profileDD === "active" ? "rotate-90" : ""
                }`}
            />
          </Link>

          {/* Menú de perfil */}
          <ul className={`profile-menu ${profileDD} overflow-hidden`}>
            {filteredProfileItems.map((item) => (
              <li
                key={item.key}
                className="text-white items-center flex gap-2 font-light hover:text-opacity-100 text-opacity-60 dark:text-opacity-60 py-3 px-1 mb-0.5 text-sm"
              >
                <Icon
                  icon="solar:stop-circle-line-duotone"
                  className="text-white text-opacity-60 block mx-4 dark:text-opacity-60 text-xs"
                />
                <Link href={item.href} className="hide-menu">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú lateral */}
        <Sidebar.Items>
          <Sidebar.ItemGroup className="sidebar-nav px-2 space-y-0">
            {filteredSidebarContent.map((item) => (
              <React.Fragment key={item.id}>
                {item.navlabel ? (
                  <li className="mt-4 nav-small-cap">
                    <span className="block hide-menu leading-6 text-xs text-white text-opacity-60 dark:text-opacity-60 uppercase font-medium">
                      {item.subheader}
                    </span>
                    <Icon
                      icon="tabler:dots"
                      className="text-white text-opacity-60 block mt-0 leading-6 dark:text-opacity-60 hide-icon"
                    />
                  </li>
                ) : item.children ? (
                  <div className="dropitems">
                    <NavCollapse item={item} />
                  </div>
                ) : (
                  <NavItems item={item} />
                )}
              </React.Fragment>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </SimpleBar>
    </Sidebar>
  );
};

export default SidebarLayout;
