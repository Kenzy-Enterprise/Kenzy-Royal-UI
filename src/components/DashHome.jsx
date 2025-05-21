import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import AddProductForm from "../components/AddProductForm";

const DashHome = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="p-4 relative">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowAddProduct(true)}
          className="bg-[#964B00] text-white px-4 py-2 text-sm rounded-md hover:bg-[#7a3d00] transition whitespace-nowrap"
        >
          + Add Product
        </button>
      </div>

      <ProductCard />

      {showAddProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-xl shadow-lg relative">
            <button
              onClick={() => setShowAddProduct(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-[#964B00]"
            >
              &times;
            </button>
            <AddProductForm onClose={() => setShowAddProduct(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashHome;
