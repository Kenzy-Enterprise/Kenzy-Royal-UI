import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  LogOut,
  User,
  Plus,
  Table,
  LayoutGrid,
  Menu,
  X,
  BarChart3,
} from "lucide-react";
import AddProductForm from "./AddProductForm";

const DashboardLayout = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-[#964B00] text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col py-6 px-4 md:relative md:translate-x-0`}
      >
        {/* Top Section (Logo & Close Button on Mobile) */}
        <div className="flex items-center justify-between mb-4 md:hidden px-2">
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <button className="text-white" onClick={() => setSidebarOpen(false)}>
            <X />
          </button>
        </div>

        {/* Heading for desktop */}
        <h1 className="text-2xl font-bold mb-8 text-center hidden md:block">
          Admin Panel
        </h1>

        {/* Navigation */}
        <nav className="flex flex-col gap-4">
          <Link
            to="/admindash/overview"
            className="hover:text-[#F7DC6F] flex items-center gap-2"
          >
            <BarChart3 /> Overview
          </Link>
          <Link
            to="/admindash/home"
            className="hover:text-[#F7DC6F] flex items-center gap-2"
          >
            <Table /> Home
          </Link>
          <Link
            to="/admindash/products"
            className="hover:text-[#F7DC6F] flex items-center gap-2"
          >
            <LayoutGrid /> Total Products
          </Link>
          <Link
            to="/admindash/profile"
            className="hover:text-[#F7DC6F] flex items-center gap-2"
          >
            <User size={18} /> Profile
          </Link>
        </nav>

        {/* Logout - always pinned to bottom */}
        <div className="mt-auto pt-4">
          <Link to="/" className="flex items-center gap-2 hover:text-[#F7DC6F]">
            <LogOut size={18} /> Logout
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="text-[#964B00]" />
          </button>
          <h2 className="text-lg font-semibold text-[#964B00]">Admin Panel</h2>
        </header>

        <div className="p-6 relative">
          <Outlet />

          {/* Modal */}
          {showAddProduct && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 w-full max-w-xl shadow-lg relative">
                <button
                  onClick={() => setShowAddProduct(false)}
                  className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-[#964B00]"
                >
                  &times;
                </button>
                <AddProductForm onClose={() => setShowAddProduct(false)} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
