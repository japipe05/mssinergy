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
import ProductCarousel from "../../../components/apps/servicios/productDetail/ProductCarouselisompt";
import ProductDetail from "@/app/components/apps/ecommerce/productDetail";


export const metadata: Metadata = {
  title: "Tabla",
  description: "Tabla de servicios de calibración",
};


const mapeotermico = () => {
  return (
    <>
      <ProductProvider>
        <ThemeBreadcrumb title="Mapeos Térmicos"/>
        {/* Slider and Details of Products */}
        <CardBox>
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-6 col-span-12"><ProductCarousel /></div>
            <div className="lg:col-span-6 col-span-12">
            Es un proceso de análisis de datos de temperatura y humedad relativa que se requiere para cualquier espacio a signado para el almacenamiento de productos que así lo requieran (TTSP s). De acuerdo con WHO Técnica Report Series, No. 961 el procedimiento que se realiza para mapeos térmicos es:

Evaluación de distribución de temperatura 
Evaluación de humedad relativa 
Evaluación de temperatura cinética media (MKT)
Evaluación de excursiones 
Evaluación de puntos críticos
Creación o estructura del protocolo de mapeo.
Recopilación de la información del área a evaluar.


Áreas de Aplicación:

Industria Farmacéutica: Cámaras de almacenamiento, áreas de producción y transporte de medicamentos.
Industria alimentaria: almacenes, cámaras de refrigeración y áreas de procesamiento.
centros hospitalarios: almacenamiento de medicamentos, equipos médicos y áreas críticas.



            </div>
          </div>
        </CardBox>
      </ProductProvider>
    </>
  );
};

export default mapeotermico;











