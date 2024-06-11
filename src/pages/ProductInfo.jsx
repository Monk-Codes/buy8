import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import MyContext from "../context/MyContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import Loader from "../components/Loader";
import { addToCart, deleteFromCart } from "../redux/CartSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const ProductInfo = () => {
 const context = useContext(MyContext);
 const { loading, setLoading } = context;
 const [product, setProduct] = useState("");
 const { id } = useParams();

 const getProductData = async () => {
  setLoading(true);
  try {
   const productTemp = await getDoc(doc(fireDB, "products", id));
   setProduct(productTemp.data());
   setLoading(false);
  } catch (error) {
   setLoading(false);
  }
 };

 const cartItems = useSelector((state) => state.cart);
 const dispatch = useDispatch();

 //CART CRUD
 const addCart = (item) => {
  dispatch(addToCart(item));
  toast.success("Added to cart");

  const audio = new Audio("src/assets/added.mp3");
  audio.play();
 };

 const deleteCart = (item) => {
  dispatch(deleteFromCart(item));
  toast.success("Removed from cart");

  const audio1 = new Audio("src/assets/added.mp3");
  audio1.play();
 };

 useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
 }, [cartItems]);

 useEffect(() => {
  getProductData();
 }, []);

 return (
  <Layout>
   <section className="px-5 lg:py-10 font-button min-h-screen bg-orange-200">
    {loading ? (
     <div className="flex justify-center items-center">
      <Loader />
     </div>
    ) : (
     <div className="w-full mx-auto py-2 backdrop-blur-sm ">
      <div className="flex flex-wrap justify-center border border-gray-400 bg-amber-100 shadow-md rounded-3xl">
       <div className="w-4/5 px-4 mb-2 md:w-1/2 md:mb-0 md:border-0 border-b-2 border-gray-400">
        <div className="p-4 flex flex-1 justify-center">
         <img className="lg:w-full lg:h-full lg:px-28 h-48 object-cover object-center" src={product?.productImage} alt="img" />
        </div>
       </div>
       <div className="w-4/5 px-4 mb-2 md:w-1/2 md:mb-0">
        <div className="lg:pl-10 lg:gap-4 lg:p-4 flex flex-col ">
         <div className="mb-6 w-full ">
          <h2 className="mb-2 text-md text-amber-500 md:text-2xl flex flex-col break-words text-wrap">{product?.title}</h2>
          <div className="flex flex-wrap items-center mb-6">
           <ul className="flex mb-2 lg:mb-0">
            <li>
             <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500 bi bi-star" viewBox="0 0 16 16">
               <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
              </svg>
             </a>
            </li>
            <li>
             <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500 bi bi-star" viewBox="0 0 16 16">
               <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
              </svg>
             </a>
            </li>
            <li>
             <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500 bi bi-star" viewBox="0 0 16 16">
               <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
              </svg>
             </a>
            </li>
            <li>
             <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500 bi bi-star" viewBox="0 0 16 16">
               <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
              </svg>
             </a>
            </li>
           </ul>
          </div>
          <p className="flex flex-col text-2xl font-main text-amber-600 break-words text-wrap">₹{product?.price}</p>
         </div>
         <div className="mb-2">
          <h2 className="mb-2 text-lg font-bold text-gray-700 text-wrap">Description :</h2>
          <p className="break-words">{product?.description}</p>
         </div>
         <div className="mb-2" />
         <div className="flex flex-wrap items-center  justify-center mb-2">
          {cartItems.some((p) => p.id === product.id) ? (
           <button onClick={() => deleteCart(product)} className="w-full lg:w-1/2 px-2 py-3 text-center text-white bg-red-500 border border--600 hover:bg-red-600 hover:text-gray-100 rounded-3xl">
            Remove
           </button>
          ) : (
           <button onClick={() => addCart(product)} className="w-full lg:w-1/2 px-2 py-3 text-center text-white bg-amber-500 border border-blue-300 hover:bg-green-500 hover:text-gray-100 rounded-3xl">
            Add to Cart
           </button>
          )}
         </div>
        </div>
       </div>
      </div>
     </div>
    )}
   </section>
  </Layout>
 );
};

export default ProductInfo;
