import React, { useState } from "react";
import { useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { toast } from "react-hot-toast";

import image from "../assets/images/P2.jpg";
import image1 from "../assets/images/L1.jpg";
import image2 from "../assets/images/soap 1.jpg";
import image3 from "../assets/images/S1.jpg";
import image4 from "../assets/images/soap 2.jpg";
import image5 from "../assets/images/L2.jpg";

const products = [
  { id: "1", name: "Classic Shea Body Butter", price: "GHS 45", image: image3 },
  { id: "2", name: "Vanilla Lip Balm", price: "GHS 20", image: image1 },
  { id: "3", name: "Coconut Shea Soap", price: "GHS 25", image: image2 },
  { id: "4", name: "Lavender Shea Butter", price: "GHS 50", image },
  { id: "5", name: "Lemon Lip Balm", price: "GHS 20", image: image5 },
  { id: "6", name: "Herbal Shea Soap", price: "GHS 30", image: image4 },
  { id: "7", name: "Mango Shea Body Butter", price: "GHS 55", image: image3 },
  { id: "8", name: "Unscented Shea Butter", price: "GHS 40", image: image2 },
];

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} of ${product.name} to your cart!`);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#964B00] font-semibold">
        Product not found.
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen px-6 py-6 mt-15">
      <Link
        to="/products"
        className="flex items-center text-[#964B00] hover:underline font-semibold mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </Link>

      <section className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl w-80 h-80 object-cover shadow-md"
          />
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
          <h1 className="text-3xl font-bold text-[#964B00] mb-2">
            {product.name}
          </h1>
          <p className="text-[#F7DC6F] font-semibold mb-4 font-serif">
            By Kenzy Royal
          </p>
          <p className="text-gray-700 mb-6 font-serif">
            This is a beautifully handcrafted shea product made with care and
            natural ingredients.
          </p>

          <p className="text-gray-800 font-medium mb-1 font-serif">How Many</p>
          <div className="flex items-center space-x-4 mb-6">
            <button
              className="px-3 py-1 bg-[#964B00] text-white rounded-full"
              onClick={decreaseQuantity}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="border border-[#964B00] rounded-full px-4 py-1 text-[#964B00] font-semibold">
              {quantity}
            </span>
            <button
              className="px-3 py-1 bg-[#964B00] text-white rounded-full"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>

          <p className="text-[#964B00] font-semibold text-xl mb-6">
            {product.price}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-[#964B00] text-white px-6 py-2 font-serif rounded-full font-semibold hover:bg-[#7a3a00] transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <a
              href={`https://wa.me/233267698710?text=Hi%20I'm%20interested%20in%20${quantity}%20of%20the%20${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F7DC6F] text-[#964B00] px-6 py-2 rounded-full font-serif font-semibold hover:bg-yellow-300 transition"
            >
              Contact Seller
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
