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
import ProductCarousel from "../../../components/apps/servicios/productDetail/ProductCarousevehic";
import ProductDetail from "@/app/components/apps/ecommerce/productDetail";


export const metadata: Metadata = {
  title: "Tabla",
  description: "Tabla de servicios de calibración",
};


const calificacionvehiculos = () => {
  return (
    <>
      <ProductProvider>
        <ThemeBreadcrumb title="Calificación de vehículos"/>
        {/* Slider and Details of Products */}
        <CardBox>
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-6 col-span-12"><ProductCarousel /></div>
            <div className="lg:col-span-6 col-span-12">
            La calificación de vehículos refrigerados es un proceso técnico y sistemático que asegura que los vehículos utilizados para el transporte de productos sensibles a la temperatura, como medicamentos, alimentos y productos biológicos, cumplan con los requisitos necesarios para mantener la integridad y calidad de los productos transportados. Este proceso incluye:

3.	Verificación de equipos: Asegurarse de que los sistemas de refrigeración del vehículo funcionen correctamente y puedan mantener la temperatura requerida durante el transporte.

4.	Pruebas de temperatura: Realizar pruebas de mapeo térmico para verificar la uniformidad de la temperatura en todo el compartimento de carga, asegurando que no haya puntos calientes o fríos que puedan comprometer los productos.

5.	Validación de procedimientos: Asegurar que los procedimientos de carga, descarga y transporte cumplan con las normativas y estándares de calidad específicos de la industria.

6.	Documentación y registros: Mantener registros detallados de todas las pruebas y verificaciones realizadas, incluyendo cualquier mantenimiento y calibración de los equipos de refrigeración.

7.	Cumplimiento regulatorio: Garantizar que el vehículo y sus sistemas de refrigeración cumplan con las regulaciones y normativas aplicables, tanto nacionales como internacionales, para el transporte de productos refrigerados.





            </div>
          </div>
        </CardBox>
      </ProductProvider>
    </>
  );
};

export default calificacionvehiculos;











