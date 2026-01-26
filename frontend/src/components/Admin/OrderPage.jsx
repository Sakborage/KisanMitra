import { useEffect, useState } from "react";
import axios from "axios";
import OrdersFilters from "./OrdersFilters";
import OrdersTable from "./OrdersTable";
import styles from "./OrderPage.module.css";
import NavBarAdmin from "./NavBarAdmin";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");
  const [paymentStatus, setPaymentStatus] = useState("ALL");
  const [sort, setSort] = useState("NEWEST");

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search, status, paymentStatus, sort, orders]);

  const fetchOrders = async () => {
    const res = await axios.get("http://localhost:8080/admin/order", {
      withCredentials: true,
    });
    setOrders(res.data);
  };

  const applyFilters = () => {
    let data = [...orders];

    // Search
    if (search) {
      data = data.filter(
        (o) =>
          o.userName.toLowerCase().includes(search.toLowerCase()) ||
          o.orderNumber.toString().includes(search),
      );
    }

    // Order Status
    if (status !== "ALL") {
      data = data.filter((o) => o.orderStatus === status);
    }

    // Payment Status
    if (paymentStatus !== "ALL") {
      data = data.filter((o) => o.paymentStatus === paymentStatus);
    }

    // Sort
    data.sort((a, b) =>
      sort === "NEWEST"
        ? new Date(b.orderDate) - new Date(a.orderDate)
        : new Date(a.orderDate) - new Date(b.orderDate),
    );

    setFilteredOrders(data);
  };

  return (
    <>
      <NavBarAdmin />
      <div className={styles.page}>
        <h2>Orders Management</h2>

        <OrdersFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          paymentStatus={paymentStatus}
          setPaymentStatus={setPaymentStatus}
          sort={sort}
          setSort={setSort}
        />

        <OrdersTable orders={filteredOrders} setOrders={setFilteredOrders} />
      </div>
    </>
  );
}

export default OrdersPage;
