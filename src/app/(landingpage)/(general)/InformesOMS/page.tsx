"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import { ProductProvider } from "@/app/context/Ecommercecontext/index";

const InformesOMS = () => {
  const { t } = useTranslation();

  return (
    <ProductProvider>
      <section className="min-h-screen py-12 px-4 dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          <ThemeBreadcrumb title="Informes OMS" />

          <TitleCard title="Informes OMS">
            <div className="w-full space-y-4" data-aos="fade-up" data-aos-duration="500">
              <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary dark:text-white mb-4 leading-snug">
                {t("Buenas Prácticas de Fabricación – Informes OMS")}
              </h1>

              <p className="text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                {t("Los Informes de la OMS proporcionan guías técnicas sobre Buenas Prácticas de Fabricación (BPF) y otros estándares internacionales relacionados con la calidad en productos farmacéuticos. Son usados como referencia clave para cumplir con normativas sanitarias y de calidad en múltiples países.")}
              </p>

              <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                <li>{t("Guía de Buenas Prácticas de Fabricación (GMP)")}</li>
                <li>{t("Recomendaciones para la validación y calificación de procesos")}</li>
                <li>{t("Referencias para auditorías regulatorias y autoinspecciones")}</li>
                <li>{t("Cumplimiento con estándares internacionales de calidad sanitaria")}</li>
              </ul>

              <div className="pt-6">
                <p className="text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                  {t("Accede a los recursos oficiales y documentos técnicos de la OMS:")}
                </p>
                <ul className="list-disc list-inside pl-4 mt-2 space-y-2 text-blue-600 dark:text-blue-400 text-base font-medium">
                  <li>
                    <a
                      href="https://www.who.int/publications/gmp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      OMS – Buenas Prácticas de Fabricación (GMP)
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

export default InformesOMS;
