import React from "react";
import ItemCard from "./ItemCard";
import "./ItemList.css";

const ItemList = ({ items, loading }) => {
  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="item-list">
      {items && items.length > 0 ? (
        items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            img={item.img_url}
            name={item.name}
            vendor={item.vendor}
            weight={item.weight}
            price={item.price}
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ItemList;
