import React, { useState } from "react";

const EditProductModal = ({ product, onClose, onSave }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [imagePreview, setImagePreview] = useState(product.image);
  const [newImageFile, setNewImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name,
      price,
      image: newImageFile ? URL.createObjectURL(newImageFile) : product.image,
    };
    onSave(updatedProduct);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-[90%] max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-[#964B00]">Edit Product</h2>

        <label className="block">
          <span className="text-[#964B00]">Name</span>
          <input
            className="w-full border border-[#964B00] rounded p-2 mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="text-[#964B00]">Price</span>
          <input
            className="w-full border border-[#964B00] rounded p-2 mt-1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label className="block">
          <span className="text-[#964B00]">Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1"
          />
        </label>

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-40 object-cover rounded mt-2"
          />
        )}

        <div className="flex justify-end space-x-2 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded text-[#964B00] border-[#964B00] hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#964B00] text-white rounded hover:bg-[#7a3d00]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductModal;
