import React from "react";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";

const DashOverview = () => {
  return (
    <div className="p-4">
      {/* Header section with button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-[#964B00] font-serif">
          Dashboard Overview
        </h1>
        <Link to="/admindash/add">
          <button className="bg-[#964B00] text-white px-4 py-2 rounded-lg hover:bg-[#7a3d00] transition">
            + Add Product
          </button>
        </Link>
      </div>

      {/* Product Cards */}
      <ProductCard />
    </div>
  );
};

export default DashOverview;
