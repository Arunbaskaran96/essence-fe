import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import WhishList from "./pages/wishlist/WhishList";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import ProductView from "./pages/productView/ProductView";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import PaymentSuccess from "./pages/paymet/PaymentSuccess";
import PaymentFailure from "./pages/paymet/PaymentFailure";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="wishlist" element={<WhishList />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/productview/:id" element={<ProductView />} />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/paymentsuccess/:id"
            element={
              <ProtectedRoute>
                <PaymentSuccess />
              </ProtectedRoute>
            }
          />
          <Route
            path="/paymentfailure"
            element={
              <ProtectedRoute>
                <PaymentFailure />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
