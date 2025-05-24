import React from "react";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import BasicTable1 from "@/app/components/tables/basic/mstablasvcalibra";
import BasicTable2 from "@/app/components/tables/basic/Tabel2";
import BasicTable3 from "@/app/components/tables/basic/Table3";
import BasicTable5 from "@/app/components/tables/basic/Table5";
import BasicTable4 from "@/app/components/tables/basic/Table4";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../../components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";

import ProductDescsvtpt from "@/app/components/apps/servicios/productDetail/ProductDescsvtpt";
import { ProductProvider } from '@/app/context/Ecommercecontext/index';
import ProductCarousel from "../../../components/apps/servicios/productDetail/ProductCarouseesteriliz";
import ProductDetail from "@/app/components/apps/ecommerce/productDetail";
import CardBox from "@/app/components/shared/CardBox";
import ProductDesc from "@/app/components/apps/servicios/productDetail/ProductDescconsultoria";


export const metadata: Metadata = {
  title: "Tabla",
  description: "Tabla de servicios de calibración",
};


const consultoria = () => {
  return (
    <>
         {/* Description Tabs Products */}
         <CardBox className="mt-[30px] pt-2">
          <ProductDesc />
        </CardBox>

    </>
  );
};

export default consultoria;







