import React from "react";
import Image from "next/image";
import banner from "/public/images/landingpage/background/business-woman-checking-her-mail.png";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';

const Ticket = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary dark:bg-primary py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Texto */}
          <div className="w-full lg:w-6/12">
            <h5 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center lg:text-left mb-6 leading-snug">
              {t("Política de Calidad")}
            </h5>
            <p className="text-white dark:text-darkmuted text-justify text-base sm:text-lg font-medium leading-7">
              {t(
                "Ms Sinergy S.A.S., somos un laboratorio altamente comprometido con la calidad y la excelencia en nuestros servicios. Nos acogemos a las metodologías como: BPM, BPL, BPA Y BPD para garantizar la satisfacción total de nuestros clientes. Adoptamos un enfoque de mejora continua, buscando constantemente optimizar nuestros procesos y servicios para ser más eficientes, efectivos e innovadores. Asimismo, nos comprometemos a cumplir con los lineamientos establecidos por la ISO/IEC 17025:2017 y a seguir las regulaciones impuestas por entes reguladores y organizaciones que otorgan reconocimiento. Contamos con un equipo altamente capacitado y en constante formación, asegurando la competencia profesional en todas las áreas. Buscamos la mejora continua, integrando soluciones avanzadas para optimizar nuestros procesos y servicios. Mantenemos la imparcialidad, confidencialidad e integridad en nuestras operaciones. Nuestro compromiso es ofrecer resultados confiables, precisos en constante mejora, consolidándonos como líderes en la industria."
              )}
            </p>
          </div>

          {/* Imagen */}
          <div className="w-full lg:w-6/12 flex justify-center">
            <Image
              src={banner}
              alt="Política de Calidad"
              className="w-full max-w-md rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
