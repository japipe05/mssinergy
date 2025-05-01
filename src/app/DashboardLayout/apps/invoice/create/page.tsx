
import React from "react";
import type { Metadata } from "next";
import CreateInvoiceApp from "@/app/components/apps/invoice/Add-invoice";
import ThemeBreadcrumb from "@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Invoice Create App",
};

function CreateList() {
  return (
    <>
      <ThemeBreadcrumb title=" Create A New Invoice " />
      <CreateInvoiceApp />
    </>
  );
}
export default CreateList;
