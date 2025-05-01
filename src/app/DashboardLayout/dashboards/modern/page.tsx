
import React from 'react'
import type { Metadata } from "next";
import TopCards from '@/app/components/Dashboards/Analytical/TopCards';
import MonthlyOverview from '@/app/components/Dashboards/modern/MonthlyOverview';
import SalesOverview from '@/app/components/Dashboards/modern/SalesOverview';
import TotalVisits from '@/app/components/Dashboards/modern/TotalVisits';
import BrowserStats from '@/app/components/Dashboards/modern/BrowserStats';
import ProjectMonth from '@/app/components/Dashboards/Analytical/ProjectMonth';
import Activity from '@/app/components/Dashboards/Analytical/Activity';


export const metadata: Metadata = {
  title: "Modern Dashboard",
  description: "This is a Modern dashboard page",
};

const Modern = () => {
  return (
    <>
      
      <div className='grid grid-cols-12 gap-6' >
        <div className='col-span-12' >
        <TopCards activeCard={true}/>
          </div>
         <div className='lg:col-span-6 col-span-12'>
           <SalesOverview/>
         </div>
         <div className='lg:col-span-6 col-span-12' >
         <MonthlyOverview height='345px' />
         </div>
         <div className='lg:col-span-8 col-span-12'>
           <TotalVisits/>
         </div>
         <div className='lg:col-span-4 col-span-12' >
           <BrowserStats/>
         </div>
      
         <div className='lg:col-span-6 col-span-12'>
           <ProjectMonth/>
         </div>
         <div className='lg:col-span-6 col-span-12' >
           <Activity height="596px" />
         </div>
         </div>
    </>
  )
}

export default Modern
