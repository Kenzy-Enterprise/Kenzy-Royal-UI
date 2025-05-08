import React from "react";
import image from "../assets/images/about 2.jpg";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold font-serif">About Us</h1>
        <br />
        <h2 className="text-5xl font-serif font-bold text-[#964B00] mb-6">
          Crafted with purpose; inspired by creativity
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Kenzy Royal is a visionary brand bringing together beauty and
          creativity through luxurious shea butter-infused cosmetics and
          innovative crafting supplies.
          <br />
          <br />
          We believe that self-care and self-expression go hand in hand. By
          using high-quality, locally sourced ingredients and materials, we make
          creativity and wellness both accessible and enjoyable. Our products
          are designed to support your journey with natural, nourishing goodness
          — inside and out.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={image}
          alt="Kenzy Royal Products"
          className="w-full md:w-[400px] lg:w-[500px] h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default About;
