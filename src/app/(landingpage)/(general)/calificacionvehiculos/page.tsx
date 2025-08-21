"use client";

import React from "react";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import ProductCarousel from "@/app/components/apps/servicios/productDetail/ProductCarousevehic";
import { ProductProvider } from "@/app/context/Ecommercecontext/index";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import TitleCard from "@/app/components/shared/TitleBorderCard";
 
const CalificacionVehiculos = () => {
  const { t } = useTranslation();

  return (
    <ProductProvider>
      <section className="min-h-screen py-12 px-4 dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          <ThemeBreadcrumb title={t("Calificación de vehículos")} />

          <TitleCard title={t("Calificación de vehículos")}>
            <div className="flex flex-col md:flex-row items-start gap-10">
              {/* Carousel */}
              <div
                className="w-full md:w-5/12"
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
                <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary dark:text-white leading-snug">
                  {t("Calificación de vehículos")}
                </h1>

                <p className="text-justify text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                  {t(
                    "La calificación de vehículos refrigerados es un proceso técnico y sistemático que asegura que los vehículos utilizados para el transporte de productos sensibles a la temperatura, como medicamentos, alimentos y productos biológicos, cumplan con los requisitos necesarios para mantener la integridad y calidad de los productos transportados. Este proceso incluye:"
                  )}
                </p>

                <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                  <li>
                    {t(
                      "Verificación de equipos: Asegurarse de que los sistemas de refrigeración del vehículo funcionen correctamente y puedan mantener la temperatura requerida durante el transporte."
                    )}
                  </li>
                  <li>
                    {t(
                      "Pruebas de temperatura: Realizar pruebas de mapeo térmico para verificar la uniformidad de la temperatura en todo el compartimento de carga, asegurando que no haya puntos calientes o fríos que puedan comprometer los productos."
                    )}
                  </li>
                  <li>
                    {t(
                      "Validación de procedimientos: Asegurar que los procedimientos de carga, descarga y transporte cumplan con las normativas y estándares de calidad específicos de la industria."
                    )}
                  </li>
                  <li>
                    {t(
                      "Documentación y registros: Mantener registros detallados de todas las pruebas y verificaciones realizadas, incluyendo cualquier mantenimiento y calibración de los equipos de refrigeración."
                    )}
                  </li>
                  <li>
                    {t(
                      "Cumplimiento regulatorio: Garantizar que el vehículo y sus sistemas de refrigeración cumplan con las regulaciones y normativas aplicables, tanto nacionales como internacionales, para el transporte de productos refrigerados."
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </TitleCard>
        </div>
      </section>
    </ProductProvider>
  );
};

export default CalificacionVehiculos;
