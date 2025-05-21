// import React from "react";
// import backgroundImage from "../assets/images/contact 2.jpg";

// const AdminDashboard = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="absolute inset-0 bg-black/70 bg-opacity-60"></div>

//       <div className="relative z-10 text-center px-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4 drop-shadow-lg">
//           Hello! <br />
//           Welcome to your Dashboard
//         </h1>
//         <p className="text-xl text-white/90 max-w-xl mx-auto">
//           Manage, add, edit and delete your products from this central
//           dashboard.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from "react";
import { Package, AlertCircle, Clock } from "lucide-react"; // Make sure you have lucide-react installed

import image from "../assets/images/S1.jpg";
import image1 from "../assets/images/L1.jpg";
import image2 from "../assets/images/soap 1.jpg";
import image3 from "../assets/images/P2.jpg";
import image4 from "../assets/images/soap 2.jpg";
import image5 from "../assets/images/L2.jpg";

const products = [
  { id: "1", name: "Classic Shea Body Butter", price: "GHS 45", image: image },
  { id: "2", name: "Vanilla Lip Balm", price: "GHS 20", image: image1 },
  { id: "3", name: "Coconut Shea Soap", price: "GHS 25", image: image2 },
  { id: "4", name: "Lavender Shea Butter", price: "GHS 50", image: image3 },
  { id: "5", name: "Lemon Lip Balm", price: "GHS 20", image: image5 },
  { id: "6", name: "Herbal Shea Soap", price: "GHS 30", image: image4 },
];

// Mock addedDate and stock for the example:
const productsWithStock = products.map((p, idx) => ({
  ...p,
  addedDate: new Date(Date.now() - idx * 86400000).toISOString(),
  stock: [10, 3, 0, 25, 2, 7][idx],
}));

const LOW_STOCK_THRESHOLD = 5;

const AdminDashboard = () => {
  const recentlyAdded = productsWithStock
    .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
    .slice(0, 3);

  const lowStockProducts = productsWithStock.filter(
    (product) => product.stock <= LOW_STOCK_THRESHOLD
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <h1
        className="text-3xl font-bold mb-10 font-serif text-center"
        style={{ color: "#964B00" }}
      >
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <SummaryCard
          title="Total Products"
          value={products.length}
          color="#964B00"
          icon={<Package size={40} />}
        />
        <SummaryCard
          title="Low Stock Items"
          value={lowStockProducts.length}
          color="#F7DC6F"
          icon={<AlertCircle size={40} />}
        />
        <SummaryCard
          title="Recently Added"
          value={recentlyAdded.length}
          color="#964B00"
          icon={<Clock size={40} />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2
            className="text-xl font-semibold mb-4 flex items-center"
            style={{ color: "#964B00" }}
          >
            <Clock className="mr-2" size={20} /> Recently Added Products
          </h2>
          <ul>
            {recentlyAdded.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between py-2 border-b last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.price}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(product.addedDate).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2
            className="text-xl font-semibold mb-4 flex items-center"
            style={{ color: "#964B00" }}
          >
            <AlertCircle className="mr-2" size={20} /> Low Stock Alerts
          </h2>
          {lowStockProducts.length === 0 ? (
            <p className="text-gray-600">
              All products are sufficiently stocked.
            </p>
          ) : (
            <ul>
              {lowStockProducts.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between py-2 border-b last:border-b-0 text-red-600 font-semibold"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <p>{product.name}</p>
                  </div>
                  <span>Stock: {product.stock}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value, color, icon }) => (
  <div
    className="flex items-center justify-between rounded-lg p-4 shadow-md"
    style={{ backgroundColor: color, color: "#fff" }}
  >
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    <div>{icon}</div>
  </div>
);

export default AdminDashboard;
