import { Link } from "react-router";
import { LogOut, User, PlusSquare, LayoutGrid, Table } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#964B00] text-white p-6 flex flex-col space-y-6">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <Link to="/" className="hover:text-[#F7DC6F] flex items-center gap-2">
        <LayoutGrid /> All Products
      </Link>
      <Link
        to="/admindash/add"
        className="hover:text-[#F7DC6F] flex items-center gap-2"
      >
        <PlusSquare /> Add Product
      </Link>
      <Link
        to="/admindash/overview"
        className="hover:text-[#F7DC6F] flex items-center gap-2"
      >
        <Table /> Overview
      </Link>
      <Link
        to="/profile"
        className="hover:text-[#F7DC6F] flex items-center gap-2"
      >
        <User /> Profile
      </Link>
      <button className="mt-auto hover:text-[#F7DC6F] flex items-center gap-2">
        <LogOut /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
