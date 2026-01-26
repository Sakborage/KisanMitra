import axios from "axios";

export const fetchCartCount = async () => {
  const res = await axios.get("http://localhost:8080/cartCount", {
    withCredentials: true,
  });
  return res.data;
};
