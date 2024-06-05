import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NoPage from "./pages/NoPage";
import ProductInfo from "./pages/ProductInfo";
import ScrollTop from "./components/ScrollTop";
import CartPage from "./pages/CartPage";
import AllProduct from "./pages/AllProduct";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Help from "./pages/Help";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddProductPage from "./components/admin/AddProductPage";
import UpdateProductPage from "./components/admin/UpdateProductPage";
import MyState from "./context/MyState";
import { Toaster } from "react-hot-toast";

const App = () => {
 return (
  <div>
   <MyState>
    <Router>
     <ScrollTop />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<NoPage />} />
      <Route path="/productinfo" element={<ProductInfo />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/allproduct" element={<AllProduct />} />
      <Route path="/add-product" element={<AddProductPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/help" element={<Help />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/update-product" element={<UpdateProductPage />} />
     </Routes>
     <Toaster />
    </Router>
   </MyState>
  </div>
 );
};

export default App;
