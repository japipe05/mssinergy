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
           
•	Evaluación del sistema de gestión de calidad –Resolución 1160 –INVIMA. –Informe 45 OMS anexo 9. 
•	Informe de diagnóstico con análisis de necesidades y expectativas de la empresa.
•	Desarrollo de Planes de calificación, calibración y validación.
•	Asesoría continua:
•	Informes de seguimiento y recomendaciones periódicas durante la implementación.
•	Mesas de trabajo con los Stakelhoders

            </p>
          </div>
        </Tabs.Item>
      </Tabs>
    </>
  );
};

export default ProductDesc;
