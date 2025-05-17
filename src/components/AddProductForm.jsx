import React, { useState } from "react";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, like sending data to the backend
    console.log({
      productName,
      productPrice,
      productImage,
    });
  };

  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold text-[#964B00] text-center mb-6">
        Add New Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md border border-[#964B00]"
      >
        <div className="mb-6">
          <label
            htmlFor="productName"
            className="block text-lg font-medium text-[#964B00] mb-2"
          >
            Product Name
          </label>
          <input
            id="productName"
            type="text"
            className="w-full px-4 py-2 border border-[#964B00] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="productPrice"
            className="block text-lg font-medium text-[#964B00] mb-2"
          >
            Product Price (GHS)
          </label>
          <input
            id="productPrice"
            type="number"
            className="w-full px-4 py-2 border border-[#964B00] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="productImage"
            className="block text-lg font-medium text-[#964B00] mb-2"
          >
            Upload Product Image
          </label>
          <input
            id="productImage"
            type="file"
            accept="image/*"
            className="w-full px-4 py-2 border border-[#964B00] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-[#964B00] text-white rounded-full hover:bg-[#F7DC6F] focus:outline-none focus:ring-2 focus:ring-[#964B00]"
          >
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProductForm;
