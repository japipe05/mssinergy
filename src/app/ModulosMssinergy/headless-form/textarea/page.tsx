import type { Metadata } from "next";
import React from "react";
import BasicTextarea from "@/app/components/headless-form/Textarea/BasicTextarea";
import WithLabelTextarea from "@/app/components/headless-form/Textarea/WithLabel";
import WithDescriptionTextarea from "@/app/components/headless-form/Textarea/WithDescriptionTextarea";
import DisableTextarea from "@/app/components/headless-form/Textarea/DisableTextArea";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Headless Form Textarea",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Textarea" />
      <div className="grid grid-cols-12 gap-6">
        <div className="md:col-span-6 col-span-12">
          <BasicTextarea />
        </div>
        <div className="md:col-span-6 col-span-12">
          <WithLabelTextarea />
        </div>
        <div className="md:col-span-6 col-span-12">
          <WithDescriptionTextarea />
        </div>
        <div className="md:col-span-6 col-span-12">
          <DisableTextarea />
        </div>
      </div>
    </>
  );
};

export default page;
