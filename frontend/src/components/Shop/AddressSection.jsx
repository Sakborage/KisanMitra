import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AddressSection.module.css";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

function AddressSection({ onChange }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/address", { withCredentials: true })
      .then((res) => setAddresses(res.data || []))
      .finally(() => setLoading(false));
  }, []);

  const selectSaved = (addr) => {
    setSelectedId(addr.id);
    onChange({ userAddressId: addr.id });
    setShowForm(false);
  };

  const useNew = (address) => {
    setSelectedId(null);
    onChange(address);
    setShowForm(false);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4>Delivery Address</h4>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close" : "+ Add New"}
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {!showForm &&
        addresses.map((addr) => (
          <AddressCard
            key={addr.id}
            address={addr}
            selected={addr.id === selectedId}
            onSelect={() => selectSaved(addr)}
          />
        ))}

      {showForm && <AddressForm onUse={useNew} />}
    </div>
  );
}

export default AddressSection;
