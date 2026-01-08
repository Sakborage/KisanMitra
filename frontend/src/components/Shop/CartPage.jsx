import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../NavBar";
import CartItem from "./CartItem";
import BillSummary from "./BillSummary";
import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";
import styles from "./CartPage.module.css";

function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const [addressPayload, setAddressPayload] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const res = await axios.get("http://localhost:8080/cart", {
        withCredentials: true,
      });
      setCart(Array.isArray(res.data) ? res.data : []);
    } catch {
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  const placeOrder = async () => {
    if (!addressPayload) {
      alert("Please select address");
      return;
    }

    const payload = {
      paymentMethod,
      ...addressPayload,
    };

    console.log("FINAL ORDER PAYLOAD 👉", payload);

    await axios.post("http://localhost:8080/order", payload, {
      withCredentials: true,
    });

    alert("Order placed successfully ✅");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>
        <div className={styles.cartSection}>
          {cart.map((item) => (
            <CartItem key={item.cartItemId} item={item} />
          ))}
        </div>

        <div className={styles.billSection}>
          <AddressSection onChange={setAddressPayload} />
          <PaymentSection onChange={setPaymentMethod} />

          {cart.length > 0 && (
            <>
              <BillSummary
                items={cart}
                onPlaceOrder={placeOrder}
                disabled={!addressPayload}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
