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
import ProductCarousel from "../../../components/apps/servicios/productDetail/ProductCarouseesteriliz";
import ProductDetail from "@/app/components/apps/ecommerce/productDetail";


export const metadata: Metadata = {
  title: "Tabla",
  description: "Tabla de servicios de calibración",
};


const esterilizaciones = () => {
  return (
    <>
      <ProductProvider>
        <ThemeBreadcrumb title="Esterilizaciones"/>
        {/* Slider and Details of Products */}
        <CardBox>
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-6 col-span-12"><ProductCarousel /></div>
            <div className="lg:col-span-6 col-span-12">
          
Calificación de autoclaves 
o	Distribución de temperatura.
o	Control del equipo.
o	Verificación de sensores.
o	Cálculo de la presión.
o	Test Bowie Dick.
o	Estudio de penetración en la carga y valor Fo.
o	Estudio de reproducibilidad.
o	Desafío microbiológico.

Horno despirogenización

o	Distribución de temperatura.
o	Control del equipo.
o	Verificación de sensores .
o	Cálculo del valor FH (250) para los ciclos evaluados.
o	Prueba de LAL.
o	Estudio de penetración de calor.
o	Estudio de reproducibilidad


            </div>
          </div>
        </CardBox>
      </ProductProvider>
    </>
  );
};

export default esterilizaciones;











