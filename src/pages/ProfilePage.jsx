import React from "react";

const ProfilePage = () => {
  return (
    <form className="max-w-lg space-y-4">
      <h2 className="text-xl font-semibold text-[#964B00]">Update Profile</h2>
      <input
        type="text"
        className="w-full border p-2 rounded"
        placeholder="New Username"
      />
      <input type="file" className="w-full border p-2 rounded" />
      <button className="bg-[#964B00] text-white px-4 py-2 rounded hover:bg-[#7d3a00]">
        Update
      </button>
    </form>
  );
};

export default ProfilePage;
