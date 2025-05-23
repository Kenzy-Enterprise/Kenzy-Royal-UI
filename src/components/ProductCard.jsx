import React, { useState } from "react";
import image from "../assets/images/S1.jpg";
import image1 from "../assets/images/L1.jpg";
import image2 from "../assets/images/soap 1.jpg";
import image3 from "../assets/images/P2.jpg";
import image4 from "../assets/images/soap 2.jpg";
import image5 from "../assets/images/L2.jpg";
import { Edit, Trash } from "lucide-react";
import EditProductModal from "./EditProductModal";

const products = [
  { id: "1", name: "Classic Shea Body Butter", price: "GHS 45", image },
  { id: "2", name: "Vanilla Lip Balm", price: "GHS 20", image: image1 },
  { id: "3", name: "Coconut Shea Soap", price: "GHS 25", image: image2 },
  { id: "4", name: "Lavender Shea Butter", price: "GHS 50", image: image3 },
  { id: "5", name: "Lemon Lip Balm", price: "GHS 20", image: image5 },
  { id: "6", name: "Herbal Shea Soap", price: "GHS 30", image: image4 },
  { id: "7", name: "Mango Shea Body Butter", price: "GHS 55", image: image },
  { id: "8", name: "Unscented Shea Butter", price: "GHS 40", image: image2 },
];

const ProductCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productsList, setProductsList] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const filteredProducts = productsList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleDelete = (productId) => {
    const updated = productsList.filter((p) => p.id !== productId);
    setProductsList(updated);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updated = productsList.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProductsList(updated);
    setIsEditModalOpen(false);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 mt-5">
      {/* <h2 className="text-3xl font-bold text-[#964B00] text-center mb-6">
        Add, Edit and Delete Products
      </h2> */}

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 border border-[#964B00] rounded-full focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="block bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-[#964B00] relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transform transition hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-[#964B00] font-semibold text-lg mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 font-medium">{product.price}</p>
              </div>
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="text-[#964B00] p-2 rounded-full bg-white hover:bg-gray-200"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-[#964B00] p-2 rounded-full bg-white hover:bg-gray-200"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-[#964B00] font-medium">
            No products match your search.
          </p>
        )}
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleUpdateProduct}
        />
      )}
    </section>
  );
};

export default ProductCard;
