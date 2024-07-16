import Banner from "@/components/pages/Banner";
import ParallaxData from "@/components/pages/CompanyData";
import EXPERIENCE from "@/components/pages/EXPERIENCE";
import ContactHome from "@/components/pages/HomeContact";
import PackInfo from "@/components/pages/PackeageInfo";
import ProductCategory from "@/components/pages/ProductCategory";
import ProductShow from "@/components/pages/ProductShow";
import ShowExperience from "@/components/pages/ShowExperience";
import Timeline from "@/components/pages/TimeLine";
import TopProduct from "@/components/pages/UsingPage/TopProduct";
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
