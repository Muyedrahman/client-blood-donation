import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Firebase/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(
          `https://blood-for-life.vercel.app/users/${user?.email}`,
        );
        if (data && data.length > 0) setUserData(data[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user?.email) fetchUserData();
  }, [user?.email]);

  return (
    <div className="mt-10 flex justify-center">
      <div className="text-center">
        <img
          src={userData.photoURL}
          alt="User Avatar"
          className="w-64 rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold">{userData.name}</h2>
        <p className="text-gray-600">{userData.email}</p>
      </div>
    </div>
  );
};

export default Profile;
