import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import Loader from "../Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
 const context = useContext(MyContext);
 const { loading, setLoading, getAllProduct, getAllProductFunction } = context;
 const navigate = useNavigate();
 // Delete product
 const deleteProduct = async (id) => {
  setLoading(true);
  try {
   await deleteDoc(doc(fireDB, "products", id));
   toast.success("Product Deleted successfully");
   getAllProductFunction();
   setLoading(false);
  } catch (error) {
   setLoading(false);
  }
 };
 return (
  <div>
   <div className="py-5 flex justify-between items-center">
    {/* text  */}
    <h1 className=" text-xl text-amber-500 font-bold">All Product</h1>
    {/* Add Product Button  */}
    <Link to={"/add-product"}>
     <button className="px-5 py-2 bg-amber-50 border border-amber-100 rounded-lg">Add Product</button>
    </Link>
   </div>

   {/* Loading  */}
   <div className="flex justify-center relative top-20">{loading && <Loader />}</div>

   {/* table  */}
   <div className="w-full overflow-x-auto">
    <table className="w-full  border border-collapse sm:border-separate border-amber-100 text-amber-400 text-center">
     <tbody>
      <tr>
       <th scope="col" className="dashli">
        S.No.
       </th>
       <th scope="col" className="dashli">
        Image
       </th>
       <th scope="col" className="dashli">
        Title
       </th>
       <th scope="col" className="dashli">
        Price
       </th>
       <th scope="col" className="dashli">
        Category
       </th>
       <th scope="col" className="dashli">
        Date
       </th>
       <th scope="col" className="dashli">
        Edit
       </th>
       <th scope="col" className="dashli">
        Delete
       </th>
      </tr>
      {getAllProduct.map((item, index) => {
       const { id, title, price, category, date, productImage } = item;
       return (
        <tr key={index} className="text-pink-300">
         <td className="dashtd ">{index + 1}.</td>
         <td className="dashtd ">
          <div className="flex justify-center">
           <img className="w-20 " src={productImage} alt="img" />
          </div>
         </td>
         <td className="dashtd">{title}</td>
         <td className="dashtd">₹{price}</td>
         <td className="dashtd">{category}</td>
         <td className="dashtd ">{date}</td>
         <td onClick={() => navigate(`/update-product/${id}`)} className="dashtd cursor-pointer ">
          ✏️
         </td>
         <td onClick={() => deleteProduct(id)} className="dashtd cursor-pointer ">
          ❌
         </td>
        </tr>
       );
      })}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default ProductDetail;
