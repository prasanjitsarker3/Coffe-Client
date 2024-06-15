import Banner from "@/Components/pages/Banner";
import ProductCategory from "@/Components/pages/ProductCategory";
import ProductShow from "@/Components/pages/ProductShow";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProductCategory />
      <ProductShow />
    </div>
  );
};

export default HomePage;
