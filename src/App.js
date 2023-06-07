import { Route, Routes } from "react-router-dom";
import "./App.css";
import './utils.css'
import { Home } from "./Pages/Home/Home";
import { ProductListing } from "./Pages/ProductListing/ProductListing";
import { Navbar } from "./Components/Navbar/Navbar";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { Cart } from "./Pages/Cart/Cart";
import { UseData } from "./Contexts/DataContext";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RequiresAuth } from "./Auth/RequiresAuth";
import { Login } from "./Pages/Login/Login";
import { Profile } from "./Pages/Profile/Profile";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Checkout } from "./Pages/Checkout/Checkout";
import { OrderSummay } from "./Pages/OrderSummay/OrderSummay";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";

function App() {
  const { loading } = UseData();
  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productlisting" element={<ProductListing />} />
        <Route path="/wishlist" element={<RequiresAuth><Wishlist /></RequiresAuth>} />
        <Route path="/cart" element={<RequiresAuth><Cart /></RequiresAuth>} />
        <Route path="/profile" element={<RequiresAuth><Profile /></RequiresAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderSummary" element={<OrderSummay />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
