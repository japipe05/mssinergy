import React from "react";
import type { Metadata } from "next";
import DefaultDatep from "@/app/components/ui-components/DatePicker/DefaultDatep";
import LocalizationDatep from "@/app/components/ui-components/DatePicker/LocalizationDatep";
import LimitDatep from "@/app/components/ui-components/DatePicker/LimitDatep";
import WeekStart from "@/app/components/ui-components/DatePicker/WeekStart";
import AutoHide from "@/app/components/ui-components/DatePicker/AutoHide";
import TitleDatePicker from "@/app/components/ui-components/DatePicker/TitleDatePicker";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Datepicker",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Datepicker" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default Date Picker*/}
        <div className="lg:col-span-4  col-span-12">
          <DefaultDatep />
        </div>
        {/* Localization Date Picker*/}
        <div className="lg:col-span-4  col-span-12">
          <LocalizationDatep />
        </div>
        {/* Limit Date Picker*/}
        <div className="lg:col-span-4  col-span-12">
          <LimitDatep />
        </div>
        {/* WeekStart Date Picker*/}
        <div className="lg:col-span-4  col-span-12">
          <WeekStart />
        </div>
        {/* Autohide Date Picker*/}
        <div className="lg:col-span-4  col-span-12">
          <AutoHide />
        </div>
        {/* Title Date Picker*/}
        <div className="lg:col-span-4  col-span-12">
          <TitleDatePicker />
        </div>
      </div>
    </>
  );
};

export default page;
