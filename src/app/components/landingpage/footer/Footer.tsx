import React from "react";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';
import Image from "next/image";

const Footer = () => {
  console.log("NEXT_PUBLIC_VERSION:"+process.env.NEXT_PUBLIC_FECHMOD)
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-dark py-12 font-sans center">
      <div className="container mx-auto px-4 text-center">

        <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary mb-6 leading-snug">
          {t("Contáctanos")}
        </h3>

        <div className="flex flex-col items-center gap-y-2 mb-6">

          <p className="text-lg font-medium leading-7 text-body dark:text-darkmuted text-justify">
            <a href="mailto:ventas@mssinergy.com" className="hover:underline hover:text-primary">
              ventas@mssinergy.com
            </a>
          </p>

          <p className="text-lg font-medium leading-7 text-body dark:text-darkmuted text-justify">
            Carrera 7 Este 1a-32 Int 1
          </p>

          <p className="text-lg font-medium leading-7 text-body dark:text-darkmuted text-justify">
            Tel: <span className="font-semibold">(601) 4660361</span>
          </p>

          <p className="text-lg font-medium leading-7 text-body dark:text-darkmuted text-justify">
            {t("Llamar a")}{" "}
            <a href="tel:3212603288" className="font-semibold hover:underline hover:text-primary">
              +57 3212603288
            </a>
          </p>

          <p className="text-lg font-medium leading-7 text-body dark:text-darkmuted text-justify">
            {t("Llamar a")}{" "}
            <a href="tel:3017310936" className="font-semibold hover:underline hover:text-primary">
              +57 3017310936
            </a>
          </p>

          <p className="text-lg font-medium leading-7 text-body dark:text-darkmuted text-justify">
            Bogotá D.C. - Colombia
          </p>
        </div>

        {/* Redes */}


        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.facebook.com/profile.php?id=100068946862067"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/svgs/facebook-icon.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="hover:opacity-75"
            />
          </a>

          <a
            href="https://www.instagram.com/ms_sinergy_oficial_"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
              alt="Instagram"
              width={24}
              height={24}
              className="hover:opacity-75"
            />
          </a>

          <a
            href="https://x.com/MsSinergy"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
              alt="Twitter"
              width={24}
              height={24}
              className="hover:opacity-75"
            />
          </a>
        </div>



        <p className="text-lg font-medium leading-7 text-body dark:text-darkmuted">
          © {new Date().getFullYear()} {t("copyright todos los derechos reservados")}
          {" "}– v1
        </p>

      </div>
    </footer>
  );
};

export default Footer;
