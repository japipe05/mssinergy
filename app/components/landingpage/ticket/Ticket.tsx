import React from "react";
import Image from "next/image";
import banner from "/public/images/landingpage/background/business-woman-checking-her-mail.png";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';
const Ticket = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-primary dark:bg-primary">
      <div className="container ">
       <div className="flex justify-between relative py-12">
       <div className="lg:w-5/12 w-full lg:pt-12 px-2">
            <h5 className="text-3xl leading-8 font-medium text-white text-center lg:text-start mb-[30px]">
            {t(
                  "Politica de Calidad")}
            </h5>
            <p className="leading-7 text-lg font-medium text-white dark:text-darkmuted">
            {t(
                  "Ms Sinergy S.A.S., somos un laboratorio altamente comprometido con la calidad y la excelencia en nuestros servicios. Nos acogemos a las metodologías como: BPM, BPL, BPA Y BPD para garantizar la satisfacción total de nuestros clientes. Adoptamos un enfoque de mejora continua, buscando constantemente optimizar nuestros procesos y servicios para ser más eficientes, efectivos e innovadores. Asimismo, nos comprometemos a cumplir con los lineamientos establecidos por la ISO/IEC 17025:2017 y a seguir las regulaciones impuestas por entes reguladores y organizaciones que otorgan reconocimiento. Contamos con un equipo altamente capacitado y en constante formación, asegurando la competencia profesional en todas las áreas. Buscamos la mejora continua, integrando soluciones avanzadas para optimizar nuestros procesos y servicios. Mantenemos la imparcialidad, confidencialidad e integridad en nuestras operaciones. Nuestro compromiso es ofrecer resultados confiables, precisos en constante mejora, consolidándonos como líderes en la industria.")}
            </p>

        </div>
          <div className="lg:absolute relative md:end-0 lg:-end-6 md:-bottom-[14px] mx-auto">
            <Image src={banner} alt="banner" className="w-full mx-auto " />
          </div>
       </div>
      </div>
    </div>
  );
};

export default Ticket;
