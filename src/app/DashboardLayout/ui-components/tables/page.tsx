import React from "react";
import type { Metadata } from "next";
import DefaultTable from "@/app/components/ui-components/Table/DefaultTable";
import StrippedTable from "@/app/components/ui-components/Table/StrippedTable";
import TableHover from "@/app/components/ui-components/Table/TableHover";
import TableWithCheckbox from "@/app/components/ui-components/Table/TableWithCheckbox";
import ThemeBreadcrumb from "../../layout/shared/breadcrumb/ThemeBreadcrumb";
export const metadata: Metadata = {
  title: "Ui Table",
};

const page = () => {
  return (
    <>
      <ThemeBreadcrumb title="Tables" />
      <div className="grid grid-cols-12 gap-6">
        {/* Default */}
        <div className="col-span-12">
          <DefaultTable/>
        </div>
         {/* Stripped Table */}
         <div className="col-span-12">
          <StrippedTable/>
        </div>
        {/* Table Hover */}
        <div className="col-span-12">
          <TableHover/>
        </div>
        {/* Table With Checkbox */}
        <div className="col-span-12">
          <TableWithCheckbox/>
        </div>
      </div>
    </>
  );
};

export default page;
