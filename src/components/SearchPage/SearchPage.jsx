import React, { useEffect, useState } from 'react';

const SearchPage = () => {
   const [bloodGroup, setBloodGroup] = useState("");
   const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
   const [selectedDistrict, setSelectedDistrict] = useState("");
   const [selectedUpazila, setSelectedUpazila] = useState("");

   useEffect(() => {
     const fetchDistricts = async () => {
       const res = await fetch("/districts.jsone");
       const data = (await res).json;
       setDistricts(data[2].data);
     };
     fetchDistricts();
   }, []);

   useEffect(() => {
     const fetchUpazilas = async () => {
       const res = await fetch("/upazilas.json");
       const data = await res.json();
       setUpazilas(data[2].data);
     };
     fetchUpazilas();
   }, []);

   const handleSearch = (e) => {
     e.preventDefault();
     console.log({ bloodGroup, selectedDistrict, selectedUpazila });
   };


  return (
    <div className="container my-10 mx-auto">
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
          {districts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name}
            </option>
          ))}
        </select>

        <select
          value={selectedUpazila}
          onChange={(e) => setSelectedUpazila(e.target.value)}
          // border p-2 w-full
          className="border p-2 w-full"
        >
          <option value="">Select Upazila</option>
          {upazilas.map((upazila) => (
            <option key={upazila.id} value={upazila.id}>
              {upazila.name}
            </option>
          ))}
        </select>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPage;