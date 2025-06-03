"use client";
import React, { useState } from "react";
import { Button, Drawer } from "flowbite-react";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import MobileDemosMenu from "./MobileDemoMenus";
import FullLogo from "@/app/ModulosMssinergy/layout/shared/logo/FullLogo";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';
import DarkModeToggle from "./DarkModeToggle";
import { Language } from "../../../ModulosMssinergy/layout/vertical/header/Language";

const MobileDrawer = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

 const handleAnchorClick = (target: string) => {
  setIsOpen(false);
  window.location.href = `/${target}`;
};


  return (
    <>
      <div className="xl:hidden flex">
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center text-dark dark:text-white h-10 w-10 rounded-full bg-transparent hover:bg-lightprimary"
        >
          <IconMenu2 />
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="dark:bg-dark">
        <Drawer.Items className="p-6">
          <FullLogo />

          <button
            onClick={() => handleAnchorClick("#demos")}
            className="block py-3 text-base text-dark dark:text-white font-semibold text-left w-full"
          >
            {t("Quíenes somos")}
          </button>

          <button
            onClick={() => handleAnchorClick("#lineatiempo")}
            className="block py-3 text-base text-dark dark:text-white font-semibold text-left w-full"
          >
            {t("Linea del Tiempo")}
          </button>

          <MobileDemosMenu closeDrawer={handleClose} />

          <DarkModeToggle />
          <Language />

          <Button
            color="primary"
            className="mt-2"
            as={Link}
            href="/auth/auth2/login"
            onClick={handleClose}
          >
            {t("Iniciar/Registro")}
          </Button>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
