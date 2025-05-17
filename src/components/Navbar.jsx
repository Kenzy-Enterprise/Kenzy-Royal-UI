import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCart = () => setShowCart(!showCart);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md text-[#964B00] font-semibold">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold tracking-wide font-serif text-[#964B00]">
          Kenzy<span className="text-[#F7DC6F]">Royal</span>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 font-medium font-serif items-center">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <button onClick={toggleCart} className="relative">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col px-6 pb-4 font-serif gap-4 bg-white">
          <li>
            <Link to="/" className="hover:underline" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <button onClick={toggleCart}>
              <ShoppingCart className="w-5 h-5" />
            </button>
          </li>
        </ul>
      )}

      {showCart && (
        <div className="absolute right-4 top-16 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
          <p className="font-serif text-sm text-gray-700">Cart is empty.</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
