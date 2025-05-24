import React from "react";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import BasicTable1 from "@/app/components/tables/basic/mstablasvcalibra";
import BasicTable2 from "@/app/components/tables/basic/Tabel2";
import BasicTable3 from "@/app/components/tables/basic/Table3";
import BasicTable5 from "@/app/components/tables/basic/Table5";
import BasicTable4 from "@/app/components/tables/basic/Table4";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../../components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Tabla",
  description: "Tabla de servicios de calibración",
};


const servicocalibracion = () => {
  return (
    <>
      <ThemeBreadcrumb title="Servicio de Calibraciones" />
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <BasicTable1 />
          </div>
        </div>
      
    </>
  );
};

export default servicocalibracion;
