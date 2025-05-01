import React from "react";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import BasicTable1 from "@/app/components/tables/basic/mstablasvcalibra";
import BasicTable2 from "@/app/components/tables/basic/Tabel2";
import BasicTable3 from "@/app/components/tables/basic/Table3";
import BasicTable5 from "@/app/components/tables/basic/Table5";
import BasicTable4 from "@/app/components/tables/basic/Table4";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../../components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import CardBox from "@/app/components/shared/CardBox";
import ProductDescsvtpt from "@/app/components/apps/servicios/productDetail/ProductDescsvtpt";
import { ProductProvider } from '@/app/context/Ecommercecontext/index';
import ProductCarousel from "../../../components/apps/servicios/productDetail/ProductCarousel";
import ProductDetail from "@/app/components/apps/ecommerce/productDetail";


export const metadata: Metadata = {
  title: "Tabla",
  description: "Tabla de servicios de calibración",
};


const sistemaccritico = () => {
  return (
    <>
      <ProductProvider>
        <ThemeBreadcrumb title="Calificación de sistemas de apoyo crítico"/>
        {/* Slider and Details of Products */}
        <CardBox>
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-6 col-span-12"><ProductCarousel /></div>
            <div className="lg:col-span-6 col-span-12">
            Con una duración de la calificación de 24 horas y/o 48 horas de acuerdo con los protocolos establecidos.
              <ul>
                <li>•	Integridad de filtros HEPA.</li>
                <li>•	Medición de caudal de suministro y extracción.</li>
                <li>•	Cálculo de cambios hora.</li>
                <li>•	Medición de calidad de aire.</li>
                <li>•	Medición de diferenciales de presión.</li>
                <li>•	Pruebas de humo.</li>
              </ul>
            </div>
          </div>
        </CardBox>
      </ProductProvider>
    </>
  );
};

export default sistemaccritico;



