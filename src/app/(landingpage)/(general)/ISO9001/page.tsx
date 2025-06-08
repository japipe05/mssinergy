"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import { ProductProvider } from "@/app/context/Ecommercecontext/index";

const ISO9001 = () => {
  const { t } = useTranslation();

  return (
    <ProductProvider>
      <section className="min-h-screen py-12 px-4 dark:bg-dark">
        <div className="max-w-6xl mx-auto">
          <ThemeBreadcrumb title="ISO 9001" />

          <TitleCard title="ISO 9001">
            <div className="w-full space-y-4" data-aos="fade-up" data-aos-duration="500">
              <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary dark:text-white mb-4 leading-snug">
                {t("Sistema de Gestión de la Calidad - ISO 9001")}
              </h1>

              <p className="text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                {t("La norma ISO 9001 establece los requisitos para un sistema de gestión de la calidad. Es utilizada por organizaciones que buscan garantizar su capacidad para proporcionar productos y servicios que cumplan consistentemente con los requisitos del cliente y los reglamentarios aplicables.")}
              </p>

              <ul className="list-disc list-inside pl-4 space-y-2 text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                <li>{t("Enfoque basado en procesos y mejora continua")}</li>
                <li>{t("Participación del personal y liderazgo organizacional")}</li>
                <li>{t("Gestión del riesgo y toma de decisiones basada en evidencia")}</li>
                <li>{t("Relación beneficiosa con proveedores y partes interesadas")}</li>
              </ul>

              <div className="pt-6">
                <p className="text-base sm:text-lg font-medium leading-7 text-body dark:text-white">
                  {t("Puedes consultar más información en los siguientes enlaces oficiales:")}
                </p>
                <ul className="list-disc list-inside pl-4 mt-2 space-y-2 text-blue-600 dark:text-blue-400 text-base font-medium">
                  <li>
                    <a
                      href="https://www.iso.org/iso-9001-quality-management.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      ISO.org – Información oficial de ISO 9001
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100208.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Descargar PDF de ISO 9001 (versión resumida, ISO.org)
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

export default ISO9001;
