import React from "react";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';
const Timeline = () => {
  const { t } = useTranslation();

  const timelineData = [
    { year: "2020", description: t("Inicio de actividades con calificaciones y ensayos.")},
    { year: "2021", description: t("Expansión de servicios en el territorio nacional.") },
    { year: "2022", description: t("Inicio de la calificación de vehículos de transporte en cadena de frío.") },
    { year: "2023", description: t("Calificación de equipos de producción.") },
    { year: "2024", description: t("Proyección de proceso de acreditación en calibración de equipos de diferencial de presión.") },
    { year: "2025", description: t("Proyección del proceso de acreditación en magnitud de temperatura y humedad relativa.") },
  ];

  return (
    <div className="bg-gray-100 dark:bg-dark py-12 font-sans" id="lineatiempo">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-darkhead dark:text-white">
          {t("Línea del Tiempo")}
        </h2>

        <div className="flex flex-col gap-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`w-full md:w-10/12 mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border-l-4 border-primary ${
                index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{item.year}</h3>
              <p className="text-justify text-lg font-medium text-body dark:text-darkmuted leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
