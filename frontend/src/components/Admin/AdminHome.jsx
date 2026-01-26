import { useEffect, useState } from "react";
import NavBarAdmin from "./NavBarAdmin";
import OrderAnalysis from "./OrderAnalysis";
import OrderBarChart from "./OrdersBarChart";
import StatCard from "./StatCard";
import TopSellingProducts from "./TopSellingProducts";
import axios from "axios";

function AdminHome() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const res = await axios.get("http://localhost:8080/admin/", {
          withCredentials: true,
        });
        setDashboard(res.data);
      } catch (err) {
        console.error("Failed to load dashboard", err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (!dashboard) return <p>No data</p>;

  return (
    <>
      <NavBarAdmin />
      <StatCard
        totalOrders={dashboard.totalOrders}
        totalUsers={dashboard.totalUsers}
        totalProducts={dashboard.totalProducts}
      />
      <OrderAnalysis
        ordersByCategory={dashboard.ordersByCategory}
        topSellingProducts={dashboard.topSellingProducts}
      />
    </>
  );
}

export default AdminHome;
