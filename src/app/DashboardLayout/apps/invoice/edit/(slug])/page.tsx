import React from 'react'
import CardBox from "@/app/components/shared/CardBox";
import EditInvoicePage from '@/app/components/apps/invoice/Edit-invoice/index';
import { InvoiceProvider } from '@/app/context/InvoiceContext/index';
import type { Metadata } from "next";
import ThemeBreadcrumb from '@/app/DashboardLayout/layout/shared/breadcrumb/ThemeBreadcrumb';
interface Product {
    id: number; // Or string, depending on your API structure
  }
  // This generates static parameters for each dynamic route `[id]`.
  export async function generateStaticParams() {
    // Fetch or define your product IDs here
    const products: Product[] = await fetch("https://api.example.com/products") // Replace with your actual API endpoint
      .then((res) => res.json());
  
    // Return an array of params containing each product ID
    return products.map((product) => ({
      id: product.id.toString(), // Make sure the id is a string
    }));
  }
  
  export const metadata: Metadata = {
  title: "Invoice Edit App",
};
function EditPage({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <InvoiceProvider>
            <ThemeBreadcrumb title="Invoice Edit"  />
            <CardBox>
                <EditInvoicePage data-product-id={id}/>
            </CardBox>
        </InvoiceProvider>
    )
}

export default EditPage;
