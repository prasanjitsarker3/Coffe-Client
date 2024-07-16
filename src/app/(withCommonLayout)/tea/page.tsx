import ProductShow from "@/components/pages/ProductShow";
import TopProduct from "@/components/pages/UsingPage/TopProduct";
import React from "react";

const TeaPage = () => {
  return (
    <div>
      <div className=" pt-12">
        <ProductShow />
        <TopProduct />
      </div>
    </div>
  );
};

export default TeaPage;
