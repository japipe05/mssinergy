import React from "react";
import { useTranslation } from "react-i18next";
import '../../../../utils/i18n';
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer dark:bg-dark py-8">

      <div className="container mx-auto text-center">
        
        <h3 className="text-[24px] font-bold text-primary-grediant mb-4">
          {t("Contáctanos")}
        </h3>
        <p className="leading-7 text-lg font-medium text-body dark:text-darkmuted">
  <a href="mailto:ventas@mssinergy.com" className="hover:text-primary">
    ventas@mssinergy.com
  </a>
</p>

        <p className="leading-7 text-lg font-medium text-body dark:text-darkmuted">
          Carrera 7 Este 1a-32 Int 1
        </p>
        <p className="leading-7 text-lg font-medium text-body dark:text-darkmuted">
          Tel: <span className="font-medium">(601) 4660361</span>
        </p>
        <p className="leading-7 text-lg font-medium text-body dark:text-darkmuted">
          {t("Llamar a")}
          <a href="tel:3212603288" ><strong>+57 3212603288</strong></a>
        </p>
        <p className="leading-7 text-lg font-medium text-body dark:text-darkmuted">
          {t("Llamar a")} 
          <a href="tel:3017310936" ><strong>+57 3017310936</strong></a>
        </p>
        <p className="leading-7 text-lg font-medium text-body dark:text-darkmuted">
          Bogotá D.C. - Colombia
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#"
            aria-label="Facebook"
            className="text-dark hover:text-primary-grediant"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-dark hover:text-primary-grediant"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-dark hover:text-primary-grediant"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>

        <p className="leading-7 text-lg font-medium text-body dark:text-darkmuted">
          © {new Date().getFullYear()}  {t("copyright todos los derechos reservados")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
