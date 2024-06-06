import { useNavigate } from "react-router";
import Layout from "../components/Layout";
import { useContext } from "react";
import MyContext from "../context/MyContext";

const AllProduct = () => {
 const navigate = useNavigate();
 const context = useContext(MyContext);
 const {getAllProduct} = context;
 return (
  <Layout>
   <div className=" bg-slate-300 min-h-screen">
    {/* Heading  */}
    <div className="">
     <h1 className=" text-center mb-5 text-2xl font-semibold">All Products</h1>
    </div>

    {/* main  */}
    <section className="text-gray-600 body-font h-full">
     <div className="container px-5 lg:px-0 py-5 mx-auto">
      <div className="flex flex-wrap">
       {getAllProduct.map((item, index) => {
        const { id, title, price,productImage,category } = item;
        return (
         <div key={index} className="px-10 mb-4 w-full md:w-1/2 lg:w-1/4">
          <div className="product-card h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
           <img onClick={() => navigate(`/productinfo/${id}`)} className="h-72 w-full lg:w-full lg:h-80 transition duration-300 ease-in-out transform hover:scale-105" src={productImage} alt="image" />
           <div className="p-4 transition duration-300 ease-in-out transform hover:bg-gray-200">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
            <h1 className="title-font text-lg font-medium text-gray-700 mb-3">{title.substring(0, 25)}</h1>
            <h1 className="title-font text-lg font-medium text-amber-500 mb-3">₹{price}</h1>
            <div className="flex justify-center ">
             <button className="bg-slate-500 hover:bg-amber-400 w-full text-white py-[4px] rounded-2xl font-bold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-amber-500">Add To Cart</button>
            </div>
           </div>
          </div>
         </div>
        );
       })}
      </div>
     </div>
    </section>
   </div>
  </Layout>
 );
};

export default AllProduct;
