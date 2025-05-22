

import CardBox from '@/app/components/shared/CardBox';
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Page",
  description: "This is a sample page",
};

const samplePage = () => {
  return (
    <CardBox>
        this is sample page
    </CardBox>
  )
}

export default samplePage
