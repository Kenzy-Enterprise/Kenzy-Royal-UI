import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white  text-[#964B00]font-semibold shadow-md">
      <div className="text-xl tracking-wide font-serif text-[#964B00] font-bold px-20">
        Kenzy<span className="text-[#F7DC6F]">Royal</span>
      </div>

      <ul className="hidden md:flex gap-6 text-[#964B00] font-medium px-20 font-serif">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Products</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
