'use client';
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
import { useTranslation } from "react-i18next";
import "@/utils/i18n";



const labhumedad = () => {
    const { t } = useTranslation();
  return (
   <section className="min-h-screen py-12 md:py-20 dark:bg-dark">
      <div className="container mx-auto px-4">
        <ThemeBreadcrumb title={t("Laboratorio de humedad relativa")} />
        <div className="mt-10 text-center py-10 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-primary mb-4">
            {t("Esta sección está en construcción")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t("Estamos trabajando para ofrecerte esta información pronto.")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default labhumedad;
