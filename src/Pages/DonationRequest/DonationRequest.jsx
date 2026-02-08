import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DonationTable from "../components/DonationTable";

const DonationRequest = () => {
   const [donationRequest, setDonationRequest] = useState([]);

   useEffect(() => {
     (async () => {
       const status = "pending";
       const { data } = await axios.get(
         `https://blood-for-life.vercel.app/donation-requests/home/${status}`,
       );
       setDonationRequest(data);
     })();
   }, []);


  return (
    <div className="my-10 lg:my-20">
      <h2 className="text-4xl lg:text-5xl font-semibold text-center mb-6">
        Donation Request Page
      </h2>

      <DonationTable donationRequest={donationRequest} />
    </div>
  );
};

export default DonationRequest;