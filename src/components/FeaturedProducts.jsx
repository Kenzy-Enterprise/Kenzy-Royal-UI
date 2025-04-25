import React, { useState } from "react";
import image1 from "../assets/images/kenzy-bg.png";
import image2 from "../assets/images/P2.jpg";
import image3 from "../assets/images/S1.jpg";
import image4 from "../assets/images/L1.jpg";
import { Link } from "react-router";

const products = [
  {
    name: "Pure Shea Butter",
    type: "Unrefined | Organic",
    description: "Ideal for skin hydration & hair nourishment.",
    image: image1,
  },
  {
    name: "Shea Butter Body Cream",
    type: "Vanilla Infused",
    description: "Smooth texture for all skin types with a subtle scent.",
    image: image2,
  },
  {
    name: "Whipped Shea Butter",
    type: "Lavender Scented",
    description: "Light, fluffy and perfect for daily use.",
    image: image3,
  },
  {
    name: "Kenz Lip balm",
    type: "Vanilla Infused",
    description: "Smooth texture with a sweet scent.",
    image: image4,
  },
];

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12 font-serif">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#964B00] mb-4">
          Our Featured Products
        </h2>
        <p className="text-[#964B00] text-lg mb-10">
          Experience the richness of Kenzy Royal’s handcrafted shea butter
          products made with love and care.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105 hover:brightness-110"
                />
                {/* Dark overlay on click */}
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300" />
                )}
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-[#964B00]">
                  {item.name}
                </h3>
                <p className="text-[#964B00] mt-2">{item.type}</p>
                <p className="text-sm text-[#964B00] mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-10">
          <Link to="/products">
            <button className="bg-[#964B00] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#7b3f00] transition">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
