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
import ProductCarousel from "../../../components/apps/servicios/productDetail/ProductCarouseliso";
import ProductDetail from "@/app/components/apps/ecommerce/productDetail";


export const metadata: Metadata = {
  title: "Tabla",
  description: "Tabla de servicios de calibración",
};


const isotermico = () => {
  return (
    <>
      <ProductProvider>
        <ThemeBreadcrumb title="Calificaciones isotérmicos"/>
        {/* Slider and Details of Products */}
        <CardBox>
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-6 col-span-12"><ProductCarousel /></div>
            <div className="lg:col-span-6 col-span-12">
              La calificación es el proceso mediante el cual se verifica que un equipo o sistema cumple con sus especificaciones y requisitos establecidos. Es un componente del proceso de aseguramiento de calidad.
              Busca asegurar que el equipo o sistema funcione correctamente y de acuerdo con las especificaciones del fabricante y las necesidades del usuario. La calificación generalmente se realiza para garantizar que un equipo esté en condiciones adecuadas de operación.

              <ul>
                <li>Tipos de calificación</li>
              </ul>
 
              <ul>
                <li>•	Calificación de Diseño (DQ): Verifica que el diseño del equipo o sistema cumpla con las especificaciones y requisitos del usuario.</li>
                <li>•	Calificación de Instalación (IQ): Asegura que el equipo o sistema esté instalado de acuerdo con las especificaciones del fabricante.</li>
                <li>•	Calificación Operacional (OQ): Verifica que el equipo o sistema funcione de acuerdo con sus especificaciones bajo condiciones operativas normales.</li>
                <li>•	Calificación de Desempeño (PQ): Asegura que el equipo o sistema funcione correctamente en condiciones de uso normales y cumpla con las expectativas del usuario.</li>
              </ul>

              <ul>
  <li>Baños Maria.</li>
  <li>Cámaras de estabilidad.</li>
  <li>Cámaras de esterilización de óxido de etileno.</li>
  <li>Congeladores.</li>
  <li>Cuartos fríos.</li>
  <li>Horno de secado.</li>
  <li>Incubadoras.</li>
  <li>Marmitas - Tanques de preparación.</li>
  <li>Perfiles de temperatura y humedad.</li>
  <li>Refrigeradores.</li>
  <li>Ultra congeladores.</li>
  <li>Equipos de producción.</li>
  <li>Plantas eléctricas.</li>
</ul>


            </div>
          </div>
        </CardBox>
      </ProductProvider>
    </>
  );
};

export default isotermico;











