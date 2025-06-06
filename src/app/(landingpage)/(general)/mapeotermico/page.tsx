"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import ProductCarousel from "@/app/components/apps/servicios/productDetail/ProductCarouselisompt";
import { ProductProvider } from "@/app/context/Ecommercecontext/index";
import TitleCard from "@/app/components/shared/TitleBorderCard";

const Mapeotermico = () => {
  const { t } = useTranslation();

  return (
    <ProductProvider>
      <section className="min-h-screen py-12 px-4 dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          <ThemeBreadcrumb title={t("Mapeos Térmicos")} />

          <TitleCard title={t("Mapeos Térmicos")}>
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Carousel */}
              <div
                className="w-full md:w-5/12 max-w-md"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                <ProductCarousel />
              </div>

              {/* Texto */}
              <div
                className="w-full md:w-7/12 space-y-6"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <p className="text-justify text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                  {t(
                    "Es un proceso de análisis de datos de temperatura y humedad relativa que se requiere para cualquier espacio asignado para el almacenamiento de productos que así lo requieran (TTSPs)."
                  )}
                </p>

                <p className="text-justify text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                  {t(
                    "De acuerdo con WHO Technical Report Series No. 961, el procedimiento para mapeos térmicos incluye:"
                  )}
                </p>

                <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                  <li>{t("Evaluación de distribución de temperatura")}</li>
                  <li>{t("Evaluación de humedad relativa")}</li>
                  <li>{t("Evaluación de temperatura cinética media (MKT)")}</li>
                  <li>{t("Evaluación de excursiones")}</li>
                  <li>{t("Evaluación de puntos críticos")}</li>
                  <li>{t("Creación o estructura del protocolo de mapeo")}</li>
                  <li>{t("Recopilación de la información del área a evaluar")}</li>
                </ul>

                <h2 className="text-xl font-semibold text-primary">
                  {t("Áreas de aplicación")}
                </h2>
                <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                  <li>{t("Industria farmacéutica: cámaras de almacenamiento, áreas de producción y transporte de medicamentos")}</li>
                  <li>{t("Industria alimentaria: almacenes, cámaras de refrigeración y áreas de procesamiento")}</li>
                  <li>{t("Centros hospitalarios: almacenamiento de medicamentos, equipos médicos y áreas críticas")}</li>
                </ul>
              </div>
            </div>
          </TitleCard>
        </div>
      </section>
    </ProductProvider>
  );
};

export default Mapeotermico;
