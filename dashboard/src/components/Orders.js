import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Dynamic URL fallback logic
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3002";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    axios.get(`${BACKEND_URL}/allOrders`).then((res) => {
      setOrders(res.data || []);
    });
  };

  useEffect(() => {
    fetchOrders();
    const handler = () => fetchOrders();
    window.addEventListener("ordersUpdated", handler);
    return () => window.removeEventListener("ordersUpdated", handler);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, idx) => (
              <tr key={o._id || idx}>
                <td>{o.name}</td>
                <td>{o.qty}</td>
                <td>{Number(o.price).toFixed(2)}</td>
                <td>{o.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;