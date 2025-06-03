import React from "react";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';

const Footer = () => {
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
        <div className="flex justify-center md:justify-start gap-6 mb-6">
          <a href="#" aria-label="Facebook" className="text-dark dark:text-darkmuted hover:text-primary text-xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-dark dark:text-darkmuted hover:text-primary text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter" className="text-dark dark:text-darkmuted hover:text-primary text-xl">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <p className="text-lg font-medium leading-7 text-body dark:text-darkmuted">
          © {new Date().getFullYear()} {t("copyright todos los derechos reservados")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
