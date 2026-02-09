import React, { useState } from 'react';

const SearchPage = () => {
    const [bloodGroup, setBloodGroup] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazila, setSelectedUpazila] = useState("");

    const handleSearch = (e) => {
      e.preventDefault();
      console.log({ bloodGroup, selectedDistrict, selectedUpazila });
    };


  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-semibold mb-6">Search Donors</h2>

      <form onSubmit={handleSearch} className="space-y-4">
        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
        </select>

        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select District</option>
        </select>

        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedUpazila(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select Upazila</option>
        </select>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPage;