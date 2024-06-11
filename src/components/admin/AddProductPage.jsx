import { Timestamp, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../Loader";
import MyContext from "../../context/MyContext";

const categoryList = [{ name: "none" }, { name: "fashion" }, { name: "shirt" }, { name: "jacket" }, { name: "mobile" }, { name: "laptop" }, { name: "shoes" }, { name: "home" }, { name: "books" }];

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
  if (product.title > 4 || product.price > 1 || product.productImage === null || product.category === "" || product.description > 10 || product.quantity > 1) {
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
   <div className="flex justify-center items-center min-h-screen bg-orange-200">
    {loading && <Loader />}
    {/* Login Form */}
    <div className=" bg-amber-100 p-2 border border-orange-400 rounded-xl shadow-md backdrop-blur-sm">
     {/* Top Heading */}
     <div className="mb-5">
      <h2 className="text-center text-2xl font-bold text-amber-500 ">Add Product</h2>
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
       className="bg-orange-50 border text-amber-300 border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300"
       title="Minimum 4 characters"
       maxLength={20}
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
       className="bg-orange-50 border text-amber-300 border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300"
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
       className="bg-orange-50 border text-amber-300 border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300"
      />
     </div>

     {/* Input IMAGE */}
     <div className="mb-3">
      <input type="file" name="productImage" onChange={handleFileChange} placeholder="Product Image" className="bg-orange-50 border text-amber-300 border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300" />
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
       className="w-full px-1 py-2 text-amber-300 bg-orange-50 border border-orange-200 rounded-md outline-none"
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
       className="w-full px-2 py-1 text-amber-300 bg-orange-50 border border-orange-200 rounded-md outline-none placeholder-orange-300"
       title="Minimum 10 characters"
       maxLength={120}
      ></textarea>
     </div>

     {/* Add Product Button */}
     <div className="mb-3">
      <button onClick={addProductFunction} type="button" className="bg-amber-500 hover:bg-green-400 w-full text-white text-center py-2 font-bold rounded-md">
       Add Product
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AddProductPage;
