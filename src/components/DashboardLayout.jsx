// src/components/DashboardLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router";
import { LogOut, LogIn, User, Plus, Grid, Table } from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#964B00] text-white flex flex-col py-6 px-4">
        <h1 className="text-2xl font-bold mb-8 text-center">Admin Panel</h1>
        <nav className="flex flex-col gap-4">
          <Link
            to="/admindash/overview"
            className="hover:text-[#F7DC6F] flex items-center gap-2"
          >
            <Table /> Home
          </Link>
          {/* <Link
            to="/products"
            className="hover:text-[#F7DC6F] flex items-center gap-2"
          >
            <Grid size={18} /> All Products
          </Link> */}
          <Link
            to="/admindash/add"
            className="hover:text-[#F7DC6F] flex items-center gap-2"
          >
            <Plus size={18} /> Add Product
          </Link>
          <Link
            to="/profile"
            className="hover:text-[#F7DC6F] flex items-center gap-2"
          >
            <User size={18} /> Profile
          </Link>
        </nav>
        <div className="mt-auto">
          <Link to="/" className="flex items-center gap-2 hover:text-[#F7DC6F]">
            <LogOut size={18} /> Logout
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <header className="flex justify-end items-center p-4 border-b border-gray-200 bg-white">
          <Link
            to="/admindash/login"
            className="text-[#964B00] hover:text-[#F7DC6F] flex items-center gap-1"
          >
            <LogIn size={18} /> Login
          </Link>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
