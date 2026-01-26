import Navbar from "../NavBar";
import Footer from "./Footer";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section1 from "./Section1";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8080/TopProduct", {
          withCredentials: true,
        });
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 products={products} loading={loading} />
      <Section3 />
      <Footer />
    </div>
  );
}

export default Home;
