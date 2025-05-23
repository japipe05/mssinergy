
import React from 'react'
import type { Metadata } from "next";
import TopCards from '@/app/components/Dashboards/Demographical/TopCards';
import SalesOverview from '@/app/components/Dashboards/Analytical/SalesOverview';
import Blog from '@/app/components/Dashboards/Analytical/Blog';
import VisitSeparation from '@/app/components/Dashboards/Analytical/VisitSeparation';
import Gmail from '@/app/components/Dashboards/Analytical/Gmail';
import Facebook from '@/app/components/Dashboards/Analytical/Facebook';
import Twitter from '@/app/components/Dashboards/Analytical/Twitter';
import WebsiteVisit from '@/app/components/Dashboards/Analytical/WebsiteVisit';
import ProjectMonth from '@/app/components/Dashboards/Analytical/ProjectMonth';
import Activity from '@/app/components/Dashboards/Analytical/Activity';
import RecentComments from '@/app/components/Dashboards/Analytical/RecentComments';
import RecentChat from '@/app/components/Dashboards/Analytical/RecentChat';


export const metadata: Metadata = {
  title: "Demographical Dashboard",
  description: "This is a Demographical dashboard page",
};

const samplePage = () => {
  return (
    <>
      
      <div className='grid grid-cols-12 gap-6' >
        <div className=' col-span-12'>
        <TopCards/>
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <SalesOverview height="260px" />
        </div>
        <div className='lg:col-span-3 col-span-12'>
           <Blog/>
        </div>
        <div className='lg:col-span-3 col-span-12'>
           <VisitSeparation/>
        </div>
        
      
        <div className='lg:col-span-4 col-span-12'>
           <div className='mb-6' >
           <Gmail /> </div>         
          <div className='mb-6'>
          <Facebook />
          </div>
          <Twitter />
        </div>
        <div className='lg:col-span-8 col-span-12'>
          <WebsiteVisit height="388px" />
        </div>
      
      
        <div className='lg:col-span-6 col-span-12'>
          <ProjectMonth/>
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <Activity height="595px" />
        </div>
       
      
        <div className='lg:col-span-6 col-span-12'>
          <RecentComments/>
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <RecentChat/>
        </div>
        </div>
    </>
  )
}

export default samplePage
