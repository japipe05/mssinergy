"use client";

import React from "react";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import ProductCarousel from "@/app/components/apps/servicios/productDetail/ProductCarousel";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import TitleCard from "@/app/components/shared/TitleBorderCard";

const SistemacCritico = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-20 dark:bg-dark">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <ThemeBreadcrumb title={t("Calificación de sistemas de apoyo crítico")} />

        <TitleCard title={t("Calificación de sistemas de apoyo crítico")}>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div
              className="w-full md:w-5/12 max-w-md"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <ProductCarousel />
            </div>

            <div
              className="w-full md:w-7/12 space-y-4 max-w-3xl"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary mb-4 leading-snug">
                {t("Calificación de sistemas de apoyo crítico")}
              </h1>

              <p className="text-justify text-base sm:text-lg font-medium leading-7 text-body dark:text-darkmuted">
                {t("Con una duración de la calificación de 24 horas y/o 48 horas de acuerdo con los protocolos establecidos.")}
              </p>

              <ul className="list-disc list-inside space-y-2 pl-4 text-base sm:text-lg font-medium leading-7 text-body dark:text-darkmuted">
                <li>{t("Integridad de filtros HEPA.")}</li>
                <li>{t("Medición de caudal de suministro y extracción.")}</li>
                <li>{t("Cálculo de cambios hora.")}</li>
                <li>{t("Medición de calidad de aire.")}</li>
                <li>{t("Medición de diferenciales de presión.")}</li>
                <li>{t("Pruebas de humo.")}</li>
              </ul>
            </div>
          </div>
        </TitleCard>
      </div>
    </section>
  );
};

export default SistemacCritico;
