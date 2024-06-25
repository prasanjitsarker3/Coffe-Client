import Banner from "@/Components/pages/Banner";
import EXPERIENCE from "@/Components/pages/EXPERIENCE";
import PackInfo from "@/Components/pages/PackeageInfo";
import ProductCategory from "@/Components/pages/ProductCategory";
import ProductShow from "@/Components/pages/ProductShow";
import ShowExperience from "@/Components/pages/ShowExperience";
import Timeline from "@/Components/pages/TimeLine";
import TopProduct from "@/Components/pages/UsingPage/TopProduct";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <ProductCategory />
      <ProductShow />
      <TopProduct />
      <Timeline />
      <ShowExperience />
      <PackInfo />
    </div>
  );
};

export default HomePage;
