import { Skeleton } from "@nextui-org/react";
import React from "react";

const TotalSkeleton = () => {
  return (
    <div className=" p-10">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-12">
        <Skeleton className="rounded-lg w-full">
          <div className=" h-40 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg w-full">
          <div className=" h-40 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg w-full">
          <div className=" h-40 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg w-full">
          <div className=" h-40 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </div>
  );
};

export default TotalSkeleton;

export const PieChartSkeleton = () => {
  return (
    <div className="">
      <div className="">
        <Skeleton className="rounded-lg w-full">
          <div className=" h-48 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg w-full">
          <div className=" h-48 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </div>
  );
};
