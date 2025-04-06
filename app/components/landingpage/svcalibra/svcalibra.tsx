import Image from "next/image";
import React,{ useState }  from "react";
import bannerWidget1 from "/public/images/landingpage/background/banner-widget-c.jpeg";
import bannerWidget2 from "/public/images/landingpage/background/banner-widget-b.jpeg";
import bannerWidget3 from "/public/images/landingpage/background/banner-widget-e.jpeg";
import bannerWidget4 from "/public/images/landingpage/background/calificaicon_isotrmico.jpg";
import bannerWidget5 from "/public/images/landingpage/background/banner-widget-a.jpeg";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';

const svcalibra = () => {

  const [showVideo, setShowVideo] = useState(false);

  const handleButtonClick = () => {
    setShowVideo(!showVideo);
  };
  const closeVideo = () => {
    setShowVideo(false);
  };
  const { t } = useTranslation();
  return (
    <>
<div className="svcalibr dark:bg-dark">
  <div className="container svcalibr-content">
    <div className="w-full flex items-center justify-between">
      <div className="lg:w-8/12 xl:w-5/12 w-full flex items-center">
        <div>
          <h1
            className="mb-4 flex flex-col pb-4 text-[56px] leading-none font-bold svcalibr-title"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          > 
            <span className="text-primary-grediant">{t("Bienvenido A")} </span>
            Ms Sinergy
          </h1>
          <span
            className="leading-9 text-lg font-medium text-body dark:text-darkmuted"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1100"
          >
            {t("Dedicada a la creación de valor a partir del servicio de calificación de equipos isotérmicos y metrología")}
          </span>
          <div className="flex items-center sm:flex-row flex-col gap-3 mt-4 pt-4">
            <a
              href="https://drive.google.com/file/d/1m1n2PevkdquU5eRKAtwb-igtX8e94X05/view?usp=sharing"
              className="btn btn-primary py-3.5 px-12 text-base rounded-pill scroll-link"
              target="_blank"
            >
              {t("Visualizar Catálogo")}
            </a>


            <div className="flex flex-col items-center">
      {/* Botón para mostrar video */}
      <button
        onClick={handleButtonClick}
        className="rounded-full bg-white py-3.5 px-12 shadow-md text-body font-medium text-base"
      >
        {t("Video")}
      </button>

      {/* Modal que se muestra cuando se reproduce el video */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-full max-w-6xl h-auto">
            {/* Botón para cerrar el video */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &#x2715; {/* Este es el símbolo "X" */}
            </button>

            {/* Video */}
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/yzdCYELZ4YI?si=qOMuVCDxmSYGaPs9"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
        
          </div>
          <div className="grid grid-cols-12 mt-12 lg:mb-0">
            <div className="sm:col-span-3 col-span-12 lg:col-span-5">
              <h4 className="mb-3 font-bold text-dark dark:text-white text-[40px]">10+</h4>
              <span className="text-body dark:text-darkmuted textt-sm font-medium" >{t("Clientes")}</span>
            </div>
            <div className="col-sm-3 col-6 col-lg-5">
              <h4 className="mb-3 font-bold text-dark dark:text-white text-[40px]">4+</h4>
              <span className="text-body dark:text-darkmuted textt-sm font-medium text-nowrap" >{t("Clientes")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-full xl:w-6/12 w-full hidden xl:flex items-center">
        <div className="w-full flex gap-6">
          <div className="md:w-4/12">
            <Image
              src={bannerWidget1}
              alt="widget1"
              className="w-full max-w-full rounded-3 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            />
            <Image
              src={bannerWidget3}
              alt="widget1"
              className="w-full max-w-full rounded-3 shadow-xl mt-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            />
            <Image
              src={bannerWidget5}
              alt="widget1"
              className="w-full max-w-full rounded-3 shadow-xl mt-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            />
          </div>
          <div className="md:w-6/12 mt-6">
            <Image
              src={bannerWidget2}
              alt="widget1"
              className="w-full max-w-full rounded-3 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            />
            <Image
              src={bannerWidget4}
              alt="widget1"
              className="w-full max-w-full rounded-3 shadow-xl my-1"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default svcalibra;
