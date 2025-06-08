"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import * as AppsData from "../layout/vertical/header/Data";
import { IconChevronDown } from "@tabler/icons-react";
import Quicklinks from "@/app/ModulosMssinergy/layout/vertical/header/Quicklinks";
import { useTranslation } from "react-i18next";
import "../../../../utils/i18n";

const ServicioMenu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar al hacer clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="py-1.5 px-4 text-darkbody dark:text-darkmuted text-base text-ld hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer"
      >
        {t("Servicios")}
        <IconChevronDown className="ms-1" size={15} />
      </button>

     {open && (
  <div className="absolute z-50 right-0 mt-2 bg-white dark:bg-darkgray shadow-xl rounded-md w-[900px] p-5 origin-top-right">
    <div className="grid grid-cols-12">
      <div className="lg:col-span-8 col-span-12">
        <div className="grid grid-cols-12 lg:gap-3">
          {AppsData.appsLink.map((links, index) => (
            <div key={index} className="col-span-12 lg:col-span-6">
              <Link
                href={links.href}
                onClick={() => setOpen(false)}
                className="flex gap-3 items-center p-2 hover:text-primary group"
              >
                <span className="bg-lightsecondary dark:bg-lightprimary h-10 w-10 flex justify-center items-center rounded-full">
                  <Image
                    src={links.avatar}
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </span>
                <div className="text-left">
                  <h6 className="font-semibold text-sm group-hover:text-primary mb-1">
                    {t(links.title)}
                  </h6>
                  <p className="text-xs text-link dark:text-darkmuted opacity-90 font-medium">
                    {links.subtext}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12">
        <Quicklinks closeMenu={() => setOpen(false)} />
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default ServicioMenu;
