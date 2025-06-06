"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import ProductCarousel from "@/app/components/apps/servicios/productDetail/ProductCarouseesteriliz";
import { ProductProvider } from "@/app/context/Ecommercecontext/index";
import TitleCard from "@/app/components/shared/TitleBorderCard";

const Esterilizaciones = () => {
  const { t } = useTranslation();

  return (
    <ProductProvider>
      <section className="min-h-screen py-12 px-4 dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          <ThemeBreadcrumb title={t("Esterilizaciones")} />

          <TitleCard title={t("Esterilizaciones")}>
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Carousel */}
              <div
                className="w-full md:w-5/12 max-w-md"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <ProductCarousel />
              </div>

              {/* Contenido */}
              <div
                className="w-full md:w-7/12 space-y-6"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary dark:text-white leading-snug">
                  {t("Esterilizaciones")}
                </h1>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-2">
                    {t("Calificación de autoclaves")}
                  </h2>
                  <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                    <li>{t("Distribución de temperatura")}</li>
                    <li>{t("Control del equipo")}</li>
                    <li>{t("Verificación de sensores")}</li>
                    <li>{t("Cálculo de la presión")}</li>
                    <li>{t("Test Bowie Dick")}</li>
                    <li>{t("Estudio de penetración en la carga y valor Fo")}</li>
                    <li>{t("Estudio de reproducibilidad")}</li>
                    <li>{t("Desafío microbiológico")}</li>
                  </ul>
                </div>

                <div className="pt-6">
                  <h2 className="text-xl font-semibold text-primary mb-2">
                    {t("Horno de despirogenización")}
                  </h2>
                  <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                    <li>{t("Distribución de temperatura")}</li>
                    <li>{t("Control del equipo")}</li>
                    <li>{t("Verificación de sensores")}</li>
                    <li>{t("Cálculo del valor FH (250) para los ciclos evaluados")}</li>
                    <li>{t("Prueba de LAL")}</li>
                    <li>{t("Estudio de penetración de calor")}</li>
                    <li>{t("Estudio de reproducibilidad")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </TitleCard>
        </div>
      </section>
    </ProductProvider>
  );
};

export default Esterilizaciones;
