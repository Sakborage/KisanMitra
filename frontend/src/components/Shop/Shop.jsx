import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import SearchBar from "./SearchBar";
import PromoSection from "./PromoSection";
import ItemList from "./ItemList";
import { Outlet } from "react-router-dom";

function Shop() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
