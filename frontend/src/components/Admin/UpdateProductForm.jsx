import { useState } from "react";
import styles from "./UpdateProductForm.module.css";
import axios from "axios";

function UpdateProductForm({ product, onClose }) {
  const [formData, setFormData] = useState({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    price: product.price,
    weight: product.weight,
    stock: product.stock,
    productDetails: [...product.productDetails],
    cautions: [...product.cautions],
    img_url: product.img_url,
    vendor: product.vendor,
    status: product.status,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleListChange = (type, index, value) => {
    const updated = [...formData[type]];
    updated[index] = value;
    setFormData({ ...formData, [type]: updated });
  };

  const addItem = (type) => {
    setFormData({ ...formData, [type]: [...formData[type], ""] });
  };

  const removeItem = (type, index) => {
    setFormData({
      ...formData,
      [type]: formData[type].filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/admin/product`, formData, {
        withCredentials: true,
      });
      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Update Product</h3>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Product Name</label>
            <input name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className={styles.field}>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Category</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label>Weight (g)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label>Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label>Image URL</label>
            <input
              name="img_url"
              value={formData.img_url}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Vendor</label>
            <input
              name="vendor"
              value={formData.vendor}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
              <option value="DELETED">DELETED</option>
            </select>
          </div>

          {/* Product Details */}
          <div className={styles.listSection}>
            <label>Product Details</label>
            {formData.productDetails.map((item, index) => (
              <div key={index} className={styles.listRow}>
                <input
                  value={item}
                  onChange={(e) =>
                    handleListChange("productDetails", index, e.target.value)
                  }
                />
                <button
                  type="button"
                  onClick={() => removeItem("productDetails", index)}
                >
                  ✕
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addItem("productDetails")}>
              + Add Detail
            </button>
          </div>

          {/* Cautions */}
          <div className={styles.listSection}>
            <label>Cautions</label>
            {formData.cautions.map((item, index) => (
              <div key={index} className={styles.listRow}>
                <input
                  value={item}
                  onChange={(e) =>
                    handleListChange("cautions", index, e.target.value)
                  }
                />
                <button
                  type="button"
                  onClick={() => removeItem("cautions", index)}
                >
                  ✕
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addItem("cautions")}>
              + Add Caution
            </button>
          </div>

          <div className={styles.actions}>
            <button type="submit">Update</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProductForm;
