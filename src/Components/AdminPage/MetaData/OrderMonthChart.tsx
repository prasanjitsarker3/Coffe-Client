import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useMonthlyOrderMetaDataQuery } from "@/components/Redux/AdminApi/metaApi";

const OrderMonthChart: React.FC = () => {
  const { data, isLoading } = useMonthlyOrderMetaDataQuery(undefined);
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const chartData = data?.data ?? [];
  const options: ApexOptions = {
    series: [
      {
        name: "Orders",
        data: chartData.map((data: { count: any }) => data.count),
      },
    ],
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#000000"], // Set text color to white
      },
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
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val: number) {
          return val + "%";
        },
      },
    },
  };

  return (
    <div className="">
      <h1 className=" text-center text-xl font-exotwo">Yearly Sells Chart</h1>
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={400}
      />
    </div>
  );
};

export default OrderMonthChart;
