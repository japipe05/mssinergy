import type { Metadata } from "next";
import React from "react";
import WithLable from "@/app/components/headless-form/Checkbox/WithLable";
import WithDescription from "@/app/components/headless-form/Checkbox/WithDescription";
import DisableCheckBox from "@/app/components/headless-form/Checkbox/DisableCheckBox";
import UsingHtmlForm from "@/app/components/headless-form/Checkbox/UsingHtmlForm";
import UsingUncontrolled from "@/app/components/headless-form/Checkbox/UsingUnctrolled";
import TransitionCheckbox from "@/app/components/headless-form/Checkbox/TransitionCheckbox";
import RenderAsDiv from "@/app/components/headless-form/Checkbox/RenderAsDiv";
import RenderAsProps from "@/app/components/headless-form/Checkbox/RenderAsProps";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Headless Form Checkbox",
};


const page = () => {
  return (
    <div>
      <ThemeBreadcrumb title="Checkbox" />
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <WithLable />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <WithDescription />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <DisableCheckBox />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <UsingHtmlForm />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <UsingUncontrolled />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <TransitionCheckbox />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <RenderAsDiv />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <RenderAsProps />
        </div>
      </div>
    </div>
  );
};

export default page;