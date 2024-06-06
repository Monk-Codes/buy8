import { Timestamp, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../Loader";
import MyContext from "../../context/MyContext";

const categoryList = [
 {
  name: "none",
 },
 {
  name: "fashion",
 },
 {
  name: "shirt",
 },
 {
  name: "jacket",
 },
 {
  name: "mobile",
 },
 {
  name: "laptop",
 },
 {
  name: "shoes",
 },
 {
  name: "home",
 },
 {
  name: "books",
 },
];

const AddProductPage = () => {
 const context = useContext(MyContext);
 const { loading, setLoading } = context;

 // navigate
 const navigate = useNavigate();

 // product state
 const [product, setProduct] = useState({
  title: "",
  price: "",
  productImage: null,
  category: "",
  description: "",
  quantity: "",
  time: Timestamp.now(),
  date: new Date().toLocaleString("en-IN", {
   month: "2-digit",
   day: "2-digit",
   year: "2-digit",
  }),
 });

 // Handle file upload
 const handleFileChange = (e) => {
  if (e.target.files[0]) {
   setProduct({
    ...product,
    productImage: e.target.files[0],
   });
  }
 };

 // Add Product Function
 const addProductFunction = async () => {
  if (product.title === "" || product.price === "" || product.productImage === null || product.category === "" || product.description === "" || product.quantity === "") {
   return toast.error("All fields are required");
  }

  setLoading(true);
  const storage = getStorage();
  const storageRef = ref(storage, `products/${product.productImage.name}`);

  try {
   // Upload image to Firebase Storage
   await uploadBytes(storageRef, product.productImage);
   const imageUrl = await getDownloadURL(storageRef);

   // Add product to Firestore
   const productRef = collection(fireDB, "products");
   await addDoc(productRef, {
    ...product,
    productImage: imageUrl,
   });

   toast.success("Product added successfully");
   navigate("/admin-dashboard");
   setLoading(false);
  } catch (error) {
   console.error(error);
   setLoading(false);
   toast.error("Failed to add product");
  }
 };

 return (
  <div>
   <div className="flex justify-center items-center h-screen">
    {loading && <Loader />}
    {/* Login Form */}
    <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
     {/* Top Heading */}
     <div className="mb-5">
      <h2 className="text-center text-2xl font-bold text-pink-500 ">Add Product</h2>
     </div>

     {/* Input TITLE */}
     <div className="mb-3">
      <input
       type="text"
       name="title"
       value={product.title}
       onChange={(e) => {
        setProduct({
         ...product,
         title: e.target.value,
        });
       }}
       placeholder="Product Title"
       className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
      />
     </div>

     {/* Input PRICE */}
     <div className="mb-3">
      <input
       type="number"
       name="price"
       value={product.price}
       onChange={(e) => {
        setProduct({
         ...product,
         price: e.target.value,
        });
       }}
       placeholder="Product Price"
       className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
      />
     </div>
     {/* Input QUANTITY */}
     <div className="mb-3">
      <input
       type="number"
       name="quantity"
       value={product.quantity}
       onChange={(e) => {
        setProduct({
         ...product,
         quantity: e.target.value,
        });
       }}
       placeholder="Product quantity"
       className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
      />
     </div>

     {/* Input IMAGE */}
     <div className="mb-3">
      <input type="file" name="productImage" onChange={handleFileChange} placeholder="Product Image" className="bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300" />
     </div>

     {/* Input CATEGORY */}
     <div className="mb-3">
      <select
       value={product.category}
       onChange={(e) => {
        setProduct({
         ...product,
         category: e.target.value,
        });
       }}
       className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none"
      >
       <option disabled>Select Product Category</option>
       {categoryList.map((value, index) => {
        const { name } = value;
        return (
         <option className="first-letter:uppercase" key={index} value={name}>
          {name}
         </option>
        );
       })}
      </select>
     </div>

     {/* Input DESCRIPTION */}
     <div className="mb-3">
      <textarea
       value={product.description}
       onChange={(e) => {
        setProduct({
         ...product,
         description: e.target.value,
        });
       }}
       name="description"
       placeholder="Product Description"
       rows="5"
       className="w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300"
      ></textarea>
     </div>

     {/* Add Product Button */}
     <div className="mb-3">
      <button onClick={addProductFunction} type="button" className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md">
       Add Product
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AddProductPage;
