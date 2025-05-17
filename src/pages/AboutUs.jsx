import React from "react";
import image from "../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <div className="text-center mb-12 mt-10">
        <h2 className="text-4xl font-extrabold text-[#964B00] mb-4 font-serif">
          About Us
        </h2>
        <p className="text-2xl text-[#F7DC6F] font-bold font-serif">
          Crafted with purpose. Inspired by creativity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <img
          src={image}
          alt="Kenzy Royal Team"
          className="w-full rounded-lg shadow-md"
        />

        {/* Text Section */}
        <div>
          <p className="mb-6 leading-relaxed text-gray-700">
            Kenzy Royal is a visionary brand bringing together beauty and
            creativity through luxurious shea butter-infused cosmetics and
            innovative crafting supplies. Our story is rooted in a passion for
            self-care, self-expression, and celebrating natural, homegrown
            goodness.
          </p>
          <p className="mb-6 leading-relaxed text-gray-700">
            We believe that taking care of yourself is just as important as
            expressing who you are. By combining high-quality, locally sourced
            ingredients with purposeful craftsmanship, we make creativity and
            wellness both accessible and enjoyable.
          </p>
          <p className="mb-6 leading-relaxed text-gray-700">
            Whether you’re nourishing your skin or crafting your next creation,
            Kenzy Royal is here to empower your journey. Every product we
            offer—from our rich shea blends to our elegant crafting tools—is
            made to support your glow, your peace, and your power.
          </p>
          <p className="leading-relaxed text-gray-700">
            Join us in redefining what it means to care for yourself—with love,
            with joy, and with purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
