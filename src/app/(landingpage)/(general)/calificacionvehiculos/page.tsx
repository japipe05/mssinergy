"use client";

import React from "react";
import CardBox from "@/app/components/shared/CardBox";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import ProductCarousel from "@/app/components/apps/servicios/productDetail/ProductCarousevehic";
import { ProductProvider } from "@/app/context/Ecommercecontext/index";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

const CalificacionVehiculos = () => {
  const { t } = useTranslation();

  return (
    <ProductProvider>
      <ThemeBreadcrumb title={t("Calificación de vehículos")} />

      <CardBox>
        <div className="grid grid-cols-12 gap-6">
          {/* Imagen / Slider */}
          <div className="lg:col-span-6 col-span-12">
            <ProductCarousel />
          </div>

          {/* Texto descriptivo traducido */}
          <div className="lg:col-span-6 col-span-12 space-y-4">
            <p className="text-justify text-base lg:text-lg font-medium text-body dark:text-darkmuted">
              {t("La calificación de vehículos refrigerados es un proceso técnico y sistemático que asegura que los vehículos utilizados para el transporte de productos sensibles a la temperatura, como medicamentos, alimentos y productos biológicos, cumplan con los requisitos necesarios para mantener la integridad y calidad de los productos transportados. Este proceso incluye:")}
            </p>

            <ul className="list-disc list-inside space-y-2 text-base lg:text-lg text-body dark:text-darkmuted">
              <li>{t("Verificación de equipos: Asegurarse de que los sistemas de refrigeración del vehículo funcionen correctamente y puedan mantener la temperatura requerida durante el transporte.")}</li>
              <li>{t("Pruebas de temperatura: Realizar pruebas de mapeo térmico para verificar la uniformidad de la temperatura en todo el compartimento de carga, asegurando que no haya puntos calientes o fríos que puedan comprometer los productos.")}</li>
              <li>{t("Validación de procedimientos: Asegurar que los procedimientos de carga, descarga y transporte cumplan con las normativas y estándares de calidad específicos de la industria.")}</li>
              <li>{t("Documentación y registros: Mantener registros detallados de todas las pruebas y verificaciones realizadas, incluyendo cualquier mantenimiento y calibración de los equipos de refrigeración.")}</li>
              <li>{t("Cumplimiento regulatorio: Garantizar que el vehículo y sus sistemas de refrigeración cumplan con las regulaciones y normativas aplicables, tanto nacionales como internacionales, para el transporte de productos refrigerados.")}</li>
            </ul>
          </div>
        </div>
      </CardBox>
    </ProductProvider>
  );
};

export default CalificacionVehiculos;
