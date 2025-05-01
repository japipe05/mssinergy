import type { Metadata } from "next";
import React from "react";
import InputWithLabel from "@/app/components/headless-form/Input/InputWithLabel";

import InputWithDescription from "@/app/components/headless-form/Input/InputWithDescription";
import DisabledInput from "@/app/components/headless-form/Input/DisableInput";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
import RoundedInputWithLabel from "@/app/components/headless-form/Input/RoundedInputWithLabel";

export const metadata: Metadata = {
  title: "Headless Form input",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="input"  />
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-6 col-span-12">
          <InputWithLabel />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <RoundedInputWithLabel />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <InputWithDescription />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <DisabledInput />
        </div>
      </div>
    </>
  );
};

export default page;
