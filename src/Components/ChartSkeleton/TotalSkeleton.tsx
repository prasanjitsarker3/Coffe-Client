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

export const CategorySkeleton = () => {
  return (
    <div className="md:px-24 py-12 px-8 grid grid-cols-2 md:grid-cols-6 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="rounded-lg w-full">
          <div className="h-36 rounded-lg bg-default-300"></div>
        </Skeleton>
      ))}
    </div>
  );
};
export const CategoryBySkeleton = () => {
  return (
    <div className="md:px-24 py-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="rounded-lg w-full">
          <div className="h-36 rounded-lg bg-default-300"></div>
        </Skeleton>
      ))}
    </div>
  );
};
export const ProductSkeleton = () => {
  return (
    <div className="md:px-24 py-12 px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} className="rounded-lg w-full">
          <div className="h-48 rounded-lg bg-default-300"></div>
        </Skeleton>
      ))}
    </div>
  );
};
export const TopProductSkeleton = () => {
  return (
    <div className="md:px-24 py-12 px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className="rounded-lg w-full">
          <div className="h-40 rounded-lg bg-default-300"></div>
        </Skeleton>
      ))}
    </div>
  );
};
export const ShowProductSkeleton = () => {
  return (
    <div className="md:px-24 py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array.from({ length: 2 }).map((_, index) => (
        <Skeleton key={index} className="rounded-lg w-full">
          <div className="h-72 rounded-lg bg-default-300"></div>
        </Skeleton>
      ))}
    </div>
  );
};
export const SimilarProductSkeleton = () => {
  return (
    <div className="md:px-24 py-16 px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} className="rounded-lg w-full">
          <div className="h-72 rounded-lg bg-default-300"></div>
        </Skeleton>
      ))}
    </div>
  );
};
export const SingleProductSkeleton = () => {
  return (
    <div className="md:px-24 py-16 ">
      <Skeleton className="rounded-lg w-full">
        <div className="h-96 rounded-lg bg-default-300"></div>
      </Skeleton>
    </div>
  );
};
