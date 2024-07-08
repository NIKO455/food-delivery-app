import {useEffect, useState} from "react";

export const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const email = localStorage.getItem('userEmail');
                const response = await fetch('http://localhost:5000/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email}),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }

                const data = await response.json();
                setOrders(data.orderData);

            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);


    return (
        <>
            {orders.map((order, index) => (
                <li key={index}>
                    Order Data: {JSON.stringify(order.name)}
                </li>
            ))}
        </>
    );
};
