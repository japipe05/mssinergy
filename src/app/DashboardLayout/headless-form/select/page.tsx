import type { Metadata } from "next";
import React from "react";
import BasicSelect from "@/app/components/headless-form/Select/BasicSelect";
import WithLabelSelect from "@/app/components/headless-form/Select/WithLabelSelect";
import WithDescriptionSelect from "@/app/components/headless-form/Select/WithDescriptionSelect";
import DisabledSelect from "@/app/components/headless-form/Select/DisableSelect";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Headless Form Select",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Select" />
      <div className="grid grid-cols-12 gap-6">
        <div className="md:col-span-6 col-span-12">
          <BasicSelect />
        </div>
        <div className="md:col-span-6 col-span-12">
          <WithLabelSelect />
        </div>
        <div className="md:col-span-6 col-span-12">
          <WithDescriptionSelect />
        </div>
        <div className="md:col-span-6 col-span-12">
          <DisabledSelect />
        </div>
      </div>
    </>
  );
};

export default page;
