"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import { ProductProvider } from "@/app/context/Ecommercecontext/index";

const ResolucionesInvima = () => {
  const { t } = useTranslation();

  return (
    <ProductProvider>
      <section className="min-h-screen py-12 px-4 dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          <ThemeBreadcrumb title="Resoluciones Invima" />

          <TitleCard title="Resoluciones Invima">
            <div className="w-full space-y-4" data-aos="fade-up" data-aos-duration="500">
              <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary dark:text-white mb-4 leading-snug">
                {t("Normativa Sanitaria Colombiana – Resoluciones Invima")}
              </h1>

              <p className="text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                {t("Las resoluciones emitidas por el Invima establecen directrices y requerimientos regulatorios para la producción, control de calidad, y comercialización de productos sujetos a vigilancia sanitaria en Colombia.")}
              </p>

              <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                <li>{t("Resolución 1160 de 2016 – Requisitos de Buenas Prácticas de Manufactura (BPM)")}</li>
                <li>{t("Normas relacionadas con productos farmacéuticos, cosméticos y dispositivos médicos")}</li>
                <li>{t("Lineamientos para certificación de BPM y renovación de registros sanitarios")}</li>
                <li>{t("Guías técnicas emitidas por el Invima y adoptadas por la industria")}</li>
              </ul>

              <div className="pt-6">
                <p className="text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                  {t("Puedes consultar las resoluciones y guías técnicas directamente en los sitios oficiales:")}
                </p>
                <ul className="list-disc list-inside pl-4 mt-2 space-y-2 text-blue-600 dark:text-blue-400 text-base font-medium">
                  <li>
                    <a
                      href="https://www.invima.gov.co/normatividad/resoluciones"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Invima – Resoluciones oficiales vigentes
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.invima.gov.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Sitio web del Invima
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

export default ResolucionesInvima;
