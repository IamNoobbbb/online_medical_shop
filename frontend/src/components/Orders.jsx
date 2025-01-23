import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = () => {
    const { token, backendUrl } = useContext(ShopContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            if (token) {
                try {
                    const response = await axios.get(`${backendUrl}/api/orders`, { headers: { token } });
                    if (response.data.success) {
                        setOrders(response.data.orders);
                    } else {
                        toast.error(response.data.message);
                    }
                } catch (error) {
                    console.log(error);
                    toast.error(error.message);
                }
            }
        };

        fetchOrders();
    }, [token, backendUrl]);

    return (
        <div>
            <h1>My Orders</h1>
            {orders.length > 0 ? (
                <ul>
                    {orders.map(order => (
                        <li key={order._id}>
                            <p>Order ID: {order._id}</p>
                            <p>Total: {order.total}</p>
                            <p>Status: {order.status}</p>
                            {/* Add more order details as needed */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No orders found.</p>
            )}
        </div>
    );
};

export default Orders;