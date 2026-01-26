import styles from "./OrderDetailsPage.module.css";
import OrderItemsList from "./OrderItemsList";
import OrderTimeline from "./OrderTimeline";
import OrderSummary from "./OrderSummary";
import NavBarAdmin from "./NavBarAdmin";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function OrderDetailsPage() {
  const { orderNumber } = useParams();
  console.log(orderNumber);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/order/${orderNumber}`, {
        withCredentials: true,
      })
      .then((res) => setOrder(res.data))
      .catch(console.error);
  }, [orderNumber]);

  console.log(order);

  if (!order) return <p>Loading...</p>;

  return (
    <>
      {" "}
      <div className={styles.page}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <OrderItemsList items={order.oderItems} status={order.status} />
          <OrderTimeline status={order.status} />
        </div>

        {/* RIGHT SIDE */}
        <OrderSummary order={order} />
      </div>
    </>
  );
}

export default OrderDetailsPage;
