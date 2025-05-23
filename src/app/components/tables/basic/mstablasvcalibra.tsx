"use client";
import { Badge, Table } from "flowbite-react";
import React from "react";
import {pressureTableData} from "../mstabladatasvcalibra";
import Image from "next/image";
import CardBox from "@/app/components/shared/CardBox";
import ProductDesc from "@/app/components/apps/servicios/productDetail/ProductDesc";

const BasicTable1 = () => {

  return (
    <>

     {/* Description Tabs Products */}
     <CardBox className="mt-[30px] pt-2">
          <ProductDesc />
        </CardBox>
{/* Description Tabs Products */}
      <div className="border rounded-md border-border dark:border-darkborder overflow-x-auto">
        <Table className="">
          <Table.Head>
            <Table.HeadCell className="text-base font-semibold py-3">
              Item
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Código (1)
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Magnitud (2)
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Sede (3)
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Intervalo de medición (4)	
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Instrumento a calibrar (5)
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Incertidumbre expandida de medida (6)
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Instrumentos, equipos patrones utilizados (7)
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Documento normativo (8) 
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Método de calibración (9)
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Personal autorizado (10)
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Duración de la calibración (11) (hh:mm:ss)
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y divide-border dark:divide-darkborder ">
            {pressureTableData.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.item}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.codigo}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.magnitud}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.sede}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.intervalo}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.instrumento}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.incertidumbre}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.utilizados}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.documento}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.metodo}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.personal}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodyclr dark:text-darkmuted text-base">{item.duracion}</p>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default BasicTable1;
