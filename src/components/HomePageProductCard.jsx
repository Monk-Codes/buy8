import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import MyContext from "../context/MyContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../redux/CartSlice";

const HomePageProductCard = () => {
 const navigate = useNavigate();
 const context = useContext(MyContext);
 const { getAllProduct } = context;
 const cartItems = useSelector((state) => state.cart);
 const dispatch = useDispatch();

 //CART CRUD
 const addCart = (item) => {
  dispatch(addToCart(item));
  toast.success("Added to cart");
  if (navigator.vibrate) {
   navigator.vibrate([200]);
  }
  const audio = new Audio("src/assets/added.mp3");
  audio.play();
 };

 const deleteCart = (item) => {
  dispatch(deleteFromCart(item));
  toast.success("Removed from cart");
  if (navigator.vibrate) {
   navigator.vibrate([200]);
  }
  const audio1 = new Audio("src/assets/added.mp3");
  audio1.play();
 };

 useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
 }, [cartItems]);

 return (
  <div className="py-2 px-4 md:px-8 bg-orange-50">
   {/* Heading  */}
   <div className="flex w-full justify-center">
    <h1 className="w-1/2 text-center text-nowrap mb-1 text-2xl font-button text-amber-500 hover:scale-x-110 transition ease-in-out duration-300 hover:text-amber-300 shadow-md ">Bestselling Products</h1>
   </div>

   {/* main  */}
   <section className="text-gray-600 body-font h-full">
    <div className="container px-1 lg:px-0 py-5 mx-auto">
     <div className="flex flex-wrap justify-center">
      {getAllProduct.slice(0, 8).map((item, index) => {
       const { id, title, price, productImage, category } = item;
       return (
        <div key={index} className="px-2 mb-3 w-64 h-96 sm:w-1/2 md:w-1/3 lg:w-1/5">
         <div className="product-card border border-gray-400 rounded-2xl overflow-hidden shadow-md cursor-pointer  backdrop-blur-sm bg-amber-100">
          <img className="h-56 w-full p-6 transition duration-300 ease-in-out transform hover:scale-105" src={productImage} alt="product" onClick={() => navigate(`/productinfo/${id}`)} />
          <div className="p-4 transition duration-300 ease-in-out transform hover:bg-gray-200">
           <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
           <h1 className="title-font text-lg font-medium text-gray-700 mb-3">{title.substring(0, 25)}</h1>
           <h1 className="title-font text-lg font-main text-amber-500 mb-3">₹{price}</h1>
           <div className="flex justify-center">
            {cartItems.some((e) => e.id === item.id) ? (
             <button onClick={() => deleteCart(item)} className="bg-amber-500 hover:bg-orange-500 w-full text-white py-[4px] rounded-2xl font-bold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-amber-500">
              Remove
             </button>
            ) : (
             <button onClick={() => addCart(item)} className="bg-slate-500 hover:bg-amber-400 w-full text-white py-[4px] rounded-2xl font-bold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-amber-500">
              Add To Cart
             </button>
            )}
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
 );
};

export default HomePageProductCard;
