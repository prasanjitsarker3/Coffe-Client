"use client";
import { PieChartSkeleton } from "@/components/ChartSkeleton/TotalSkeleton";
import { useProductPieDataQuery } from "@/components/Redux/AdminApi/metaApi";
import React from "react";
import ReactApexChart from "react-apexcharts";

const ProductChart: React.FC = () => {
  const { data, isLoading } = useProductPieDataQuery(undefined);
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  console.log(data?.data);
  const chartData = data?.data ?? [];
  const options: ApexCharts.ApexOptions = {
    series: chartData?.map((data: any) => data.count),
    chart: {
      type: "donut",
      width: 380,
    },
    labels: [
      "Tea",
      "Black Tea",
      "Herbal Tea",
      "Espresso",
      "Cappuccino",
      "Green Tea",
      "Americano",
    ],

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div>
      {chartData ? (
        <div className=" bg-blue-500 rounded-md shadow-md text-white">
          <h1 className=" text-center text-xl font-exotwo">
            Products Chart By Inventory
          </h1>
          <ReactApexChart
            options={options}
            series={options.series}
            type="donut"
            height={200}
          />
        </div>
      ) : (
        <PieChartSkeleton />
      )}
    </div>
  );
};

export default ProductChart;
