import { useContext } from "react";
import MyContext from "../../context/MyContext";
import { fireDB } from "../../firebase/FirebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

const OrderDetail = () => {
 const context = useContext(MyContext);
 const { getAllOrder, getAllOrderFunction } = context;

 // Delete Order
 const deleteOrder = async (id) => {
  try {
   await deleteDoc(doc(fireDB, "order", id));
   toast.success("Order Deleted successfully");
   if (navigator.vibrate) {
    navigator.vibrate([200]);
   }
   const audio = new Audio("src/assets/added.mp3");
   audio.play();
   getAllOrderFunction();
  } catch (error) {
   console.log(error);
  }
 };
 return (
  <div>
   <div className="py-5 flex justify-between items-center">
    {/* text  */}
    <h1 className=" text-xl text-amber-500 font-bold">All Order</h1>
   </div>

   {/* table  */}
   <div className="w-full overflow-x-auto no-scrollbar">
    <table className="w-full border border-collapse sm:border-separate border-amber-100 text-amber-400 text-center">
     <tbody>
      <tr>
       <th scope="col" className="dashli">
        S.No.
       </th>
       <th scope="col" className="dashli">
        Order.Id.
       </th>
       <th scope="col" className="dashli">
        Image
       </th>
       <th scope="col" className="dashli">
        Title
       </th>
       <th scope="col" className="dashli">
        Category
       </th>
       <th scope="col" className="dashli">
        Price
       </th>
       <th scope="col" className="dashli">
        Quantity
       </th>
       <th scope="col" className="dashli">
        Total Price
       </th>
       <th scope="col" className="dashli">
        Status
       </th>
       <th scope="col" className="dashli">
        Name
       </th>
       <th scope="col" className="dashli">
        Address
       </th>
       <th scope="col" className="dashli">
        Pincode
       </th>
       <th scope="col" className="dashli">
        Contact
       </th>
       <th scope="col" className="dashli">
        Email
       </th>
       <th scope="col" className="dashli">
        Date
       </th>
       <th scope="col" className="dashli">
        Delete
       </th>
      </tr>
      {getAllOrder.map((order, orderIndex) =>
       order.cartItems.map((item, itemIndex) => {
        const { id, title, price, category, date, productImage, quantity } = item;
        return (
         <tr key={id} className="text-pink-300">
          <td className="dashtd">{orderIndex + 1}</td>
          <td className="dashtd ">{id}</td>

          <td className="dashtd ">
           <div className="flex justify-center">
            <img className="w-20 " src={productImage} alt="img" />
           </div>
          </td>
          <td className="dashtd ">{title}</td>
          <td className="dashtd ">{category}</td>
          <td className="dashtd ">₹{price}</td>
          <td className="dashtd ">{quantity}</td>
          <td className="dashtd ">₹{price * quantity}</td>
          <td className="dashtd ">{order.status}</td>
          <td className="dashtd ">{order.addressInfo.name}</td>
          <td className="dashtd ">{order.addressInfo.address}</td>
          <td className="dashtd ">{order.addressInfo.pincode}</td>
          <td className="dashtd ">{order.addressInfo.mobileNumber}</td>
          <td className="dashtd ">{order.email}</td>
          <td className="dashtd ">{order.date}</td>

          <td onClick={() => deleteOrder(order.id)} className="dashtd cursor-pointer">
           ❌
          </td>
         </tr>
        );
       })
      )}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default OrderDetail;
