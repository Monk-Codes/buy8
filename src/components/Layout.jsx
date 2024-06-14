/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Loader from "./Loader";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
 return (
  <div className="">
   <Navbar />
   {/* <Loader /> */}
   <div className="main-content min-h-screen ">{children}</div>
   <Footer />
  </div>
 );
};

export default Layout;
