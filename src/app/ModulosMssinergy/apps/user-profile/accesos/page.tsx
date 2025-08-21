"use client";
import React from "react";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import BasicTable1 from "@/app/components/tables/basic/Table1";
import Tablaaccesos from "@/app/components/tables/basic/Tablaaccesos";
import BasicTable3 from "@/app/components/tables/basic/Table3";
import BasicTable5 from "@/app/components/tables/basic/Table5";
import BasicTable4 from "@/app/components/tables/basic/Table4";
import type { Metadata } from "next";
import ThemeBreadcrumb from "@/app/ModulosMssinergy/layout/shared/breadcrumb/ThemeBreadcrumb";
//import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";


const page = () => {
    const { t } = useTranslation();
  return (
    <>
      <ThemeBreadcrumb title={t("Accesos")} />
      <TitleCard >
        <div className="grid grid-cols-12 gap-6">
    
          <div className="col-span-12">
            <Tablaaccesos />
          </div>
        
        </div>
      </TitleCard>
    </>
  );
};

export default page;
