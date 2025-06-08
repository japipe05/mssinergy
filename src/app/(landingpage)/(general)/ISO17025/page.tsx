"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import { ProductProvider } from "@/app/context/Ecommercecontext/index";

const ISO17025 = () => {
  const { t } = useTranslation();

  return (
    <ProductProvider>
      <section className="min-h-screen py-12 px-4 dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          <ThemeBreadcrumb title="ISO 17025" />

          <TitleCard title="ISO 17025">
            <div className="w-full space-y-4" data-aos="fade-up" data-aos-duration="500">
              <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary dark:text-white mb-4 leading-snug">
                {t("Requisitos generales para la competencia de los laboratorios de ensayo y calibración - ISO 17025")}
              </h1>

              <p className="text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                {t("La norma ISO/IEC 17025 especifica los requisitos generales para la competencia, imparcialidad y operación coherente de los laboratorios. Aplica tanto a laboratorios de ensayo como de calibración y es esencial para asegurar resultados técnicamente válidos.")}
              </p>

              <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                <li>{t("Aseguramiento de la calidad en los procesos de ensayo y calibración")}</li>
                <li>{t("Gestión de riesgos y trazabilidad de las mediciones")}</li>
                <li>{t("Confianza en los resultados y en la competencia técnica")}</li>
                <li>{t("Cumplimiento con organismos de acreditación nacionales e internacionales")}</li>
              </ul>

              <div className="pt-6">
                <p className="text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                  {t("Consulta los recursos oficiales y la versión PDF de la norma:")}
                </p>
                <ul className="list-disc list-inside pl-4 mt-2 space-y-2 text-blue-600 dark:text-blue-400 text-base font-medium">
                  <li>
                    <a
                      href="https://www.iso.org/standard/66912.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      ISO.org – Página oficial de la norma ISO/IEC 17025
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100424.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Descargar PDF resumen de ISO/IEC 17025 (ISO.org)
                    </a>
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

export default ISO17025;
