"use client";
import { Select } from "flowbite-react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CardBox from "../../shared/CardBox";
interface SalesOverviewProps{
  height:string
}

const psalesData = [
    {
      title: 'Jan',
      subtitle: '$100',
    },
    {
      title: 'Feb',
      subtitle: '$200',
    },
    {
      title: 'Mar',
      subtitle: '$376',
    },
    {
      title: 'Apr',
      subtitle: '$456',
    },
    {
      title: 'May',
      subtitle: '$785',
    },
    {
      title: 'Jun',
      subtitle: '$152',
    },
  ];

const MonthlyOverview: React.FC<SalesOverviewProps> = ({height}) => {
   const ChartData: any = {
       series: [
        {
            name: "Sales A",
            data: [400, 120, 140, 130, 200, 150, 140, 130, 300, 120, 140, 150],
          },
          {
            name: "Sales B",
            data: [200, 188, 242, 300, 200, 400, 230, 300, 200, 400, 180, 300],
          },
          {
            name: "Sales C",
            data: [100, 200, 400, 600, 100, 200, 400, 370, 240, 200, 280, 330],
          },
       ],
       chart: {
        fontFamily: "inherit",
        type: "bar",
        height: 360,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: ["var(--color-primary)", "var(--color-primary-opacity-80)", "var(--color-primary-opacity-40)"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: "rgba(0,0,0,.1)",
      },
      yaxis: {
        labels: {
          style: {
            colors: [
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
            ],
          },
        },
        min: 0,
        max: 1200,
        tickAmount: 4,
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
        labels: {
          style: {
            colors: [
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
            ],
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
      },
     };
 return (
  <div className="mb-0">
   <CardBox className="p-0 mb-0">
       <div className="md:flex items-center mb-0 p-6 pb-0">
         <div className="card-title">
         <span className="lstick align-middle inline-block bg-primary"></span>
         Monthly Overview
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
       <div className="rounded-bars" >
         <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="bar"
                 height={height}
                 width={"100%"}
               />
         </div>
         <div className="p-6 pt-2.5 grid  grid-cols-12 gap-6">
        {psalesData.map((pdata) => (
          <div className="text-center mt-2 mt-md-0 lg:col-span-2 md:col-span-4 col-span-12" key={pdata.title}>
            <span className="text-muted dark:text-darkmuted font-medium">{pdata.subtitle}</span>
            <h3 className="mb-0 mt-1 text-base text-dark dark:text-white font-medium">${pdata.title}</h3>
          </div>
        ))}
      </div>
       </CardBox>
  </div>

 );
};

export default MonthlyOverview;