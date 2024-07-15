import ProductShow from "@/Components/pages/ProductShow";
import TopProduct from "@/Components/pages/UsingPage/TopProduct";
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
