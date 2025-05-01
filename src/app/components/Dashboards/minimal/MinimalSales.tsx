

"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CardBox from "../../shared/CardBox";


const MinimalSales = () => {
   const ChartData: any = {
       series: [
        {
            name: "Earning ",
            data: [0, 150, 110, 240, 200, 200, 300, 200, 380, 300, 400, 380],
          },
          {
            name: "Expense ",
            data: [0, 100, 70, 100, 240, 180, 220, 140, 250, 210, 340, 320],
          },
          {
            name: "Sales ",
            data: [0, 50, 30, 60, 180, 120, 180, 80, 190, 150, 240, 240],
          },
       ],
   
       chart: {
        height: 345,
        type: "area",
        stacked: true,
        fontFamily: "inherit",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#e9edf2", "var(--color-primary)", "var(--color-indigo)"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
      },
      fill: {
        type: "solid",
        colors: ["#e9edf2", "var(--color-primary)", "var(--color-indigo)"],
        opacity: 1,
      },
      markers: {
        size: 3,
        strokeColors: "#fff",
        strokeWidth: 0,
        colors: ["#e9edf2", "var(--color-primary)", "var(--color-indigo)"],
      },
      grid: {
        borderColor: "rgba(0,0,0,.1)",
      },
      xaxis: {
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
            ],
          },
        },
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
            ],
          },
        },
        min: 0,
        max: 1000,
        tickAmount: 5,
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
      },
     };
 return (
  <div className="mb-0">
   <CardBox className="mb-0">
       <div className="md:flex items-center mb-0">
         <div className="card-title">
         <span className="lstick align-middle inline-block bg-primary"></span>
         Sales Overview <br/>
         <span className="text-muted dark:text-darkmuted text-sm">Year 2024</span>
         </div>
         <div className="block md:flex flex-col md:flex-row gap-3 ms-auto">
                      <div className="flex items-center">
                          <div>
                              <h3 className="mb-0 text-xl text-dark font-medium flex items-center">
                                  <i className="w-2 h-2 bg-primary rounded-full me-2.5"></i>
                                   10368
                              </h3>
                              <h6 className="font-medium ms-3 ps-1 fs-6 text-muted dark:text-darkmuted">Earning</h6>
                          </div>
                      </div>
                      <div className="flex items-center">
                          <div>
                              <h3 className="mb-0 text-xl text-dark font-medium flex items-center">
                                  <i className="w-2 h-2 bg-indigo rounded-full me-2.5"></i>12659
                              </h3>
                              <h6 className="font-medium ms-3 ps-1 text-muted dark:text-darkmuted">Expense</h6>
                          </div>
                      </div>
                      <div className="flex items-center">
                          <div>
                              <h3 className="mb-0 text-xl text-dark font-medium flex items-center">
                                  <i className="w-2 h-2 bg-muted rounded-full me-2.5"></i>15478
                              </h3>
                              <h6 className="font-medium ms-3 ps-1.5 text-muted dark:text-darkmuted">Sales</h6>
                          </div>
                      </div>
         </div>
       </div>
       <div className="px-0 py-0 shadow-none border-none">
         <div >
         <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="area"
                 height="308px"
                 width={"100%"}
               />
         </div>
     </div>
       </CardBox>

 
  </div>

 );
};

export default MinimalSales;