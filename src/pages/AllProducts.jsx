import React, { useState } from "react";
import image from "../assets/images/S1.jpg";
import image1 from "../assets/images/L1.jpg";
import image2 from "../assets/images/soap 1.jpg";
import image3 from "../assets/images/P2.jpg";
import image4 from "../assets/images/soap 2.jpg";
import image5 from "../assets/images/L2.jpg";

const products = [
  { name: "Classic Shea Body Butter", price: "GHS 45", image: image },
  { name: "Vanilla Lip Balm", price: "GHS 20", image: image1 },
  { name: "Coconut Shea Soap", price: "GHS 25", image: image2 },
  { name: "Lavender Shea Butter", price: "GHS 50", image: image3 },
  { name: "Lemon Lip Balm", price: "GHS 20", image: image5 },
  { name: "Herbal Shea Soap", price: "GHS 30", image: image4 },
  { name: "Mango Shea Body Butter", price: "GHS 55", image: image },
  { name: "Unscented Shea Butter", price: "GHS 40", image: image2 },
];

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-12 mt-10">
      <h2 className="text-3xl font-bold text-[#964B00] text-center mb-6">
        All Products
      </h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 border border-[#964B00] rounded-full focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-[#964B00]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-105 hover:brightness-110"
              />
              <div className="p-4">
                <h3 className="text-[#964B00] font-semibold text-lg mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 font-medium">{product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-[#964B00] font-medium">
            No products match your search.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
