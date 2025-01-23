import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';

const Offer = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1="OFFER ZONE" />
      </div>

      <div className="my-10 flex flex-wrap justify-center gap-6 mb-28">
        {/* Offer Card 1 */}
        <div className="border rounded-lg p-4 shadow-md flex flex-col max-w-[300px]">
          <div className="flex items-center gap-4">
            <div className="bg-[#068082]-100 text-green-600 font-bold text-sm p-2 rounded">
              10% OFF
            </div>
            <p className="text-gray-700 font-medium text-sm">
              Get extra 10% Off on Everherb, Liveasy or PharmEasy products
            </p>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Buy 2 same products of Everherb or Liveasy or PharmEasy and get additional 10% Off
          </p>
         
        </div>

        
        <div className="border rounded-lg p-4 shadow-md flex flex-col max-w-[300px]">
          <div className="flex items-center gap-4">
            <div className="bg-[#068082] text-white font-bold text-sm p-2 rounded">
              Upto ₹250 Cashback
            </div>
            <p className="text-gray-700 font-medium text-sm">
              Get Upto ₹250 cashback using CRED pay UPI
            </p>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Offer valid on transactions above Rs. 999
          </p>
          
        </div>
        <div className="border rounded-lg p-4 shadow-md flex flex-col max-w-[300px]">
          <div className="flex items-center gap-4">
            <div className="bg-[#068082] text-white font-bold text-sm p-2 rounded">
              Upto ₹250 Cashback
            </div>
            <p className="text-gray-700 font-medium text-sm">
              Get Upto ₹250 cashback using CRED pay UPI
            </p>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Offer valid on transactions above Rs. 999
          </p>
          
        </div>
        <div className="border rounded-lg p-4 shadow-md flex flex-col max-w-[300px]">
          <div className="flex items-center gap-4">
            <div className="bg-[#068082] text-white font-bold text-sm p-2 rounded">
              Upto ₹250 Cashback
            </div>
            <p className="text-gray-700 font-medium text-sm">
              Get Upto ₹250 cashback using CRED pay UPI
            </p>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Offer valid on transactions above Rs. 999
          </p>
        </div>
        <div className="border rounded-lg p-4 shadow-md flex flex-col max-w-[300px]">
          <div className="flex items-center gap-4">
            <div className="bg-[#068082] text-white font-bold text-sm p-2 rounded">
              Upto ₹250 Cashback
            </div>
            <p className="text-gray-700 font-medium text-sm">
              Get Upto ₹250 cashback using CRED pay UPI
            </p>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Offer valid on transactions above Rs. 999
          </p>
          
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Offer;
