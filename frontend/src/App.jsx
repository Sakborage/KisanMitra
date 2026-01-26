import NavBarAdmin from "./components/Admin/NavBarAdmin";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import Section1 from "./components/Home/Section1";
import Section2 from "./components/Home/Section2";
import Section3 from "./components/Home/Section3";
import Navbar from "./components/NavBar";
import ItemDetailsFinal from "./components/Shop/ItemDetailsFinal";
import Shop from "./components/Shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Admin/Product";
import AddProduct from "./components/Admin/AddProduct";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CartPage from "./components/Shop/CartPage";
import CheckoutPage from "./components/Shop/CheckoutPage";
import AdminHome from "./components/Admin/AdminHome";
import OrdersPage from "./components/Admin/OrderPage";
import OrderDetailsPage from "./components/Admin/OrderDetailsPage";
import UserOrdersPage from "./components/Shop/UserOrdersPage";
import OrderDetailsPageUser from "./components/Shop/OrderDetailsPageUser";
import OrderDetailsPageAdmin from "./components/Admin/OrderDetailsPageAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/home" element={<Home />}></Route>

          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ItemDetailsFinal />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/order" element={<UserOrdersPage />}></Route>
          <Route
            path="/order/:orderNumber"
            element={<OrderDetailsPageUser />}
          />

          {/* <Route path="/product" element={<Product />} />
          <Route path="product/new" element={<AddProduct />} /> */}

          <Route path="/admin" element={<AdminHome />}></Route>

          <Route path="/admin/product" element={<Product />}></Route>
          <Route path="/admin/product/new" element={<AddProduct />} />
          <Route path="/admin/order" element={<OrdersPage />}></Route>
          <Route
            path="/admin/order/:orderNumber"
            element={<OrderDetailsPageAdmin />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
