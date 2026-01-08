import NavBarAdmin from "./NavBarAdmin";
import OrderAnalysis from "./OrderAnalysis";
import OrderBarChart from "./OrdersBarChart";
import StatCard from "./StatCard";
import TopSellingProducts from "./TopSellingProducts";

function Home() {
  return (
    <>
      <NavBarAdmin />
      <StatCard />
      <OrderAnalysis />
    </>
  );
}

export default Home;
