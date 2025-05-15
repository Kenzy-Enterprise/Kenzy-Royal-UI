import React from "react";
import ProductCard from "../components/ProductCard";

const DashOverview = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-[#964B00] font-serif">
        Welcome to your Dashboard
      </h1>
      <ProductCard />
    </div>
  );
};

export default DashOverview;
