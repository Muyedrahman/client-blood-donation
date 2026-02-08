import React,  from 'react';
import { Link } from 'react-router-dom';


const DonationRequest = () => {


  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Recipient Name</th>
            <th>Location</th>
            <th>Data</th>
            <th>Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {DonationRequest.map((donation, index) => (
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
                  <button className="btn btn-success">View Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationRequest;