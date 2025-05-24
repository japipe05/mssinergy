
import React from 'react'
import type { Metadata } from "next";
import TopCards from '@/app/components/Dashboards/Analytical/TopCards';
import MinimalSales from '@/app/components/Dashboards/minimal/MinimalSales';
import Activity from '@/app/components/Dashboards/minimal/Activity';
import ProfileCard from '@/app/components/Dashboards/Analytical/ProfileCard';
import MyContact from '@/app/components/Dashboards/Analytical/MyContact';
import VisitSeparation from '@/app/components/Dashboards/Analytical/VisitSeparation';
import WebsiteVisit from '@/app/components/Dashboards/minimal/WebsiteVisit';
import TaskList from '@/app/components/Dashboards/Analytical/TaskList';
import Blog from '@/app/components/Dashboards/Analytical/Blog';
import ProjectMonth from '@/app/components/Dashboards/minimal/ProjectMonth';




export const metadata: Metadata = {
  title: "Minimal Dashboard",
  description: "This is a Minimal dashboard page",
};

const Minimal = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-6' >
         <div className="col-span-12">
         <MinimalSales/>
         </div>
         <div className="col-span-12">
         <TopCards activeCard={false} />
         </div>
         <div className="col-span-12">
         <ProjectMonth/>
         </div>
         <div className='lg:col-span-7 col-span-12'>
            <Activity/>
         </div>
         <div className='lg:col-span-5 col-span-12' >
           <div className='mb-6'>
           <ProfileCard/>
           </div>
           <MyContact height="205px" />
         </div>
      
     
         <div className='lg:col-span-4 col-span-12'>
            <VisitSeparation/>
         </div>
         <div className='lg:col-span-8 col-span-12' >
            <WebsiteVisit/>
         </div>

     
         <div className='lg:col-span-8 col-span-12'>
            <TaskList height="390px" />
         </div>
         <div className='lg:col-span-4 col-span-12' >
            <Blog/>
         </div>
         </div>
    </>
  )
}

export default Minimal
