import { useNavigate, useParams } from "react-router";
import { useContext, useEffect } from "react";
import MyContext from "../../context/MyContext";
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";
import toast from "react-hot-toast";

const CategoryPage = () => {
 const { categoryname } = useParams();
 const context = useContext(MyContext);
 const { getAllProduct, loading } = context;

 const navigate = useNavigate();

 // filter product
 const filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname));

 const cartItems = useSelector((state) => state.cart);
 const dispatch = useDispatch();
 //CART CRUD
 const addCart = (item) => {
  dispatch(addToCart(item));
  toast.success("Added to cart");
  if (navigator.vibrate) {
   navigator.vibrate([200]);
  }
  const audio = new Audio("../src/assets/added.mp3");
  audio.play();
 };

 const deleteCart = (item) => {
  dispatch(deleteFromCart(item));
  toast.success("Removed from cart");
  if (navigator.vibrate) {
   navigator.vibrate([200]);
  }
  const audio1 = new Audio("../src/assets/added.mp3");
  audio1.play();
 };

 useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
 }, [cartItems]);

 return (
  <Layout>
   <div className="min-h-screen px-4 py-2 md:px-8 bg-orange-200">
    {/* Heading  */}
    <div className="flex justify-center w-full">
     <h1 className="w-1/3 text-center mb-1 text-3xl font-button text-amber-500 hover:scale-x-110 transition ease-in-out duration-300 hover:text-amber-300 shadow-md ">{categoryname}</h1>
    </div>

    {loading ? (
     <div className="flex justify-center">
      <Loader />
     </div>
    ) : (
     <section className="text-gray-600 body-font h-full">
      {/* main 2 */}
      <div className="container px-1 lg:px-0 py-5 mx-auto">
       {/* main 3  */}
       <div className="flex flex-wrap justify-center">
        {filterProduct.length > 0 ? (
         <>
          {filterProduct.map((item, index) => {
           const { id, title, price, productImage, category } = item;
           return (
            <div key={index} className="px-2 mb-3 h-96 w-64 sm:w-1/2 md:w-1/3 lg:w-1/5">
             <div className="product-card border border-gray-400 rounded-2xl overflow-hidden shadow-md cursor-pointer  backdrop-blur-sm bg-amber-100">
              <img onClick={() => navigate(`/productinfo/${id}`)} className="h-56 w-full p-6 transition duration-300 ease-in-out transform hover:scale-105" src={productImage} alt="img" />
              <div className="p-4 transition duration-300 ease-in-out transform hover:bg-gray-200">
               <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
               <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title.substring(0, 25)}</h1>
               <h1 className="title-font text-lg font-medium text-amber-500 mb-3">₹{price}</h1>

               <div className="flex justify-center ">
                {cartItems.some((p) => p.id === item.id) ? (
                 <button onClick={() => deleteCart(item)} className="bg-slate-500 hover:bg-amber-400 w-full text-white py-[4px] rounded-2xl font-bold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-amber-500">
                  Remove
                 </button>
                ) : (
                 <button onClick={() => addCart(item)} className="bg-slate-500 hover:bg-amber-400 w-full text-white py-[4px] rounded-2xl font-bold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-amber-500">
                  Add to Cart
                 </button>
                )}
               </div>
              </div>
             </div>
            </div>
           );
          })}
         </>
        ) : (
         <div>
          <div className="flex justify-center">
           <img className=" mb-2" src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png" alt="not found" />
          </div>
          <h1 className=" text-black text-xl">No {categoryname} product found</h1>
         </div>
        )}
       </div>
      </div>
     </section>
    )}
   </div>
  </Layout>
 );
};

export default CategoryPage;
