import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";
import OrderSummary from "./OrderSummary";
import styles from "./CheckoutPage.module.css";
import Navbar from "../NavBar";

function CheckoutPage() {
  return (
    <>
      <Navbar />

      <div className={styles.page}>
        <div className={styles.layout}>
          {/* LEFT */}
          <div className={styles.left}>
            <AddressSection />
            <PaymentSection />
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
