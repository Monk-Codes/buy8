import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import MyContext from "../context/MyContext";
import { Loader } from "lucide-react";

const UserDashboard = () => {
 const [user, setUser] = useState(null);

 useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("users"));
  setUser(storedUser);
 }, []);

 const context = useContext(MyContext);
 const { loading, getAllOrder } = context;

 useEffect(() => {
  if (user) {
   console.log("User object:", user);
  }
 }, [user]);

 return (
  <Layout>
   <div className="container mx-auto px-2 py-5 lg:py-8 bg-amber-100">
    {/* Top */}
    <div className="top">
     {/* main */}
     <div className="bg-orange-100 py-5 rounded-2xl border border-orange-400">
      {/* image */}
      <div className="flex justify-center">
       <img
        src={user?.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/128/2202/2202112.png"}
        alt="User profile"
        className="rounded-full w-24 h-24 object-cover"
        onError={(e) => {
         e.target.onerror = null; // Prevent infinite loop in case of default image error
         e.target.src = "https://cdn-icons-png.flaticon.com/128/2202/2202112.png";
        }}
       />
      </div>
      {/* text */}
      <div className="text-left text-lg p-2 font-main text-amber-600">
       {/* name */}
       <h1>
        <span>Name : </span>
        {user?.name}
       </h1>
       {/* email */}
       <h1>
        <span>Email : </span>
        {user?.email}
       </h1>
       {/* Date */}
       <h1>
        <span>Date : </span>
        {user?.date}
       </h1>
       {/* Role */}
       <h1>
        <span>Role : </span>
        {user?.role}
       </h1>
      </div>
     </div>
    </div>

    {/* bottom */}
    <div className="bottom">
     <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
      {/* text */}
      <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>
      <div className="flex justify-center relative top-10">{loading && <Loader />}</div>

      {getAllOrder
       .filter((obj) => obj.userid === user?.uid)
       .map((order, index) => (
        <div key={index}>
         {order.cartItems.map((item, itemIndex) => {
          const { id, date, quantity, price, title, productImage, category } = item;
          const { status } = order;
          return (
           <div key={itemIndex} className="mt-5 flex flex-col overflow-hidden border-orange-500 border rounded-xl md:flex-row">
            <div className="w-full bg-orange-200 md:max-w-xs">
             {/* left */}
             <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-1">
               <div className="mb-4">
                <div className="text-sm font-semibold text-black">Order Id</div>
                <div className="text-sm font-medium text-gray-900">#{id}</div>
               </div>

               <div className="mb-4">
                <div className="text-sm font-semibold">Date</div>
                <div className="text-sm font-medium text-gray-900">{date}</div>
               </div>

               <div className="mb-4">
                <div className="text-sm font-semibold">Total Amount</div>
                <div className="text-sm font-medium text-gray-900">₹{price * quantity}</div>
               </div>

               <div className="mb-4">
                <div className="text-sm font-semibold">Order Status</div>
                <div className="text-sm font-medium text-green-800">{status}</div>
               </div>
              </div>
             </div>
            </div>
            {/* right */}
            <div className="flex-1 bg-orange-100">
             <div className="p-8">
              <ul className="-my-7 divide-y divide-gray-200">
               <li className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                <div className="flex flex-1 items-stretch">
                 <div className="flex-shrink-0">
                  <img className="h-20 w-20 rounded-lg border border-gray-200 object-contain" src={productImage} alt="Product" />
                 </div>

                 <div className="ml-5 flex flex-col justify-between">
                  <div className="flex-1">
                   <p className="text-sm font-bold text-gray-900">{title}</p>
                   <p className="mt-1.5 text-sm font-medium text-gray-500">{category}</p>
                  </div>

                  <p className="mt-4 text-sm font-medium text-gray-500">x {quantity}</p>
                 </div>
                </div>

                <div className="ml-auto flex flex-col items-end justify-between">
                 <p className="text-right text-sm font-bold text-gray-900">{price}</p>
                </div>
               </li>
              </ul>
             </div>
            </div>
           </div>
          );
         })}
        </div>
       ))}
     </div>
    </div>
   </div>
  </Layout>
 );
};

export default UserDashboard;
