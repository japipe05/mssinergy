"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import * as AppsData from "@/app/ModulosMssinergy/layout/vertical/header/Data";
import { Accordion } from "flowbite-react";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';

interface MobileDemosMenuProps {
  closeDrawer: () => void;
}

const MobileDemosMenu: React.FC<MobileDemosMenuProps> = ({ closeDrawer }) => {
  const { t } = useTranslation();
  

  return (
    <Accordion collapseAll className="shadow-none mt-4 divide-none">
      <Accordion.Panel>
        <Accordion.Title className="py-3 px-0">{t("Servicios")}</Accordion.Title>
        <Accordion.Content className="px-0 py-3">
          <div className="space-y-4">
            {AppsData.appsLink.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={closeDrawer}
                className="flex items-center gap-4 hover:text-primary"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-lighthover dark:bg-darkgray">
                  <Image
                    src={link.avatar}
                    alt={link.title}
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h6 className="font-semibold text-sm text-dark dark:text-white">
                    
                    {t(link.title)}
                  </h6>
                  <p className="text-xs text-link dark:text-darkmuted opacity-90 font-medium">
                    {link.subtext}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default MobileDemosMenu;
