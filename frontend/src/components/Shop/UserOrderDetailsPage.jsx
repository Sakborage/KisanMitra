import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import OrderHeader from "./components/OrderHeader";
import OrderItems from "./components/OrderItems";
import OrderStatus from "./components/OrderStatus";
import AddressInfo from "./components/AddressInfo";
import PaymentInfo from "./components/PaymentInfo";
import InvoiceButton from "./components/InvoiceButton";

import styles from "./UserOrderDetailsPage.module.css";

function UserOrderDetailsPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/order/${orderId}`, {
        withCredentials: true,
      })
      .then((res) => setOrder(res.data))
      .catch(console.error);
  }, [orderId]);

  if (!order) return <p>Loading...</p>;

  return (
    <div className={styles.page}>
      <OrderHeader orderId={order.orderId} />

      <div className={styles.main}>
        <div className={styles.left}>
          <OrderItems items={order.items} />
          <OrderStatus status={order.status} />
        </div>

        <div className={styles.right}>
          <AddressInfo address={order.address} />
          <PaymentInfo order={order} />
          <InvoiceButton order={order} />
        </div>
      </div>
    </div>
  );
}

export default UserOrderDetailsPage;
