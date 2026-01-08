import ItemDetail from "./ItemDetail";
import SimilarProducts from "./SimilarProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../NavBar";

function ItemDetailsFinal() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch main product
  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:8080/product/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  // Fetch similar products once product is available
  useEffect(() => {
    if (!product?.category) return;

    axios
      .get(`http://localhost:8080/product/${id}/similar`, {
        withCredentials: true,
      })
      .then((res) => {
        setSimilarProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching similar products:", err);
      });
  }, [product, id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <Navbar />
      <ItemDetail product={product} />
      <SimilarProducts products={similarProducts} />
    </div>
  );
}

export default ItemDetailsFinal;
