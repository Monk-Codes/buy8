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
import { ProtectedRouteUser } from "./protectedRoute/ProtectedRouteUser";
import { ProtectedRouteAdmin } from "./protectedRoute/ProtectedRouteAdmin";

const App = () => {
 return (
  <div>
   <MyState>
    <Router>
     <ScrollTop />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<NoPage />} />
      <Route path="/productinfo/:id" element={<ProductInfo />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/allproduct" element={<AllProduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/help" element={<Help />} />
      <Route
       path="/dashboard"
       element={
        <ProtectedRouteUser>
         <UserDashboard />
        </ProtectedRouteUser>
       }
      />
      <Route
       path="/admin-dashboard"
       element={
        <ProtectedRouteAdmin>
         <AdminDashboard />
        </ProtectedRouteAdmin>
       }
      />
      <Route
       path="/add-product"
       element={
        <ProtectedRouteAdmin>
         <AddProductPage />
        </ProtectedRouteAdmin>
       }
      />
      <Route
       path="/update-product/:id"
       element={
        <ProtectedRouteAdmin>
         <UpdateProductPage />
        </ProtectedRouteAdmin>
       }
      />
     </Routes>
     <Toaster />
    </Router>
   </MyState>
  </div>
 );
};

export default App;
