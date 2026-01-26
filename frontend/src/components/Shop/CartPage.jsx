import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar";
import CartItem from "./CartItem";
import BillSummary from "./BillSummary";
import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";
import styles from "./CartPage.module.css";
import SimilarProducts from "./SimilarProducts";

function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const [addressPayload, setAddressPayload] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const [similarProducts, setSimilarProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const res = await axios.get("http://localhost:8080/cart", {
        withCredentials: true,
      });
      console.log("cartData:", res.data);
      setCart(Array.isArray(res.data) ? res.data : []);
      const cartData = Array.isArray(res.data) ? res.data : [];
      if (cartData.length > 0) {
        fetchSimilarProducts(cartData[0].productId);
      }
    } catch {
      setCart([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchSimilarProducts = async (productId) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/product/${productId}/similar`,
        { withCredentials: true },
      );
      console.log("Similar products response:", res.data);
      setSimilarProducts(res.data);
    } catch (err) {
      console.error("Error fetching similar products:", err);
    }
  };

  const increaseQty = async (id, qty) => {
    try {
      await axios.put(`http://localhost:8080/cart/${id}`, null, {
        params: { quantity: qty + 1 },
        withCredentials: true,
      });
      loadCart();
    } catch (err) {
      console.error("Increase qty failed", err);
    }
  };

  const decreaseQty = async (id, qty) => {
    try {
      if (qty === 1) {
        await axios.delete(`http://localhost:8080/cart/${id}`, {
          withCredentials: true,
        });
      } else {
        await axios.put(`http://localhost:8080/cart/${id}`, null, {
          params: { quantity: qty - 1 },
          withCredentials: true,
        });
      }
      loadCart();
    } catch (err) {
      console.error("Decrease qty failed", err);
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

    console.log("FINAL ORDER PAYLOAD", payload);

    await axios.post("http://localhost:8080/order", payload, {
      withCredentials: true,
    });

    alert("Order placed successfully ");
    navigate("/shop");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>
        {/* CART HAS ITEMS */}
        {cart.length > 0 ? (
          <>
            <div className={styles.cartSection}>
              {cart.map((item) => (
                <CartItem
                  key={item.cartItemId}
                  item={item}
                  onIncrease={increaseQty}
                  onDecrease={decreaseQty}
                />
              ))}
              {similarProducts.length > 0 && (
                <SimilarProducts products={similarProducts} />
              )}
            </div>

            <div className={styles.billSection}>
              <AddressSection onChange={setAddressPayload} />
              <PaymentSection onChange={setPaymentMethod} />

              <BillSummary
                items={cart}
                onPlaceOrder={placeOrder}
                disabled={!addressPayload}
              />
            </div>
          </>
        ) : (
          /* EMPTY CART */
          <div className={styles.emptyCart}>
            <h2>Your cart is empty 🛒</h2>
            <p>Add items to place an order</p>

            <button
              className={styles.shopBtn}
              onClick={() => navigate("/shop")}
            >
              Browse Products
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
