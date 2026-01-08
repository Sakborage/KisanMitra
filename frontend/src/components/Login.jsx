import { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams();
      params.append("username", formData.email);
      params.append("password", formData.password);

      await axios.post("http://localhost:8080/login", params, {
        withCredentials: true,
      });
      navigate("/shop");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Kisan Mitra</h2>
        <p className={styles.subtitle}>Login to your account</p>

        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className={styles.loginBtn} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Sign up section */}
        <div className={styles.signupSection}>
          <span>Don’t have an account?</span>
          <button
            type="button"
            className={styles.signupBtn}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>

        <p className={styles.footerText}>
          Empowering farmers with smart solutions 🌾
        </p>
      </div>
    </div>
  );
}

export default Login;
