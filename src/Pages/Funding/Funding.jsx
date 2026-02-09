import React from 'react';
import { Link } from 'react-router-dom';

const Funding = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex justify-between items-center my-8">
        <h1 className="text-2xl font-bold">Funding Page</h1>
        <Link to="/checkout">
          <button className="btn btn-primary">Donate some Money</button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>{/* Fundings will be displayed here */}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Funding;