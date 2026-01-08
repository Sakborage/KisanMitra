import styles from "./OrderBarChart.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function OrderBarChart() {
  const data = [
    { category: "Seeds", orders: 60 },
    { category: "Fertilizers", orders: 45 },
    { category: "Equipment", orders: 30 },
  ];
  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>Orders by Category</h3>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={data}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#9ccc65" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default OrderBarChart;
