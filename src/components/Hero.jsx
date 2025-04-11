import React from "react";
import image1 from "../assets/images/hero3-bg.png";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[#964B00] text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:px-20 bg-[#964B00] text-white">
        {/* Left text content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-snug mb-4 text-[#F7DC6F] font-serif">
            <span className="text-white">
              {" "}
              Nourish <br />
              naturally, <br />
            </span>
            Glow confidently.
          </h1>
          {/* <p className="mt-2 text-white text-lg font-medium font-sans">
            Discover natural beauty with Kenzy Royal Enterprise.
          </p> */}
        </div>

        {/* Right image */}
        <div className="mt-10 md:mt-0">
          <img
            src={image1}
            alt="Kenzy Royal Skincare"
            className="w-[300px] md:w-[600px] rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
