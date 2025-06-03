"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import * as AppsData from "../layout/vertical/header/Data";
import { IconChevronDown } from "@tabler/icons-react";
import Quicklinks from "@/app/ModulosMssinergy/layout/vertical/header/Quicklinks";
import { Dropdown } from "flowbite-react";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';

const ServicioMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className="w-[900px] rounded-sm dark:bg-darkgray"
        // ✅ ¡dejamos que se cierre automáticamente!
        renderTrigger={() => (
          <div className="relative">
            <span className="py-1.5 px-4 text-darkbody dark:text-darkmuted text-base text-ld hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
              {t("Servicios")}
              <IconChevronDown className="ms-1" size={15} />
            </span>
          </div>
        )}
      >
        <div className="grid grid-cols-12 w-full">
          <div className="lg:col-span-8 col-span-12 flex items-stretch lg:px-5 lg:pr-0 px-0 py-5">
            <div className="grid grid-cols-12 lg:gap-3 w-full">
              {AppsData.appsLink.map((links, index) => (
                <div
                  className="col-span-12 lg:col-span-6 flex items-stretch"
                  key={index}
                >
                  <ul>
                    <li>
                      {/* ✅ Usamos un <Link> dentro de Dropdown.Item */}
                      <Dropdown.Item className="!p-0 !bg-transparent">
                        <Link
                          href={links.href}
                          className="flex gap-3 items-center hover:text-primary group relative w-full"
                        >
                          <span className="bg-lightsecondary dark:bg-lightprimary h-10 w-10 flex justify-center items-center rounded-full">
                            <Image
                              src={links.avatar}
                              width={20}
                              height={20}
                              alt="materialm"
                            />
                          </span>
                          <div>
                            <h6 className="font-semibold text-sm text-ld group-hover:text-primary mb-1">
                              {t(links.title)}
                            </h6>
                            <p className="text-xs text-link dark:text-darkmuted opacity-90 font-medium">
                              {links.subtext}
                            </p>
                          </div>
                        </Link>
                      </Dropdown.Item>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 col-span-12 flex items-strech">
            <Quicklinks />
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default ServicioMenu;
