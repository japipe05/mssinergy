"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import ProductCarousel from "@/app/components/apps/servicios/productDetail/ProductCarouseesteriliz";
import { ProductProvider } from "@/app/context/Ecommercecontext/index";

const Consultoria = () => {
  const { t } = useTranslation();

  return (
    <ProductProvider>
      <section className="min-h-screen py-12 md:py-20 dark:bg-black text-body dark:text-white">
  <div className="container mx-auto px-4 max-w-screen-xl">
    <ThemeBreadcrumb title={t("Consultoría")} />

    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Contenido */}
      <div
        className="w-full md:w-7/12 space-y-4 max-w-3xl"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary dark:text-white mb-4 leading-snug">
          {t("Consultoría en Sistemas de Gestión y Validación")}
        </h1>

        <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
          <li>{t("Evaluación del sistema de gestión de calidad – Resolución 1160 – INVIMA. – Informe 45 OMS anexo 9.")}</li>
          <li>{t("Informe de diagnóstico con análisis de necesidades y expectativas de la empresa.")}</li>
          <li>{t("Desarrollo de Planes de calificación, calibración y validación.")}</li>
          <li>{t("Asesoría continua:")}</li>
          <li>{t("Informes de seguimiento y recomendaciones periódicas durante la implementación.")}</li>
          <li>{t("Mesas de trabajo con los Stakeholders")}</li>
        </ul>
      </div>
    </div>
  </div>
</section>

    </ProductProvider>
  );
};

export default Consultoria;
