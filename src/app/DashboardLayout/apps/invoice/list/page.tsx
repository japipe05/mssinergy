
import React from 'react'
import CardBox from "@/app/components/shared/CardBox";
import InvoiceList from '@/app/components/apps/invoice/Invoice-list/index'
import { InvoiceProvider } from '@/app/context/InvoiceContext/index';
import type { Metadata } from "next";
import ThemeBreadcrumb from '@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb';
export const metadata: Metadata = {
  title: "Invoice List App",
};

function List() {
    return (
        <InvoiceProvider>
            <ThemeBreadcrumb title="Invoice List"  />
            <CardBox>
                <InvoiceList />
            </CardBox>
        </InvoiceProvider>
    )
}
export default List;
