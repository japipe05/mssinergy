import type { Metadata } from "next";
import React from "react";
import BasicComobobox from "@/app/components/headless-form/Combobox/BasicComobobox";
import WithLabel from "@/app/components/headless-form/Combobox/WithLabel";
import DisableCombo from "@/app/components/headless-form/Combobox/Disable";
import DisableComboOption from "@/app/components/headless-form/Combobox/DisableComboOption";
import AllowCustomVal from "@/app/components/headless-form/Combobox/AllowCustomVal";
import ComboPosition from "@/app/components/headless-form/Combobox/ComboPosition";
import ComboWidth from "@/app/components/headless-form/Combobox/ComboWidth";
import WithTransitions from "@/app/components/headless-form/Combobox/WithTransitions";
import WithFramerMotion from "@/app/components/headless-form/Combobox/WithFramerMotion";
import BindingStringAsValue from "@/app/components/headless-form/Combobox/BindingStringAsValue";
import MultipleSelectVal from "@/app/components/headless-form/Combobox/MultipleSelectVal";
import ComboOnFocus from "@/app/components/headless-form/Combobox/ComboOnFocus";
import RenderingCombobox from "@/app/components/headless-form/Combobox/RenderAsDiffElements";
import BindingValues from "@/app/components/headless-form/Combobox/BindingValues";
import ActiveOptionDetails from "@/app/components/headless-form/Combobox/AcrtiveOptionDetails";
import VirtualScrollingCombo from "@/app/components/headless-form/Combobox/VirtualScroll";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";

export const metadata: Metadata = {
  title: "Headless Form Combobox",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Combobox" />
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <BasicComobobox />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <WithLabel />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <DisableCombo />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <DisableComboOption />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <AllowCustomVal />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <ComboPosition />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <ComboWidth />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <WithTransitions />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <WithFramerMotion />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <BindingStringAsValue />
        </div>

        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <ComboOnFocus />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <RenderingCombobox />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <BindingValues />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <ActiveOptionDetails />
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
        <VirtualScrollingCombo/>
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <MultipleSelectVal />
        </div>
      </div>
    </>
  );
};

export default page;
