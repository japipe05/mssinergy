"use client";
import { Select } from "flowbite-react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CardBox from "../../shared/CardBox";



const SalesOverview = () => {
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
    const psalesData = [
        {
          title: '10,345',
          subtitle: 'Total Sales',
        },
        {
          title: '7,589',
          subtitle: 'This Month',
        },
        {
          title: '1,476',
          subtitle: 'This Week',
        },
      ];
 return (
  <div className="mb-0">
   <CardBox className="p-0 mb-0">
       <div className="md:flex items-center mb-0 p-6 pb-0">
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
       <div className="px-2" >
         <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="area"
                 height="338px"
                 width={"100%"}
               />
         </div>
         <div className="p-6 pt-2.5 grid grid-cols-12 gap-6">
        {psalesData.map((pdata) => (
          <div className="text-center mt-2 mt-md-0 lg:col-span-4 col-span-12" key={pdata.title}>
            <span className="text-muted dark:text-darkmuted font-medium">{pdata.subtitle}</span>
            <h3 className="mb-0 mt-1 text-2xl text-dark dark:text-white font-medium">${pdata.title}</h3>
          </div>
        ))}
      </div>
       </CardBox>
  </div>

 );
};

export default SalesOverview;