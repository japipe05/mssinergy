import React from "react";
import Image from "next/image";
import bannerWidget1 from "/public/images/landingpage/background/mision.jpg";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';
 
const Mision = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-dark" id="demos">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Imagen */}
          <div
            className="w-full md:w-5/12"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <Image
              src={bannerWidget1}
              alt="Misión Ms Sinergy"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

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
              {t("Misión")}
            </h1>
            <p
              className="text-justify text-base sm:text-lg font-medium leading-7 text-body dark:text-darkmuted"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1100"
            >
              {t(
                "Ms Sinergy SAS, es una organización que direcciona las áreas de metrología (magnitud de presión) y ensayos, en los sectores industriales, farmacéutico, alimentario, hospitalario y veterinario, manteniéndose a la vanguardia de las nuevas tecnologías a través de la implementación de metodologías ágiles con base a una mejora continua en los procesos generando la satisfacción y desarrollo sostenible de sus clientes."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mision;
