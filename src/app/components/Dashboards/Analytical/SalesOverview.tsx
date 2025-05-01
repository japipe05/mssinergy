"use client";
import { Select } from "flowbite-react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CardBox from "../../shared/CardBox";
interface SalesOverviewProps{
  height:string
}

const SalesOverview: React.FC<SalesOverviewProps> = ({height}) => {
   const ChartData: any = {
       series: [
        {
          name: "Total Sales",
          data: [30, 150, 110, 240, 180, 100, 150],
        },
        {
          name: "This Month",
          data: [100, 50, 130, 70, 135, 80, 240],
        },
       ],
   
       chart: {
        height: 350,
        type: "area",
        foreColor: "#adb0bb",
        fontFamily: "inherit",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["var(--color-success)", "var(--color-primary)"],
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0,
          inverseColors: false,
          opacityFrom: 0.1,
          opacity: 0.7,
          stops: [100],
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      markers: {
        size: 3,
        strokeColors: "transparent",
      },
      grid: {
        show: true,
        borderColor: "rgba(0,0,0,.1)",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        tickAmount: "16",
        tickPlacement: "on",
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "rgba(0,0,0,0.5)",
          height: 6,
          offsetX: 0,
          offsetY: 0,
        },
        axisBorder: {
          show: false
        },
      },
      yaxis: {
        min: 0,
        max: 300,
        tickAmount: 5,
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: "dark",
      },
     };
 return (
  <div className="mb-0">
   <CardBox className="p-0">
        <div className="p-6">
        <div className="md:flex items-center mb-4">
         <div className="card-title">
         <span className="lstick align-middle inline-block bg-primary"></span>
         Sales Overview
         </div>
         <div className="ms-auto mt-3 md:mt-0">
           <Select required className="select-md rounded-none ">
               <option className="select-option" >January 2024</option>
               <option className="select-option" >February 2024</option>
               <option className="select-option" >March 2024</option>
               <option className="select-option" >April 2024</option>
           </Select>
         </div>
       </div>
        </div>
       <div className="bg-primary">
       <div className="grid grid-cols-12 md:gap-6 gap-0">
         <div className="lg:col-span-3 md:col-span-4 col-span-12">
           <div className="p-4 w-100 truncate bg-black/10">
             <h6 className="text-white text-sm dark:text-white font-medium mb-2">Total Sales</h6>
             <h3 className="text-white dark:text-white font-medium  text-21 m-b-0">$10,345</h3>
           </div>
         </div>
         <div className="g:col-span-3 md:col-span-4 col-span-12">
         <div className="p-4 w-100 truncate">
             <h6 className="text-white text-sm dark:text-white font-medium mb-2">This Month</h6>
             <h3 className="text-white dark:text-white font-medium  text-21 m-b-0">$7,589</h3>
           </div>
         </div>
         <div className="g:col-span-3 md:col-span-4 col-span-12">
         <div className="p-4 w-100 truncate">
             <h6 className="text-white text-sm dark:text-white font-medium mb-2">This Week</h6>
             <h3 className="text-white dark:text-white font-medium  text-21 m-b-0">$1,476</h3>
           </div>
         </div>
       </div>
     </div>
     <CardBox className="px-3 py-6">
         <div >
         <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="area"
                 height={height}
                 width={"100%"}
               />
         </div>
     </CardBox>
       </CardBox>

 
  </div>

 );
};

export default SalesOverview;