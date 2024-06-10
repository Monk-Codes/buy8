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
  <div className="mt-6 px-4 md:px-8 ">
   {/* Heading  */}
   <div>
    <h1 className="text-center mb-1 text-3xl font-button text-amber-500 hover:scale-x-110 transition ease-in-out duration-300 hover:text-amber-300 shadow-md ">Bestselling Products</h1>
   </div>

   {/* main  */}
   <section className="text-gray-600 body-font">
    <div className="container mx-auto">
     <div className="flex flex-wrap -m-4">
      {getAllProduct.slice(0, 8).map((item, index) => {
       const { id, title, price, productImage, category } = item;
       return (
        <div key={index} className="p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
         <div className="h-full border border-gray-300 rounded-xl px-4 overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <div className="p-4 flex flex-1 justify-center">
           <img className="h-48 object-cover object-center  " src={productImage} alt="product" onClick={() => navigate(`/productinfo/${id}`)} />
          </div>
          <div className="p-6">
           <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
           <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title.substring(0, 25)}</h1>
           <h1 className="title-font text-lg font-medium text-gray-900 mb-3">₹{price}</h1>
           <div className="flex justify-center">
            {cartItems.some((e) => e.id === item.id) ? (
             <button onClick={() => deleteCart(item)} className="bg-amber-500 hover:bg-orange-500 focus:bg-orange-700 w-full text-white py-2 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-pink-300 transition-colors duration-300">
              Remove
             </button>
            ) : (
             <button onClick={() => addCart(item)} className="bg-amber-500 hover:bg-orange-500 focus:bg-orange-700 w-full text-white py-2 rounded-lg font-main focus:outline-none focus:ring-2 focus:ring-pink-300 transition-colors duration-300">
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
