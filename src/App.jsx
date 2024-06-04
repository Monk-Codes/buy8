import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NoPage from "./pages/NoPage";
import ProductInfo from "./pages/ProductInfo";
import ScrollTop from "./components/ScrollTop";
import CartPage from "./pages/CartPage";
import AllProduct from "./pages/AllProduct";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddProductPage from "./components/admin/AddProductPage";

const App = () => {
 return (
  <div>
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
     <Route path="/dashboard" element={<UserDashboard />} />
     <Route path="/admindashboard" element={<AdminDashboard />} />
    </Routes>
   </Router>
  </div>
 );
};

export default App;
