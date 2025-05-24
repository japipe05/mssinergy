import Image from "next/image";
import React,{ useState }  from "react";
import bannerWidget1 from "/public/images/landingpage/background/vision1.jpg";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';
const Vision = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="md:py-20 py-12 relative dark:bg-dark" id="demos">
        <div className="container">
          <div className="flex flex-wrap items-center">
            {/* Texto */}
            <div
              className="w-full md:w-7/12 pl-16 pr-16" 
              data-aos-duration="500"
            >
              <h1
                className="text-[36px] leading-none font-bold text-primary mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                Visión
              </h1>
              <p
                className="text-justify leading-7 text-lg font-medium text-body dark:text-darkmuted"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1100"
              >
                {t(
                  "La organización Ms Sinergy SAS, ejecutará para el 2024 la acreditación ante el Organismo Nacional de Acreditación de Colombia “ONAC”. del área de calibraciones obteniendo como ello la integración a nivel nacional e internacional para la prestación del servicio de metrología – magnitud de presión diferencial. El laboratorio de ensayos alinearlo a las metodologías que ONAC requiere para una futura ampliación en el esquema acreditado.")}
              </p>
            </div>
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
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
