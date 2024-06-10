import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { Trash } from "lucide-react";
import { clearCart, decrementQuantity, deleteFromCart, incrementQuantity } from "../redux/CartSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import BuyNow from "../components/BuyNow";
import { Navigate, useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

const CartPage = () => {
 const cartItems = useSelector((state) => state.cart);
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const deleteCart = (item) => {
  dispatch(deleteFromCart(item));
  toast.success("Delete cart");
  if (navigator.vibrate) {
   navigator.vibrate([200]);
  }
  const audio = new Audio("src/assets/added.mp3");
  audio.play();
 };

 const handleIncrement = (id) => {
  dispatch(incrementQuantity(id));
  if (navigator.vibrate) {
   navigator.vibrate([200]);
  }
  const audio = new Audio("src/assets/added.mp3");
  audio.play();
 };

 const handleDecrement = (id) => {
  dispatch(decrementQuantity(id));
  if (navigator.vibrate) {
   navigator.vibrate([200]);
  }
  const audio1 = new Audio("src/assets/added.mp3");
  audio1.play();
 };

 const cartQuantity = cartItems.length;

 const cartItemTotal = cartItems.map((item) => Number(item.quantity)).reduce((prevValue, currValue) => prevValue + currValue, 0);

 const cartTotal = cartItems.map((item) => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

 useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
 }, [cartItems]);

 // user
 const user = JSON.parse(localStorage.getItem("users"));

 // Buy Now Function
 const [addressInfo, setAddressInfo] = useState({
  name: "",
  address: "",
  pincode: "",
  mobileNumber: "",
  time: Timestamp.now(),
  date: new Date().toLocaleString("en-IN", {
   month: "2-digit",
   day: "2-digit",
   year: "2-digit",
  }),
 });
 const buyNowFunction = () => {
  // validation
  if (addressInfo.name === "" || addressInfo.address === "" || addressInfo.pincode === "" || addressInfo.mobileNumber === "") {
   return toast.error("All Fields are required");
  }

  // Order Info
  const orderInfo = {
   cartItems,
   addressInfo,
   email: user.email,
   userid: user.uid,
   status: "confirmed",
   time: Timestamp.now(),
   date: new Date().toLocaleString("en-IN", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
   }),
  };
  try {
   const orderRef = collection(fireDB, "order");
   addDoc(orderRef, orderInfo);
   setAddressInfo({
    name: "",
    address: "",
    pincode: "",
    mobileNumber: "",
   });
   toast.success("Order Placed Successfully");
   dispatch(clearCart());
   if (navigator.vibrate) {
    navigator.vibrate([200]);
   }
   const audio = new Audio("src/assets/added.mp3");
   audio.play();
   navigate("/dashboard");
  } catch (error) {
   console.log(error);
  }
 };
 return (
  <Layout>
   <div className="container mx-auto px-4 max-w-7xl py-2 lg:px-0 ">
    <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
     <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center w-full">Shopping Cart</h1>
     {cartItems.length > 0 ? (
      <form className="items-center p-5">
       <section aria-labelledby="cart-heading" className="rounded-lg bg-white px-3 ">
        <h2 id="cart-heading" className="sr-only">
         Items in your shopping cart
        </h2>
        <ul role="list" className="divide-y divide-gray-200">
         {cartItems.map((item, index) => {
          const { id, title, price, productImage, quantity, category } = item;
          return (
           <div key={index} className="">
            <li className="flex py-6 sm:py-6 ">
             <div className="flex-shrink-0">
              <img src={productImage} alt="img" className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center" />
             </div>
             <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
               <div>
                <div className="flex justify-between">
                 <h3 className="text-sm">
                  <div className="font-semibold text-black">{title}</div>
                 </h3>
                </div>
                <div className="mt-1 flex text-sm">
                 <p className="text-sm text-gray-500">{category}</p>
                </div>
                <div className="mt-1 flex items-end">
                 <p className="text-sm font-medium text-gray-900">₹{price}</p>
                </div>
               </div>
              </div>
             </div>
            </li>
            <div className="mb-2 flex">
             <div className="min-w-24 flex">
              <button onClick={() => handleDecrement(id)} type="button" className="h-7 w-7">
               ➖
              </button>
              <input type="text" className="mx-1 h-7 w-9 rounded-md border text-center" value={quantity} readOnly />
              <button onClick={() => handleIncrement(id)} type="button" className="flex h-7 w-7 items-center justify-center">
               ➕
              </button>
             </div>
             <div className="ml-6 flex text-sm">
              <button onClick={() => deleteCart(item)} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
               <Trash size={12} className="text-red-500" />
               <span className="text-xs font-medium text-red-500">Remove</span>
              </button>
             </div>
            </div>
           </div>
          );
         })}

         {/* Order summary */}
         <section aria-labelledby="summary-heading" className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0">
          <h2 id="summary-heading" className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
           Price Details
          </h2>
          <div>
           <dl className=" space-y-1 px-2 py-4">
            <div className="flex items-center justify-between">
             <dt className="text-sm text-gray-800">Price ({cartItemTotal} item)</dt>
             <dd className="text-sm font-medium text-gray-900">₹ {cartTotal}</dd>
             <dd className="text-sm font-medium text-gray-900">₹ {cartQuantity}</dd>
            </div>
            <div className="flex items-center justify-between pt-4">
             <dt className="flex items-center text-sm text-gray-800">
              <span>Coupon Code</span>
             </dt>
             <dd className="text-sm font-medium text-green-700">- FREE8</dd>
            </div>
            <div className="flex items-center justify-between py-4">
             <dt className="flex text-sm text-gray-800">
              <span>Delivery Charges</span>
             </dt>
             <dd className="text-sm font-medium text-green-700">Free</dd>
            </div>
            <div className="flex items-center justify-between border-y border-dashed py-4 ">
             <dt className="text-base font-medium text-gray-900">Total Amount</dt>
             <dd className="text-base font-medium text-gray-900">₹ {cartTotal}</dd>
            </div>
           </dl>
           <div className="px-2 pb-4 font-medium text-green-700 flex items-center justify-center">
            <div className="flex w-1/2 gap-4 mb-6">{user ? <BuyNow addressInfo={addressInfo} setAddressInfo={setAddressInfo} buyNowFunction={buyNowFunction} /> : <Navigate to={"/login"} />}</div>
           </div>
          </div>
         </section>
        </ul>
       </section>
      </form>
     ) : (
      <>
       <div>
        <section className="flex flex-col justify-center items-center ">
         <div className="text-center justify-center items-center self-center">
          <h2 className="text-2xl mb-4">Start Adding products to cart!</h2>
          <button onClick={() => navigate("/allproduct")} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
           Continue Shopping
          </button>
         </div>
         <img src="https://ibb.co/1ZR74fn" alt="img" />
        </section>
       </div>
      </>
     )}
    </div>
   </div>
  </Layout>
 );
};

export default CartPage;
