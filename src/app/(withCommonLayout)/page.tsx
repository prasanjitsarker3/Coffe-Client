import Banner from "@/Components/pages/Banner";
import ParallaxData from "@/Components/pages/CompanyData";
import EXPERIENCE from "@/Components/pages/EXPERIENCE";
import ContactHome from "@/Components/pages/HomeContact";
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
      <ShowExperience />
      <PackInfo />
      <ParallaxData />
      <Timeline />
      <ContactHome />
    </div>
  );
};

export default HomePage;
