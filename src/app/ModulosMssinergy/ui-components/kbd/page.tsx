import React from "react";
import type { Metadata } from "next";
import DefaultKbd from "@/app/components/ui-components/Kbd/DefaultKbd";
import InsideText from "@/app/components/ui-components/Kbd/InsideText";
import InsideTable from "@/app/components/ui-components/Kbd/InsideTable";
import ArrowKeys from "@/app/components/ui-components/Kbd/ArrowKeys";
import FunctionKeys from "@/app/components/ui-components/Kbd/FunctionKeys";
import LetterKeys from "@/app/components/ui-components/Kbd/LetterKeys";
import NumbersKeys from "@/app/components/ui-components/Kbd/NumbersKeys";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui KBD",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="KBD"  />
      <div className="grid grid-cols-12 gap-6">
        {/* Default KBD*/}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <DefaultKbd />
        </div>
        {/* Inside Text KBD*/}
        <div className="lg:col-span-6 md:col-span-6 col-span-12">
          <InsideText />
        </div>
        {/* Inside Table KBD*/}
        <div className="col-span-12">
          <InsideTable />
        </div>
        {/* Arrow Keys KBD*/}
        <div className="lg:col-span-3 md:col-span-5 col-span-12">
          <ArrowKeys />
        </div>
        {/* Function Keys KBD*/}
        <div className="lg:col-span-9 md:col-span-7 col-span-12">
          <FunctionKeys />
        </div>
        {/* Letter Keys KBD*/}
        <div className="col-span-12">
          <LetterKeys />
        </div>
        {/* Numbers Keys KBD*/}
        <div className="col-span-12">
          <NumbersKeys />
        </div>
      </div>
    </>
  );
};

export default page;
