"use client"
import React from "react";
import WorldMap from "react-svg-worldmap";
import type { CountryContext, Data } from "react-svg-worldmap";

import CardBox from "../../shared/CardBox";
import { Select } from "flowbite-react";

const TotalVisits = () => {
  // chart color

  const data: Data = [
    { country: "cn", value: 5 }, // China
    { country: "us", value: 10 }, // United States
    { country: "ru", value: 7 }, // Russia
    { country: "in", value: 11 }, // Russia
  ];

  const getStyle = ({
    countryCode,
    color,
  }: CountryContext) => ({
    fill:
      countryCode === "US"
        ? "#1e88e5"
        : countryCode === "IN"
        ? "#21c1d6"
        : countryCode === "RU"
        ? "#7460ee"
        : color,

    stroke: "transparent",
    strokeWidth: 1,
    strokeOpacity: 0.5,
    cursor: "pointer",
  });

  return (
    <>
     <CardBox className="mb-0">
     <div className="md:flex items-center mb-0">
         <div className="card-title">
         <span className="lstick align-middle inline-block bg-primary"></span>
         Total Visit
         </div>
         <div className="ms-auto mt-3 md:mt-0">
           <Select required className="select-md rounded-none ">
               <option className="select-option" >January 2024</option>
               <option className="select-option" >February 2024</option>
               <option className="select-option" >March 2024</option>
               <option className="select-option" >April 2024</option>
           </Select>
         </div>
       </div>
     <div className="mt-5 w-full world-map" >
            <WorldMap
              color="#EAEFF4"
              backgroundColor="#ffffff00"
              valueSuffix="points"
              data={data}
              styleFunction={getStyle}
              size={740}
            />
          </div>
     </CardBox>
    </>
  );
};

export default TotalVisits;