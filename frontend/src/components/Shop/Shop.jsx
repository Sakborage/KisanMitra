import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import SearchBar from "./SearchBar";
import PromoSection from "./PromoSection";
import ItemList from "./ItemList";
import { Outlet } from "react-router-dom";
import { useCart } from "../CartContext";
import { fetchCartCount } from "../fetchCartCount";

function Shop() {
  const { setCartCount } = useCart();

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCount();
  }, []);

  const loadCount = async () => {
    try {
      const count = await fetchCartCount();
      setCartCount(count);
    } catch {
      setCartCount(0);
    }
  };
  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:8080/product", {
        params: {
          search: query, // backend handles filtering
        },
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [query]);

  return (
    <>
      <NavBar />
      <SearchBar query={query} setQuery={setQuery} />
      <PromoSection />
      {console.log(data)}
      <ItemList items={data} loading={loading} />
    </>
  );
}

export default Shop;
