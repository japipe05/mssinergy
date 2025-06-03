import Image from "next/image";
import React from "react";
import bannerWidget1 from "/public/images/landingpage/background/vision1.jpg";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';

const Vision = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-dark" id="vision">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Texto */}
          <div
            className="w-full md:w-7/12"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h1
              className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary mb-4 leading-snug"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {t("Visión")}
            </h1>
            <p
              className="text-justify text-base sm:text-lg font-medium leading-7 text-body dark:text-darkmuted"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1100"
            >
              {t(
                "La organización Ms Sinergy SAS, ejecutará para el 2024 la acreditación ante el Organismo Nacional de Acreditación de Colombia “ONAC”. Del área de calibraciones, obteniendo como ello la integración a nivel nacional e internacional para la prestación del servicio de metrología – magnitud de presión diferencial. El laboratorio de ensayos debe alinearlo a las metodologías que “ONAC” requiere para una futura ampliación en el esquema acreditado."
              )}
            </p>
          </div>

          {/* Imagen */}
          <div
            className="w-full md:w-5/12"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <Image
              src={bannerWidget1}
              alt="Visión Ms Sinergy"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
