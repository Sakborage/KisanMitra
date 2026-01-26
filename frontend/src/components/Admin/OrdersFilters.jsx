import styles from "./OrdersFilters.module.css";

function OrdersFilters({
  search,
  setSearch,
  status,
  setStatus,
  paymentStatus,
  setPaymentStatus,
  sort,
  setSort,
}) {
  return (
    <div className={styles.filters}>
      <input
        type="text"
        placeholder="Search by name or order ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ALL">All Status</option>
        <option value="PENDING">Pending</option>
        <option value="PLACED">Placed</option>
        <option value="SHIPPED">Shipped</option>
        <option value="DELIVERED">Delivered</option>
        <option value="CANCELLED">Cancelled</option>
      </select>

      <select
        value={paymentStatus}
        onChange={(e) => setPaymentStatus(e.target.value)}
      >
        <option value="ALL">All Payments</option>
        <option value="SUCCESS">Paid</option>
        <option value="PENDING">Pending</option>
        <option value="FAILED">Failed</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="NEWEST">Newest First</option>
        <option value="OLDEST">Oldest First</option>
      </select>
    </div>
  );
}

export default OrdersFilters;
