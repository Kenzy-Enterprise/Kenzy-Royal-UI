// src/components/AddProductForm.jsx
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddProductForm = ({ onClose }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      productName,
      productPrice,
      productDescription,
      productImage,
    });
    toast.success("Product added successfully!");
    onClose?.(); // Close modal after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow border border-[#964B00] space-y-4"
    >
      <h2 className="text-2xl font-bold text-[#964B00] text-center">
        Add New Product
      </h2>

      <div>
        <label className="block mb-1 text-[#964B00]">Product Name</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded-lg border-[#964B00] focus:ring-[#F7DC6F]"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-[#964B00]">Product Price (GHS)</label>
        <input
          type="number"
          className="w-full border px-3 py-2 rounded-lg border-[#964B00]"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-[#964B00]">Product Description</label>
        <textarea
          className="w-full border px-3 py-2 rounded-lg border-[#964B00]"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-[#964B00]">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border px-3 py-2 rounded-lg border-[#964B00]"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-[#964B00] text-white px-6 py-2 rounded-full hover:bg-[#F7DC6F] hover:text-black transition"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
