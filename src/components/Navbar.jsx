import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
 // navList Data
 const navList = (
  <ul className="flex space-x-2 text-amber-300 sm:font-sm md:font-medium sm:border-x-2 border-amber-600 lg:border-none px-5">
   {/* Home */}
   <li className="hover:bg-amber-500 hover:text-black focus:bg-amber-500 focus:text-black active:bg-amber-500 active:text-black transition-all rounded-md duration-300 transform hover:scale-105 focus:scale-105 active:scale-105">
    <Link to={"/"}>Home</Link>
   </li>

   {/* All Products */}
   <li className="hover:bg-amber-500 hover:text-black focus:bg-amber-500 focus:text-black active:bg-amber-500 active:text-black transition-all rounded-md duration-300 transform hover:scale-105 focus:scale-105 active:scale-105">
    <Link to={"/allproduct"}>All Products</Link>
   </li>

   {/* Signup */}
   <li className="hover:bg-amber-500 hover:text-black focus:bg-amber-500 focus:text-black active:bg-amber-500 active:text-black transition-all rounded-md duration-300 transform hover:scale-105 focus:scale-105 active:scale-105">
    <Link to={"/signup"}>Signup</Link>
   </li>

   {/* User */}
   <li className="hover:bg-amber-500 hover:text-black focus:bg-amber-500 focus:text-black active:bg-amber-500 active:text-black transition-all rounded-md duration-300 transform hover:scale-105 focus:scale-105 active:scale-105">
    <Link to={"/dashboard"}>My Orders</Link> {/* User-Dashboard */}
   </li>

   {/* Admin */}
   <li className="hover:bg-amber-500 hover:text-black focus:bg-amber-500 focus:text-black active:bg-amber-500 active:text-black transition-all rounded-md duration-300 transform hover:scale-105 focus:scale-105 active:scale-105">
    <Link to={"/admindashboard"}>Admin</Link>
   </li>

   {/* Cart */}
   <li className="hover:bg-amber-500 hover:text-black focus:bg-amber-500 focus:text-black active:bg-amber-500 active:text-black transition-all rounded-md duration-300 transform hover:scale-105 focus:scale-105 active:scale-105">
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
    <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

    {/* Search Bar */}
    <SearchBar />
   </div>
  </nav>
 );
};

export default Navbar;
