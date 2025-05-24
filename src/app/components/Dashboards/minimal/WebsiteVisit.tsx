"use client"
import { Button } from "flowbite-react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CardBox from '../../shared/CardBox';
import { Icon } from '@iconify/react/dist/iconify.js';

const WebsiteVisit = () => {
    const ChartData: any = {
        series: [
            {
                name: "Series A View ",
                data: [29, 52, 38, 47, 56, 41, 46, 21, 15, 30],
              },
              {
                name: "Series B View ",
                data: [12, 15, 45, 20, 12, 45, 65, 19, 32, 50],
              },
        ],
    
        chart: {
            fontFamily: "inherit",
            height: 400,
            type: "bar",
            stacked: true,
            foreColor: "#adb0bb",
            toolbar: {
              show: false,
            },
          },
          colors: ["var(--color-success)", "var(--color-primary)"],
          plotOptions: {
            bar: {
              horizontal: false,
              barHeight: "60%",
              columnWidth: "20%",
              borderRadius: [6],
              borderRadiusApplication: "end",
              borderRadiusWhenStacked: "all",
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          grid: {
            borderColor: "rgba(0,0,0,0.1)",
            strokeDashArray: 3,
            xaxis: {
              lines: {
                show: false,
              },
            },
          },
          yaxis: {
            title: {},
            tickAmount: 3,
            min: 0,
            max: 120,
          },
          xaxis: {
            axisBorder: {
              show: false,
            },
            categories: [
              "16/08",
              "17/08",
              "18/08",
              "19/08",
              "20/08",
              "21/08",
              "22/08",
              "23/08",
              "24/08",
              "25/08",
            ],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
            theme: "dark",
          },
      };
  return (
    <CardBox className="mb-0">
          <div className="md:flex items-center justify-between mb-6">
              <div className="card-title">
                <span className="lstick align-middle inline-block bg-primary"></span>
                 Website Visit
              </div>
              <div className="flex items-center gap-2">
                  <div className="flex items-center text-success text-sm">
                      <Icon icon="material-symbols:circle" className='text-sm me-2' />Site A view
                  </div>
                  <div className="flex items-center text-info text-sm">
                  <Icon icon="material-symbols:circle" className='text-sm me-2' />Site B view
                  </div>
              </div>
          </div>
      <div className="text-center my-4 website-visit">
      <Button.Group className="btn-group">
      <Button color="gray" className="text-sm right-btn" >PAGEVIEWS</Button>
      <Button color="gray" className="text-sm left-btn" >REFERRALS</Button>
    </Button.Group>
      </div>

      <div style={{ height: '350px' }} className='revenuechart'>
        <Chart  options={ChartData}
                 series={ChartData.series} type="bar" height="350px" width={"100%"}  />
      </div>
    </CardBox>
  );
};

export default WebsiteVisit;
