import Banner from "@/Components/pages/Banner";
import ProductCategory from "@/Components/pages/ProductCategory";
import ProductShow from "@/Components/pages/ProductShow";
import TopProduct from "@/Components/pages/UsingPage/TopProduct";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProductCategory />
      <ProductShow />
      <TopProduct />
    </div>
  );
};

export default HomePage;
