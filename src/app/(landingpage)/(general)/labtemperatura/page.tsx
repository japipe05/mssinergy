'use client';
import React from "react";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

const servicocalibracion = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen py-12 md:py-20 dark:bg-dark">
      <div className="container mx-auto px-4">
        <ThemeBreadcrumb title={t("Servicio de Calibraciones")} />
        <div className="mt-10 text-center py-10 px-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-primary mb-4">
            {t("Esta sección está en construcción")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t("Estamos trabajando para ofrecerte esta información pronto.")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default servicocalibracion;
