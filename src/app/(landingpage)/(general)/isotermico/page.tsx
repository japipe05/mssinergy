"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import ProductCarousel from "@/app/components/apps/servicios/productDetail/ProductCarouseliso";
import { ProductProvider } from "@/app/context/Ecommercecontext/index";
import TitleCard from "@/app/components/shared/TitleBorderCard";

const Isotermico = () => {
  const { t } = useTranslation();

  return (
    <ProductProvider>
      <section className="py-12 md:py-20 dark:bg-dark">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <ThemeBreadcrumb title={t("Calificaciones isotérmicos")} />

          <TitleCard title={t("Calificaciones isotérmicos")}>
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
                  {t("Calificaciones isotérmicos")}
                </h1>

                <p className="text-justify text-base sm:text-lg font-medium leading-7 text-body dark:text-darkmuted">
                  {t("La calificación es el proceso mediante el cual se verifica que un equipo o sistema cumple con sus especificaciones y requisitos establecidos. Es un componente del proceso de aseguramiento de calidad.")}
                </p>

                <p className="text-justify text-base sm:text-lg font-medium leading-7 text-body dark:text-darkmuted">
                  {t("Busca asegurar que el equipo o sistema funcione correctamente y de acuerdo con las especificaciones del fabricante y las necesidades del usuario.")}
                </p>

                <h2 className="text-xl font-semibold text-primary mt-4">
                  {t("Tipos de calificación")}
                </h2>
                <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-darkmuted">
                  <li>{t("Calificación de Diseño (DQ): Verifica que el diseño del equipo o sistema cumpla con las especificaciones y requisitos del usuario.")}</li>
                  <li>{t("Calificación de Instalación (IQ): Asegura que el equipo o sistema esté instalado de acuerdo con las especificaciones del fabricante.")}</li>
                  <li>{t("Calificación Operacional (OQ): Verifica que el equipo o sistema funcione de acuerdo con sus especificaciones bajo condiciones operativas normales.")}</li>
                  <li>{t("Calificación de Desempeño (PQ): Asegura que el equipo o sistema funcione correctamente en condiciones de uso normales y cumpla con las expectativas del usuario.")}</li>
                </ul>

                <h2 className="text-xl font-semibold text-primary mt-6">
                  {t("Equipos aplicables")}
                </h2>
                <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-darkmuted">
                  <li>{t("Baños María")}</li>
                  <li>{t("Cámaras de estabilidad")}</li>
                  <li>{t("Cámaras de esterilización de óxido de etileno")}</li>
                  <li>{t("Congeladores")}</li>
                  <li>{t("Cuartos fríos")}</li>
                  <li>{t("Horno de secado")}</li>
                  <li>{t("Incubadoras")}</li>
                  <li>{t("Marmitas - Tanques de preparación")}</li>
                  <li>{t("Perfiles de temperatura y humedad")}</li>
                  <li>{t("Refrigeradores")}</li>
                  <li>{t("Ultra congeladores")}</li>
                  <li>{t("Equipos de producción")}</li>
                  <li>{t("Plantas eléctricas")}</li>
                </ul>
              </div>
            </div>
          </TitleCard>
        </div>
      </section>
    </ProductProvider>
  );
};

export default Isotermico;
