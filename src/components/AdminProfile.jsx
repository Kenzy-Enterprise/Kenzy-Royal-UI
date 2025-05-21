import React, { useState } from "react";
import { toast } from "react-hot-toast"; // ✅ Import toast

const AdminProfile = () => {
  const [username, setUsername] = useState("Alice Johnson");
  const [profileImage, setProfileImage] = useState(null);
  const [newUsername, setNewUsername] = useState(username);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUsername(newUsername);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full bg-[#F7DC6F] text-[#964B00] flex items-center justify-center text-3xl font-bold overflow-hidden">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            getInitials(username)
          )}
        </div>

        <label className="text-sm cursor-pointer text-[#964B00] hover:underline">
          Change Profile Picture
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#964B00]"
        />

        <button
          onClick={handleSave}
          className="bg-[#964B00] text-white px-6 py-2 rounded-md hover:bg-[#7a3d00] text-sm"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
