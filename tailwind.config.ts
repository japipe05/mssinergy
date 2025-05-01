import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
const config: Config = {
  content: [
    "./src/app/css/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Flowbite content
    flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow: {
        md: "0px 1px 4px 0px rgba(133, 146, 173, 0.2)",
        lg: "0 1rem 3rem rgba(0, 0, 0, 0.175)",
        "dark-md":
          "rgba(145, 158, 171, 0.3) 0px 0px 2px 0px, rgba(145, 158, 171, 0.02) 0px 12px 24px -4px",
        sm: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
        "btn-shadow": "box-shadow: rgba(0, 0, 0, .05) 0 9px 17.5px",
        xl:"0 5px 80px -24px rgba(73,177,88,1)",
      },
      borderRadius: {
        sm: "7px",
        md: "9px",
        lg: "24px",
        tw: "12px",
      },
      fontSize: {
        "21":"21px"
      },
      container: {
        center: true,
        padding: "20px",
      },
     width: {
          "128": '21.875rem',
          "130":"240px",
          "132":"360px",
      },
      margin:{
         "30px":"30px",
         "18px":"18px"
      },
      spacing: {
        '30px': '30px',
      },
      zIndex: {
        '5': '5',
        "1": "1",
      },
      colors: {
        cyan: {
          "500": "var(--color-primary)",
          "600": "var(--color-primary)",
          "700": "var(--color-primary)",
        },
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        info: "var(--color-info)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        lightprimary: "var(--color-lightprimary)",
        lightsecondary: "var(--color-lightsecondary)",
        lightsuccess: "var( --color-lightsuccess)",
        lighterror: "var(--color-lighterror)",
        lightinfo: "var(--color-lightinfo)",
        lightwarning: "var(--color-lightwarning)",
        lightindigo:"var(--color-lightindigo)",
        border: "var(--color-border)",
        bordergray: "var(--color-bordergray)",
        lightgray: "var( --color-lightgray)",
        muted: "var( --color-muted)",
        heading:"var(--color-heading)",
        indigo:"var(--color-indigo)",
        graysubtle:"var(--color-graysubtle)",
        lightsubtle:"var(--color-lightsubtle)",
        lightemphasis:"var(--color-light-emphasis)",
        graylight:"var(--color-graylight)",
        body:"var(--color-body)",
        subtlewhite:"var(--color-subtlewhite)",
        lightbg:"var(--color-lightbg)",
        infoemphasis: "var(--color-info-emphasis)",
        bodyclr: "var(--color-bodyclr)",

        //Dark Colors Variables
        dark: "var(--color-dark)",
        link: "var(--color-link)",
        darklink: "var(--color-darklink)",
        darkborder: "var(--color-darkborder)",
        darkgray: "var(--color-darkgray)",
        primaryemphasis: "var(--color-primary-emphasis)",
        secondaryemphasis: "var(--color-secondary-emphasis)",
        warningemphasis: "var(--color-warning-emphasis)",
        erroremphasis: "var(--color-error-emphasis)",
        successemphasis: "var(--color-success-emphasis)",
        darkmuted: "var( --color-darkmuted)",
        darksubtle:"var(--color-darksubtle)",
        darkbody:"var(--color-darkbody)",
      },
    },
  },
  plugins: [
    //Add Flowbite Plugin
    require("flowbite/plugin"),
  ],
};
export default config;
