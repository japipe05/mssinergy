import type { Metadata } from "next";
import React from "react";
import MainFieldset from "@/app/components/headless-form/Fieldset/MainFieldset";
import DisableFieldset from "@/app/components/headless-form/Fieldset/DisableFieldset";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Headless Form Fieldset",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Fieldset" />
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-6 col-span-12">
          <MainFieldset />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <DisableFieldset />
        </div>
      </div>
    </>
  );
};

export default page;
