import styles from "./OrderTimeline.module.css";

const STEPS = ["PLACED", "SHIPPED", "DELIVERED"];

function OrderTimeline({ status }) {
  const currentStep = STEPS.indexOf(status);

  return (
    <div className={styles.card}>
      <h3>Order Status</h3>

      <div className={styles.timeline}>
        {STEPS.map((step, index) => {
          const isActive = index <= currentStep;

          return (
            <div key={step} className={styles.stepWrapper}>
              {/* connector line */}
              {index !== 0 && (
                <div
                  className={`${styles.line} ${
                    isActive ? styles.activeLine : ""
                  }`}
                />
              )}

              {/* step */}
              <div
                className={`${styles.step} ${isActive ? styles.active : ""}`}
              >
                <span className={styles.dot}></span>
                <span className={styles.label}>{step}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderTimeline;
