import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const statusColors = {
  "Order Placed": "bg-[#afb0f5]",
  "Packing": "bg-[#ffbf00]",
  "Shipped": "bg-[#ffbf00]",
  "Out for delivery": "bg-green-300",
  "Delivered": "bg-[#23aeb1]",
};

const Orders = () => {
  const { backendUrl, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        console.log('No token available');
        return;
      }

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const allOrdersItem = response.data.orders.map((order) => ({
          _id: order._id,
          status: order.status,
          paymentMethod: order.paymentMethod,
          date: order.date,
          amount: order.amount,
          address: order.address,
          items: order.items || [],
        }));

        setOrderData(allOrdersItem.reverse());
      } else {
        console.log('Failed to fetch orders:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div>
        {orderData.length > 0 ? (
          orderData.map((order, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row gap-4 items-start md:items-center"
            >
              {/* Order Details */}
              <div className="text-sm md:w-4/5">
                <p className="sm:text-base font-medium">Order ID: {order._id}</p>
                <p>Amount: ₹{order.amount}</p>
                <p>Payment Method: {order.paymentMethod}</p>
                <p>
                  Date: <span className="text-gray-400">{new Date(order.date).toDateString()}</span>
                </p>
                <p>
                  Address: {order.address.firstName} {order.address.lastName},{' '}
                  {order.address.street}, {order.address.city},{' '}
                  {order.address.state}, {order.address.zipcode},{' '}
                  {order.address.country}.
                </p>

                {order.items.length > 0 && (
                  <div className="mt-4">
                    <p className="font-medium">Items:</p>
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 mt-2">
                        {item.image ? (
                          <img
                            className="w-16 sm:w-20"
                            src={item.image[0]}
                            alt={item.name}
                          />
                        ) : (
                          <div className="w-16 sm:w-20 bg-gray-200 flex items-center justify-center">
                            <p>No Image</p>
                          </div>
                        )}
                        <div>
                          <p className="sm:text-base font-medium">{item.name}</p>
                          <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                            <p>₹{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Status Button */}
              <div className="md:w-1/5 flex justify-end">
                <button
                    className={`px-4 py-2 text-white font-medium rounded-md ${statusColors[order.status] || "bg-gray-100 text-gray-700"}`}
                >
                    {order.status}
                </button>
            </div>

            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
