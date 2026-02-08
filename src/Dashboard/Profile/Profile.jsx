import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Firebase/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [editable, setEditable] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(
          `https://blood-for-life.vercel.app/users/${user?.email}`
        );
        if (data && data.length > 0) setUserData(data[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (user?.email) fetchUserData();
  }, [user?.email]);

  // Fetch district data
  useEffect(() => {
    (async () => {
      const res = await fetch("/districts.json");
      const data = await res.json();
      setDistricts(data[2].data);
    })();
  }, []);

  // Fetch upazila data
  useEffect(() => {
    (async () => {
      const res = await fetch("/upazilas.json");
      const data = await res.json();
      setUpazilas(data[2].data);
    })();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-10 max-w-4xl mx-auto">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setEditable(!editable)}
          className={`px-4 py-2 rounded font-semibold ${
            editable ? "bg-red-500 text-white" : "bg-blue-600 text-white"
          }`}
        >
          {editable ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="text-center mb-6">
        <img
          src={userData.photoURL}
          alt="User Avatar"
          className="w-64 rounded-lg mb-4 mx-auto"
        />
        <h2 className="text-2xl font-bold">{userData.name}</h2>
        <p className="text-gray-600">{userData.email}</p>
      </div>

      <form className="bg-gray-100 p-4 rounded space-y-4">
        <div>
          <label>District</label>
          <select
            name="district"
            value={userData.district || ""}
            onChange={handleChange}
            disabled={!editable}
            className="w-full p-2 border rounded"
          >
            <option value="">Select District</option>
            {districts.map((d) => (
              <option key={d.id} value={d.bn_name}>
                {d.bn_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Upazila</label>
          <select
            name="upazila"
            value={userData.upazila || ""}
            onChange={handleChange}
            disabled={!editable}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Upazila</option>
            {upazilas.map((u) => (
              <option key={u.id} value={u.bn_name}>
                {u.bn_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Blood Group</label>
          <select
            name="bloodGroup"
            value={userData.bloodGroup || ""}
            onChange={handleChange}
            disabled={!editable}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Profile;
