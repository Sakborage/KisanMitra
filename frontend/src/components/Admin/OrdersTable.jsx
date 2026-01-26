import axios from "axios";
import styles from "./OrdersTable.module.css";
import { useNavigate } from "react-router-dom";

const ORDER_FLOW = {
  PLACED: ["SHIPPED", "CANCELLED"],
  SHIPPED: ["DELIVERED"],
  DELIVERED: [],
  CANCELLED: [],
};

function OrdersTable({ orders, setOrders }) {
  const navigate = useNavigate();
  const handleStatusChange = async (order, newStatus) => {
    let updatedPaymentStatus = order.paymentStatus;

    // COD → payment success only after delivery
    if (order.paymentMethod === "COD" && newStatus === "DELIVERED") {
      updatedPaymentStatus = "SUCCESS";
    }

    try {
      await axios.put(
        "http://localhost:8080/admin/order",
        {
          orderNumber: order.orderNumber,
          orderStatus: newStatus,
          paymentStatus: updatedPaymentStatus,
        },
        { withCredentials: true },
      );

      // update UI instantly
      setOrders((prev) =>
        prev.map((o) =>
          o.orderNumber === order.orderNumber
            ? {
                ...o,
                orderStatus: newStatus,
                paymentStatus: updatedPaymentStatus,
              }
            : o,
        ),
      );
    } catch (err) {
      console.error("Failed to update order", err);
    }
  };

  return (
    <div className={styles.tableCard}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Payment Status</th>
            <th>Order Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.orderNumber}>
              {console.log(o)}
              <td className={styles.orderId}>{o.orderNumber}</td>
              <td>{o.userName}</td>
              <td>{new Date(o.date).toLocaleDateString()}</td>
              <td className={styles.amount}>₹{o.amount}</td>
              <td>{o.paymentMethod}</td>
              {/* Payment Status */}
              <td>
                <span
                  className={`${styles.badge} ${styles[o.paymentStatus.toLowerCase()]}`}
                >
                  {o.paymentStatus}
                </span>
              </td>
              {/* Order Status Dropdown */}
              <td>
                <select
                  className={styles.statusSelect}
                  value={o.orderStatus}
                  disabled={["DELIVERED", "CANCELLED"].includes(o.orderStatus)}
                  onChange={(e) => handleStatusChange(o, e.target.value)}
                >
                  <option value={o.orderStatus}>{o.orderStatus}</option>
                  {ORDER_FLOW[o.orderStatus]?.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  className={styles.viewBtn}
                  onClick={() => navigate(`/admin/order/${o.orderNumber}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
