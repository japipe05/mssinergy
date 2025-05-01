"use client";
import OutlineCard from "@/app/components/shared/OutlineCard";
import { IconPencil } from "@tabler/icons-react";
import { Button, Progress, Rating, Tabs } from "flowbite-react";
import React from "react";
const ProductDesc = () => {
  return (
    <>
      <Tabs aria-label="Tabs with underline" variant="underline">
        <Tabs.Item active title="Discription">
          <div className="py-4">
            <p className="text-sm text-bodyclr dark:text-darkmuted mb-6 font-medium">
            Laboratorio de Presión diferencial: Ms Sinergy ofrece el servicio en esta variable
            para calibración Manómetro digital, manómetro analógico transmisor de presión y 
            columna de líquido con un alcance de medición desde 0 inH2O hasta 4inH2O.
            </p>
          </div>
        </Tabs.Item>
      </Tabs>
    </>
  );
};

export default ProductDesc;
