import { useState } from "react";
import styles from "./AddressForm.module.css";

function AddressForm({ onUse }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.form}>
      <input name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input name="phone" placeholder="Mobile Number" onChange={handleChange} />
      <input
        name="addressLine1"
        placeholder="Address Line 1"
        onChange={handleChange}
      />
      <input
        name="addressLine2"
        placeholder="Address Line 2"
        onChange={handleChange}
      />
      <input name="city" placeholder="City" onChange={handleChange} />
      <input name="state" placeholder="State" onChange={handleChange} />
      <input name="pincode" placeholder="Pincode" onChange={handleChange} />

      <button className={styles.save} onClick={() => onUse(form)}>
        Use This Address
      </button>
    </div>
  );
}

export default AddressForm;
