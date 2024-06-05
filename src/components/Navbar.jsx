import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
 //get user from local storage
 const user = JSON.parse(localStorage.getItem("users"));
 //navigate
 const navigate = useNavigate();
 //logout
 const logout = () => {
  localStorage.clear("users");
  navigate("/login");
 };

 // navList Data
 const navList = (
  <ul className="flex space-x-1 text-amber-300 font-sm md:font-medium text-nowrap border-amber-600 lg:border-none self-center">
   {/* Home */}
   <li className="navli">
    <Link to={"/"}>Home</Link>
   </li>

   {/* All Products */}
   <li className="navli">
    <Link to={"/allproduct"}>All Products</Link>
   </li>

   {/* Signup */}
   <li className="navli">
    <Link to={"/signup"}>Signup</Link>
   </li>

   {/* User */}
   <li className="navli">
    <Link to={"/dashboard"}>My Orders</Link>
   </li>

   {/* Admin */}
   <li className="navli">
    <Link to={"/admin-dashboard"}>Admin</Link>
   </li>
   {/* Logout */}
   {user && (
    <li className="cursor-pointer navli" onClick={logout}>
     Logout
    </li>
   )}
   {/* Cart */}
   <li className="navli">
    <Link to={"/cart"}>Cart(0)</Link>
   </li>
  </ul>
 );
 return (
  <nav className="bg-gray-700 sticky top-0 z-50">
   {/* main */}
   <div className="lg:flex lg:justify-between items-center py-2 lg:px-3">
    {/* left */}
    <div className="left py-2 lg:py-0">
     <Link to={"/"}>
      <h2 className="font-bold text-amber-400 text-2xl text-center">Buy8</h2>
     </Link>
    </div>

    {/* right */}
    <div className="right flex justify-center  mb-4 lg:mb-0">{navList}</div>

    {/* Search Bar */}
    <SearchBar />
   </div>
  </nav>
 );
};

export default Navbar;
