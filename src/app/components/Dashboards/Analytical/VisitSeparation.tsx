"use client"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CardBox from '../../shared/CardBox';

interface VisitorData {
    id: number;
    title: string;
    subtitle: string;
  }

const visitorData: VisitorData[] = [
  {
    id: 1,
    title: 'Mobile',
    subtitle: '38.5%',
  },
  {
    id: 2,
    title: 'Tablet',
    subtitle: '30.8%',
  },
  {
    id: 3,
    title: 'Desktop',
    subtitle: '7.7%',
  },
  {
    id: 4,
    title: 'DesktopOthers',
    subtitle: '27%',
  },
];



const VisitSeparation = () => {
    const ChartData: any = {
        series: [50, 40, 30, 10],
    
        labels: ["Mobile", "Tablet", "Other", "Desktop"],
        chart: {
          type: "donut",
          fontFamily: "inherit",
          height: 214,
          offsetY: 6,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            expandOnClick: true,
            donut: {
              size: "80",
              labels: {
                show: true,
                name: {
                  show: true,
                  offsetY: 10,
                },
                value: {
                  show: false,
                },
                total: {
                  show: true,
                  fontFamily: "inherit",
                  fontSize: "26px",
                  fontWeight: 600,
                  label: "Visits",
                  className:"text-ld"
                },
              },
            },
          },
        },
        colors: ["#1e88e5", "#26c6da", "#eceff1", "var(--color-primary)"],
        tooltip: {
          show: true,
          fillSeriesColor: false,
        },
        legend: {
          show: false,
        },
        responsive: [
          {
            breakpoint: 1025,
            options: {
              chart: {
                height: 220,
                width: 220,
              },
            },
          },
          {
            breakpoint: 769,
            options: {
              chart: {
                height: 250,
                width: 250,
              },
            },
          },
        ],
      };
  return (
    <CardBox className="mb-0">
     <div className="card-title">
         <span className="lstick align-middle inline-block bg-primary"></span>
         Visit Separation
     </div>
      <div className="mt-4 relative">
        <Chart  options={ChartData} series={ChartData.series} type="donut" height="215px" width={"100%"} />
      </div>
      <div className="mb-2">
        {visitorData.map((vdata) => (
          <div className="flex items-center border-b border-border dark:border-darkborder p-4" key={vdata.id}>
            <span className='font-medium text-muted dark:text-darkmuted'>{vdata.title}</span>
            <div className="ms-auto">
              <span className="font-semibold text-muted dark:text-darkmuted">{vdata.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </CardBox>
  );
};

export default VisitSeparation;
