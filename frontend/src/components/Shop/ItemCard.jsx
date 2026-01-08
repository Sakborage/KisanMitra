import React from "react";
import "./ItemCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const formatWeight = (weight) => {
  if (!weight) return "";
  return weight >= 1000 ? `${(weight / 1000).toFixed(1)} kg` : `${weight} g`;
};

const ItemCard = ({ id, img, name, vendor, rating, weight, price }) => {
  const navigate = useNavigate();

  // Navigate to product detail page
  const handleCardClick = () => {
    navigate(`/shop/${id}`);
  };

  // Add to cart handler
  const handleAddToCart = async (e) => {
    e.stopPropagation(); // 🔥 prevent card click navigation

    try {
      await axios.post("http://localhost:8080/cart", null, {
        params: {
          productId: id,
          quantity: 1,
        },
        withCredentials: true,
      });
      alert("Product added to cart");
    } catch (err) {
      console.error("Add to cart failed", err);
      alert("Please login to add product to cart");
    }
  };

  return (
    <div className="item-card" onClick={handleCardClick}>
      <img src={img} alt={name} className="item-img" />

      <h4 className="item-name">{name}</h4>
      <p className="item-vendor">{vendor}</p>
      <p className="item-weight">{formatWeight(weight)}</p>

      <div className="item-bottom">
        <span className="item-price">₹{price}</span>
        <button className="add-btn" onClick={handleAddToCart}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
