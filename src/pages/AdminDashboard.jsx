import React from "react";
import backgroundImage from "../assets/images/contact 2.jpg";

const AdminDashboard = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-60"></div>

      {/* Content on top of overlay */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4 drop-shadow-lg">
          Hello! <br />
          Welcome to your Dashboard
        </h1>
        <p className="text-xl text-white/90 max-w-xl mx-auto">
          Manage, add, edit and delete your products from this central
          dashboard.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
