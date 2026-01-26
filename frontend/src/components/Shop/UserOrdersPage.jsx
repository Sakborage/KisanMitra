import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../NavBar";
import OrderCard from "./OrderCard";
import styles from "./OrdersPage.module.css";

function UserOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8080/order", {
        withCredentials: true,
      });
      setOrders(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load orders", err);
      setOrders([]);
    }
  };
  const handleCancelOrder = async (orderId) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/order/${orderId}`,
        null, // no request body
        {
          params: {
            status: "CANCELLED",
          },
          withCredentials: true,
        },
      );
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderId === orderId ? { ...order, status: "CANCELLED" } : order,
        ),
      );
      console.log("Response:", res.data);
    } catch (err) {
      console.error("Failed to cancel order", err);
      alert("Failed to cancel order. Please try again.");
    }
  };

  const submitRating = async (productId, rating, orderId, comment) => {
    try {
      await axios.post(
        "http://localhost:8080/rating",
        {
          productId,
          rating,
          orderId,
          comment,
        },
        { withCredentials: true },
      );

      // Optional: update UI so user can't re-rate
      // setOrders((prev) =>
      //   prev.map((o) =>
      //     o.orderId === orderId ? { ...o, userRating: rating } : o,
      //   ),
      // );
    } catch (err) {
      console.error("Rating failed", err);
      alert("Failed to submit rating");
    }
  };

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h2 className={styles.title}>My Orders</h2>

        {orders.length === 0 ? (
          <p className={styles.empty}>You have no orders yet</p>
        ) : (
          orders.map((order) => (
            <OrderCard
              key={order.orderId}
              order={order}
              onCancelOrder={handleCancelOrder}
              onSubmitRating={submitRating}
            />
          ))
        )}
      </div>
    </>
  );
}

export default UserOrdersPage;
