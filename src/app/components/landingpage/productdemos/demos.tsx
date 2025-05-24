import React from "react";
import Image from "next/image";
import bannerWidget1 from "/public/images/landingpage/background/mision.jpg";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';
const ProductDemos = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="md:py-20 py-12 relative dark:bg-dark" id="demos">
        <div className="container">
          <div className="flex flex-wrap items-center">
            {/* Imagen */}
            <div
              className="w-full md:w-5/12 mb-6 md:mb-0"
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <Image
                src={bannerWidget1}
                alt="Misión Ms Sinergy"
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* Texto */}
            <div
              className="w-full md:w-7/12 pl-16 pr-16" // Incrementado el espacio a 12 unidades
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <h1
                className="text-[36px] leading-none font-bold text-primary mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                Misión
              </h1>
              <p
                className="text-justify leading-7 text-lg font-medium text-body dark:text-darkmuted"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1100"
              >
                {t(
                  "Ms Sinergy SAS, es una organización que direcciona las áreas de metrología (magnitud de presión) y ensayos, en los sectores industriales, farmacéutico, alimentario, hospitalario y veterinario, manteniéndose a la vanguardia de las nuevas tecnologías a través de la implementación de metodologías ágiles con base a una mejora continua en los procesos generando la satisfacción y desarrollo sostenible de sus clientes"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDemos;
