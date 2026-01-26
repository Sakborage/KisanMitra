import styles from "./OrderBarChart.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function OrderBarChart({ ordersByCategory }) {
  console.log(ordersByCategory);
  return (
    <>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>Orders by Category</h3>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={ordersByCategory}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="orderCount"
                fill="#9ccc65"
                stroke="none"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default OrderBarChart;
