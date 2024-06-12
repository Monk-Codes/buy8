import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { auth } from "../firebase/FirebaseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = () => {
 // Get user from local storage
 const user = JSON.parse(localStorage.getItem("users"));
 // Navigate
 const navigate = useNavigate();
 // Logout
 const logout = async () => {
  try {
   await signOut(auth); // Sign out from Firebase
   localStorage.clear("users");
   toast.success("Logged out successfully");
   navigate("/login");
  } catch (error) {
   toast.error("Failed to log out");
   console.error("Logout error: ", error);
  }
 };

 const cartItems = useSelector((state) => state.cart);

 // NavList Data
 const navList = (
  <ul className="flex space-x-2 text-amber-300 font-sm md:font-medium text-nowrap border-amber-600 lg:border-none self-center">
   {/* Home */}
   <li className="navli">
    <Link to={"/"}>Home</Link>
   </li>

   {/* All Products */}
   <li className="navli">
    <Link to={"/allproduct"}>All Products</Link>
   </li>

   {/* User */}
   {user?.role === "user" && (
    <li className="navli">
     <Link to={"/dashboard"}>My Orders</Link>
    </li>
   )}

   {/* Admin */}
   {user?.role === "admin" && (
    <li className="navli">
     <Link to={"/admin-dashboard"}>Admin</Link>
    </li>
   )}

   {/* Cart */}
   <li className="navli">
    <Link to={"/cart"}>Cart({cartItems.length})</Link>
   </li>

   {/* Logout */}
   {user && (
    <li className="cursor-pointer navli" onClick={logout}>
     Logout
    </li>
   )}
  </ul>
 );

 return (
  <nav className="bg-gray-700 sticky top-0 z-50">
   {/* main */}
   <div className="lg:flex lg:justify-between items-center py-1 lg:px-3">
    {/* left */}
    <div className="left lg:py-0">
     <Link to={"/"}>
      <h2 className="font-bold text-amber-400 text-2xl text-center">Buy8</h2>
     </Link>
    </div>

    {/* right */}
    <div className="right flex justify-center mb-2 lg:mb-0">{navList}</div>

    {/* Search Bar */}
    <SearchBar />
   </div>
  </nav>
 );
};

export default Navbar;
