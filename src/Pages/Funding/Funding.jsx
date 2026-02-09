import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Funding = () => {
    const [fundings, setFundings] = useState([]);

    useEffect(() => {
      const fetchFundings = async () => {
        const response = await axios.get(
          "https://blood-for-life.vercel.app/fundings",
        );
        setFundings(response.data);
      };

      fetchFundings();
    }, []);
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
          <tbody>
            {fundings.map((funding) => (
              <tr key={funding.id}>
                <td className="py-2 px-4 border-b">{funding.name}</td>
                <td className="py-2 px-4 border-b">{funding.amount}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(funding.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funding;