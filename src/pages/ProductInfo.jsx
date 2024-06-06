import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import MyContext from "../context/MyContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import Loader from "../components/Loader";

const ProductInfo = () => {
  const context=useContext(MyContext)
  const {loading,setLoading}=context;
  const[product,setProduct]=useState("")
  const {id}=useParams();

  const getProductData = async () => {
    setLoading(true)
    try {
        const productTemp = await getDoc(doc(fireDB, "products", id))
        setProduct(productTemp.data());
        setLoading(false)
    } catch (error) {
      console.log(error);
        setLoading(false)
    }
}
console.log(product);
useEffect(() => {
    getProductData()
}, [])

 return (
  <Layout>
   <section className="py-5 lg:py-10 font-poppins dark:bg-gray-300 min-h-screen">
    {loading ? <>
    <div className="flex justify-center items-center">
      <Loader/>
    </div>
    </>
  :
  <>
    <div className="max-w-6xl p-8 mx-auto">
     <div className="flex flex-wrap mb-2 justify-center">
      <div className="w-4/5 px-4 mb-8 md:w-1/2 md:mb-0">
       <div className="">
        <div className="p-4 flex flex-1 justify-center">
         <img className=" lg:w-full lg:h-full lg:px-28 h-48 object-cover object-center" src={product?.productImage} alt="img" />
        </div>
       </div>
      </div>
      <div className="w-full px-4 md:w-1/2 flex flex-col justify-start">
       <div className="lg:pl-10 lg:gap-4 lg:p-4  w-full flex flex-col justify-end">
        <div className="mb-6 ">
         <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-amber-700 md:text-2xl ">
          {product?.title}
          </h2>
         <div className="flex flex-wrap items-center mb-6">
          <ul className="flex mb-4 mr-2 lg:mb-0">
           <li>
            <a href="">
             <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500   bi bi-star " viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
             </svg>
            </a>
           </li>
           <li>
            <a href="">
             <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500   bi bi-star " viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
             </svg>
            </a>
           </li>
           <li>
            <a href="">
             <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500   bi bi-star " viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
             </svg>
            </a>
           </li>
           <li>
            <a href="">
             <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="w-4 mr-1 text-red-500   bi bi-star " viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
             </svg>
            </a>
           </li>
          </ul>
         </div>
         <p className="inline-block text-2xl font-semibold text-gray-700   ">
          <span>₹ {product?.price}</span>
         </p>
        </div>
        <div className="mb-6">
         <h2 className="mb-2 text-lg font-bold text-gray-700  ">Description :</h2>
         <p>
          {product?.description}
         </p>
        </div>

        <div className="mb-6 " />
        <div className="mb-6 " />
        <div className="flex flex-wrap items-center mb-6">
         <button className="w-full lg:w-36 lg:p-2 px-10 py-4 text-center text-pink-600 bg-pink-100 border border-pink-600  hover:bg-pink-600 hover:text-gray-100 rounded-3xl">Add to cart</button>
         
        </div>
       </div>
      </div>
     </div>
    </div>
    </>
    }
   </section>
  </Layout>
 );
};

export default ProductInfo;
