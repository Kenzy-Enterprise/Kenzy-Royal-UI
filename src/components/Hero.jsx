import React from "react";
import image1 from "../assets/images/hero3-bg.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#964B00] to-[#964B00]/90 text-white font-sans relative overflow-hidden">
      {/* Decorative Glow Circle */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#F7DC6F]/10 rounded-full blur-3xl z-0"></div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:px-20 relative z-10">
        {/* Left text content */}
        <div className="max-w-xl">
          <h1 className="text-6xl md:text-6xl font-bold leading-snug mb-6 font-serif">
            <span className="text-white">
              Nourish <br />
              naturally,
            </span>
            <br />
            <span className="text-[#F7DC6F]">Glow confidently.</span>
          </h1>

          {/* CTA Button */}
          <Link
            to="/products"
            className="inline-block mt-6 bg-white text-[#964B00] px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-[#f5d654] transition"
          >
            Explore Products
          </Link>
        </div>

        {/* Right image */}
        <img
          src={image1}
          alt="Kenzy Royal Skincare"
          className="w-[300px] md:w-[600px] rounded-lg shadow-[0_0_30px_rgba(150,75,0,0.2)]"
        />
      </section>
    </div>
  );
};

export default Hero;
