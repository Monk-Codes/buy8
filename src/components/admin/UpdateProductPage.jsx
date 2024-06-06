import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";
import Loader from "../Loader";

const UpdateProductPage = () => {
 const context = useContext(MyContext);
 const { loading, getAllProduct } = context;
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
       <th scope="col" className="h-12 px-2 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
        S.No.
       </th>
       <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold fontPara">
        Image
       </th>
       <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
        Title
       </th>
       <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
        Price
       </th>
       <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
        Category
       </th>
       <th scope="col" className="h-12 px-2 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
        Date
       </th>
       <th scope="col" className="h-12 px-4 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
        Edit
       </th>
       <th scope="col" className="h-12 px-2 text-md font-bold fontPara border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
        Delete
       </th>
      </tr>
      {getAllProduct.map((item, index) => {
       const { id, title, price, category, date, productImage } = item;
       return (
        <tr key={index} className="text-pink-300">
         <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 ">{index + 1}.</td>
         <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
          <div className="flex justify-center">
           <img className="w-20 " src={productImage} alt="img" />
          </div>
         </td>
         <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{title}</td>
         <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">₹{price}</td>
         <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{category}</td>
         <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{date}</td>
         <td className="h-12 px-4 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500   cursor-pointer ">✏️</td>
         <td className="h-12 px-2 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500   cursor-pointer ">❌</td>
        </tr>
       );
      })}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default UpdateProductPage;
