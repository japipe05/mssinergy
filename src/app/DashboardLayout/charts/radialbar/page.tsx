
import React from "react";
import ApexRadialChart from "@/app/components/charts/ApexRadialBarChart";
import type { Metadata } from "next";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Radial Chart",
  description: "demo",
};
const RadialChart = () => {
  return (
    <>
      <ThemeBreadcrumb title="Chart Apex Radialbar" />
      <ApexRadialChart/>
    </>
  );
};

export default RadialChart;
