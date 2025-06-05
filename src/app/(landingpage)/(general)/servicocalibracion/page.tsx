'use client';
import React from "react";
import TitleCard from "@/app/components/shared/TitleBorderCard";
import ThemeBreadcrumb from "@/app/components/landingpage/layout/shared/breadcrumb/ThemeBreadcrumb";
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
const tableData = [
  {
    item: 1,
    codigo: "DG8",
    magnitud: "Presión",
    sede: "Carrera 7 Este 1A-32 Interior 1",
    intervalo: "0 Pa ≤ p ≤ 996 Pa, 0 inH2O ≤ p ≤ 4 inH2O",
    instrumento: "Manómetro de presión diferencial (digitales - analógicos - transmisores) clase de exactitud ≥ ± 0,5 % de escala completa",
    incertidumbre: "1,0 Pa (0,0041 inH2O)",
    patrones: "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
    documento: "Directriz DKD R-6-1 Calibración de Instrumentos Medidores de Presión Edición 03/2014 Revisión 3. Excepto Numeral 8.5",
    metodo: "Comparación directa",
    personal: "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
    duracion: "0:35:00",
  },
  {
    item: 2,
    codigo: "DG8",
    magnitud: "Presión",
    sede: "In situ",
    intervalo: "0 Pa ≤ p ≤ 996 Pa, 0 inH2O ≤ p ≤ 4 inH2O",
    instrumento: "Manómetro de presión diferencial (digitales - analógicos - transmisores) clase de exactitud ≥ ± 0,5 % de escala completa",
    incertidumbre: "1,0 Pa (0,0041 inH2O)",
    patrones: "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
    documento: "Directriz DKD R-6-1 Calibración de Instrumentos Medidores de Presión Edición 03/2014 Revisión 3. Excepto Numeral 8.5",
    metodo: "Comparación directa",
    personal: "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
    duracion: "0:35:00",
  },
  {
    item: 3,
    codigo: "DG8",
    magnitud: "Presión",
    sede: "Carrera 7 Este 1A-32 Interior 1",
    intervalo: "0 Pa ≤ p ≤ 50 Pa, 0 inH2O ≤ p ≤ 0,2 inH2O",
    instrumento: "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
    incertidumbre: "1,1 Pa (0,0045 inH2O)",
    patrones: "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
    documento: "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
    metodo: "Comparación directa",
    personal: "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
    duracion: "0:50:00",
  },
  {
    item: 4,
    codigo: "DG8",
    magnitud: "Presión",
    sede: "Carrera 7 Este 1A-32 Interior 2",
    intervalo: "50 Pa < p ≤ 124 Pa, 0,2 inH2O < p ≤ 0,5 inH2O",
    instrumento: "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
    incertidumbre: "1,8 Pa (0,0072 inH2O)",
    patrones: "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
    documento: "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
    metodo: "Comparación directa",
    personal: "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
    duracion: "0:50:00",
  },
  {
    item: 5,
    codigo: "DG8",
    magnitud: "Presión",
    sede: "Carrera 7 Este 1A-32 Interior 3",
    intervalo: "124 Pa < p ≤ 747 Pa, 0,5 inH2O < p ≤ 3 inH2O",
    instrumento: "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
    incertidumbre: "3,0 Pa (0,012 inH2O)",
    patrones: "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
    documento: "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
    metodo: "Comparación directa",
    personal: "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
    duracion: "0:50:00",
  },
  {
    item: 6,
    codigo: "DG8",
    magnitud: "Presión",
    sede: "In situ",
    intervalo: "0 Pa ≤ p ≤ 50 Pa, 0 inH2O ≤ p ≤ 0,2 inH2O",
    instrumento: "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
    incertidumbre: "1,1 Pa (0,0046 inH2O)",
    patrones: "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
    documento: "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
    metodo: "Comparación directa",
    personal: "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
    duracion: "0:50:00",
  },
  {
    item: 7,
    codigo: "DG8",
    magnitud: "Presión",
    sede: "In situ",
    intervalo: "50 Pa < p ≤ 124 Pa, 0,2 inH2O < p ≤ 0,5 inH2O",
    instrumento: "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
    incertidumbre: "1,8 Pa (0,0073 inH2O)",
    patrones: "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
    documento: "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
    metodo: "Comparación directa",
    personal: "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
    duracion: "0:50:00",
  },
  {
    item: 8,
    codigo: "DG8",
    magnitud: "Presión",
    sede: "In situ",
    intervalo: "124 Pa < p ≤ 747 Pa, 0,5 inH2O < p ≤ 3 inH2O",
    instrumento: "Manómetros de columna de líquido clase de exactitud ≥ ± 3 % de escala completa",
    incertidumbre: "3,0 Pa (0,012 inH2O)",
    patrones: "Manómetros digitales de presión diferencial, Clase de exactitud ± 0,5 % de escala completa",
    documento: "Procedimiento ME-021 para la calibración de columnas de líquido manométricas y barométricas Centro español de metrología Edición digital 2. 2020",
    metodo: "Comparación directa",
    personal: "Jhon Alexander Ortiz Preciado, José Luis Rodriguez Roa",
    duracion: "0:50:00",
  }
];


const servicocalibracion = () => {
  const { t } = useTranslation();
  return (
    
      <section className="min-h-screen py-12 md:py-20 dark:bg-dark">
      <div className="container mx-auto px-4">
        <ThemeBreadcrumb title={t("Servicio de Calibraciones")} />
        <TitleCard title={t("Laboratorio de Presión Diferencial")}
          className="dark:bg-gray-900">
          <p className="text-base sm:text-lg font-medium text-body text-justify">
            {t("Ms Sinergy ofrece el servicio en esta variable para calibración de manómetro digital, manómetro analógico, transmisor de presión y columna de líquido con un alcance de medición desde 0 inH2O hasta 4 inH2O.")}
          </p>
        </TitleCard>

        <div className="mt-10 overflow-x-auto rounded-lg border  dark:border-gray-700  dark:bg-gray-900">
          <table className="w-full min-w-[1024px] text-sm text-left whitespace-nowrap text-gray-600 ">
            <thead className=" dark:bg-gray-800 text-xs uppercase text-gray-700 ">
              <tr>
                <th className="px-4 py-2">{t("Item")}</th>
                <th className="px-4 py-2">{t("Código")}</th>
                <th className="px-4 py-2">{t("Magnitud")}</th>
                <th className="px-4 py-2">{t("Sede")}</th>
                <th className="px-4 py-2">{t("Intervalo de medición")}</th>
                <th className="px-4 py-2">{t("Instrumento a calibrar")}</th>
                <th className="px-4 py-2">{t("Incertidumbre")}</th>
                <th className="px-4 py-2">{t("Instrumentos/Patrones")}</th>
                <th className="px-4 py-2">{t("Documento normativo")}</th>
                <th className="px-4 py-2">{t("Método")}</th>
                <th className="px-4 py-2">{t("Personal")}</th>
                <th className="px-4 py-2">{t("Duración")}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b  dark:border-gray-700">
                  <td className="px-4 py-2">{row.item}</td>
                  <td className="px-4 py-2">{t(row.codigo)}</td>
                  <td className="px-4 py-2">{t(row.magnitud)}</td>
                  <td className="px-4 py-2">{t(row.sede)}</td>
                  <td className="px-4 py-2">{t(row.intervalo)}</td>
                  <td className="px-4 py-2">{t(row.instrumento)}</td>
                  <td className="px-4 py-2">{t(row.incertidumbre)}</td>
                  <td className="px-4 py-2">{t(row.patrones)}</td>
                  <td className="px-4 py-2">{t(row.documento)}</td>
                  <td className="px-4 py-2">{t(row.metodo)}</td>
                  <td className="px-4 py-2">{t(row.personal)}</td>
                  <td className="px-4 py-2">{t(row.duracion)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default servicocalibracion;

