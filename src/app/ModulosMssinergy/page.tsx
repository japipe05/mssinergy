


import React from 'react'
import type { Metadata } from "next";
import TopCards from '../components/Dashboards/Analytical/TopCards';
import SalesOverview from '../components/Dashboards/Analytical/SalesOverview';
import VisitSeparation from '../components/Dashboards/Analytical/VisitSeparation';
import ProjectMonth from '../components/Dashboards/Analytical/ProjectMonth';
import Activity from '../components/Dashboards/Analytical/Activity';
import Blog from '../components/Dashboards/Analytical/Blog';
import WebsiteVisit from '../components/Dashboards/Analytical/WebsiteVisit';
import Twitter from '../components/Dashboards/Analytical/Twitter';
import Facebook from '../components/Dashboards/Analytical/Facebook';
import Gmail from '../components/Dashboards/Analytical/Gmail';
import TaskList from '../components/Dashboards/Analytical/TaskList';
import ProfileCard from '../components/Dashboards/Analytical/ProfileCard';
import MyContact from '../components/Dashboards/Analytical/MyContact';
import Feeds from '../components/Dashboards/Analytical/Feed';
import RecentComments from '../components/Dashboards/Analytical/RecentComments';
import RecentChat from '../components/Dashboards/Analytical/RecentChat';
//import '../../utils/i18n';

export const metadata: Metadata = {
  title: "Analytical Dashboard",
  description: "This is a Analytical dashboard page",
};

const samplePage = () => {
  return (
    <>
      
      <div className='grid grid-cols-12 gap-6' >
        {/*<div className="col-span-12">
          <TopCards activeCard={true}/>
        </div>
        <div className='lg:col-span-9 col-span-12'>
          <SalesOverview height="264px" />
        </div>
        <div className='lg:col-span-3 col-span-12'>
           <VisitSeparation/>
        </div>
      
     
        <div className='lg:col-span-6 col-span-12'>
          <ProjectMonth/>
        </div>
        <div className='lg:col-span-6 col-span-12'>
           <Activity height="597px" />
        </div>
      
      
        <div className='lg:col-span-4 col-span-12'>
          <Blog/>
        </div>
        <div className='lg:col-span-8 col-span-12'>
           <WebsiteVisit height="375px" />
        </div>

      
        <div className='lg:col-span-4 col-span-12'>
          <Twitter/>
        </div>
        <div className='lg:col-span-4 col-span-12'>
           <Facebook/>
        </div>
        <div className='lg:col-span-4 col-span-12'>
           <Gmail/>
        </div>
    
      
        <div className='lg:col-span-6 col-span-12'>
          <TaskList height="380px" />
        </div>
        <div className='lg:col-span-6 col-span-12'>
           <ProfileCard/>
        </div>
     
    
        <div className='lg:col-span-6 col-span-12'>
          <MyContact height="470px" />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <Feeds/>
        </div>
     
      
        <div className='lg:col-span-6 col-span-12'>
          <RecentComments/>
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <RecentChat/>
        </div>*/}
        </div>
    


      
    </>
  )
}

export default samplePage
