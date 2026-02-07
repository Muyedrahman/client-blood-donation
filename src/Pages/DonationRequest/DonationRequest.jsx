import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const DonationRequest = () => {
  // =========================
  // State
  // =========================
  const [donationRequest, setDonationRequest] = useState([]);

  // =========================
  // Fetch Pending Donations
  // =========================
  useEffect(() => {
    const fetchPendingDonations = async () => {
      try {
        const status = "pending";
        const { data } = await axios.get(
          `https://blood-for-life.vercel.app/donation-requests/home/${status}`,
        );
        setDonationRequest(data);
      } catch (error) {
        console.error("Error fetching donation requests:", error);
      }
    };

    fetchPendingDonations();
  }, []);

  // =========================
  // JSX
  // =========================
  return (
    <div className="my-10 lg:my-20">
      <h2 className="text-4xl lg:text-5xl font-semibold lg:font-bold text-center mb-4 lg:mb-6">
        Donation Request Page
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Recipient Name</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {donationRequest.map((donation, index) => (
              <tr key={donation?._id} className="bg-base-200">
                <th>{index + 1}</th>

                <td>{donation?.recipientName}</td>

                <td>
                  {donation?.recipientUpazila}, {donation?.recipientDistrict}
                </td>

                <td>{donation?.donationDate}</td>

                <td>{donation?.donationTime}</td>

                <td>
                  <Link to={`/view-details/${donation?._id}`}>
                    <button className="btn btn-success btn-sm">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationRequest;

// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function DonationRequest() {
//   const [donationRequest, setDonationRequest] = useState([]);
//   useEffect(() => {
//     (async () => {
//       const status = 'pending';
//       const { data } = await axios.get(
//         `https://blood-for-life.vercel.app/donation-requests/home/${status}`
//       );
//       setDonationRequest(data);
//     })();
//   }, []);

//   return (
//     <div className="my-10 lg:my-20">
//       <h2 className="text-4xl lg:text-5xl font-semibold lg:font-bold text-center mb-4 lg:mb-6">
//         Donation Request Page
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th></th>
//               <th>Recipient Name</th>
//               <th>Location</th>
//               <th>Data</th>
//               <th>Time</th>
//               <th>Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {donationRequest.map((donation, index) => (
//               <tr key={donation?._id} className="bg-base-200">
//                 <th>{index + 1}</th>
//                 <td>{donation?.recipientName}</td>
//                 <td>
//                   {donation?.recipientUpazila}, {donation?.recipientDistrict}
//                 </td>
//                 <td>{donation?.donationDate}</td>
//                 <td>{donation?.donationTime}</td>
//                 <td>
//                   <Link to={`/view-details/${donation?._id}`}>
//                     <button className="btn btn-success">View Details</button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default DonationRequest;
