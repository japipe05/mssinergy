import FormCustom from '@/app/components/form-components/FormCustom'
import React from 'react'
import type { Metadata } from "next";
import ThemeBreadcrumb from '../../layout/shared/breadcrumb/ThemeBreadcrumb';
export const metadata: Metadata = {
  title: "Form Custom",
};


const page = () => {
  return (
    <>
        <ThemeBreadcrumb title="Form Custom" />
        <FormCustom/>
    </>
  )
}

export default page