"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "flowbite";
import {Navbar } from "flowbite-react";
import FullLogo from "@/app/DashboardLayout/layout/shared/logo/FullLogo";
import PagesMenu from "./Pagesmenu";
import ServicioMenu from './servicios';
import MobileDrawer from "./MobileDrawer";
import DemosMenu from "./DemosMenu";
import DarkModeToggle from "./DarkModeToggle";
import { Language } from "../../../DashboardLayout/layout/vertical/header/Language";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';
const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <header className="bg-transparent dark:bg-dark shadow-lg"
      >
        <Navbar className="fluid py-8 px-0 bg-transparent dark:bg-dark">
          <FullLogo />
          <MobileDrawer/>
          <Navbar.Collapse className="xl:block hidden">
            {/*<DemosMenu />
            <PagesMenu />*/}
            <Navbar.Link as={Link} href="#Inicio" >
            {t("Quíenes somos")}
            </Navbar.Link>
            <Navbar.Link as={Link} href="#Inicio" >
            {t("Metrología")}
            </Navbar.Link>
            <Navbar.Link as={Link} href="#prueba">
            {t("Solicita tú Servicio")}
            </Navbar.Link>
            <ServicioMenu />
            <DarkModeToggle/>
            <Language />
            <Navbar.Link
              as={Link}
              href="/auth/auth2/login"
              className="bg-primary text-white text-sm hover:text-white dark:hover:text-white hover:bg-primaryemphasis py-2 px-5"
            >
              {t("Iniciar/Registro")}
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
