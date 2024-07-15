"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

const OrderChart = () => {
  const options: ApexCharts.ApexOptions = {
    series: [44, 55, 13, 43, 22, 33, 27],
    chart: {
      width: 380,
      type: "pie",
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
      <div className=" bg-blue-500 rounded-md shadow-md text-white">
        <h1 className=" text-center text-xl font-exotwo">
          Products Chart By Sell
        </h1>
        <ReactApexChart
          options={options}
          series={options.series}
          type="pie"
          height={200}
        />
      </div>
    </div>
  );
};

export default OrderChart;
