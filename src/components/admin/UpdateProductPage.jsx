import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyContext from "../../context/MyContext";
import Loader from "../Loader";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const categoryList = [{ name: "none" }, { name: "fashion" }, { name: "shirt" }, { name: "jacket" }, { name: "mobile" }, { name: "laptop" }, { name: "shoes" }, { name: "home" }, { name: "books" }];

const UpdateProductPage = () => {
 const context = useContext(MyContext);
 const { loading, setLoading, getAllProductFunction } = context;
 const navigate = useNavigate();
 const { id } = useParams();

 const [product, setProduct] = useState({
  title: "",
  price: "",
  quantity: "",
  productImage: "",
  category: "",
  description: "",
  time: Timestamp.now(),
  date: new Date().toLocaleString("en-IN", {
   month: "2-digit",
   day: "2-digit",
   year: "2-digit",
  }),
 });

 const [newImageFile, setNewImageFile] = useState(null);

 //  GET SINGLE PRODUCT
 const getSingleProductFunction = async () => {
  setLoading(true);

  try {
   const productTemp = await getDoc(doc(fireDB, "products", id));
   const product = productTemp.data();
   setProduct({
    title: product?.title,
    price: product?.price,
    productImage: product?.productImage,
    category: product?.category,
    description: product?.description,
    quantity: product?.quantity,
    time: product?.time,
    date: product?.date,
   });
   setLoading(false);
  } catch (error) {
   setLoading(false);
  }
 };

 const handleFileChange = (e) => {
  if (e.target.files[0]) {
   setNewImageFile(e.target.files[0]);
  }
 };

 const updateProduct = async () => {
  setLoading(true);

  try {
   let updatedProduct = { ...product };

   if (newImageFile) {
    const storage = getStorage();
    const storageRef = ref(storage, `products/${newImageFile.name}`);
    await uploadBytes(storageRef, newImageFile);
    const imageUrl = await getDownloadURL(storageRef);
    updatedProduct.productImage = imageUrl;
   }

   await setDoc(doc(fireDB, "products", id), updatedProduct);
   toast.success("Product Updated successfully");
   getAllProductFunction();
   setLoading(false);
   navigate("/admin-dashboard");
  } catch (error) {
   setLoading(false);
  }
 };

 useEffect(() => {
  getSingleProductFunction();
 }, []);

 return (
  <div>
   <div className="flex justify-center items-center h-screen bg-orange-200">
    {loading && <Loader />}
    <div className=" bg-orange-50 p-2 border border-orange-400 rounded-xl shadow-md backdrop-blur-sm">
     <div className="mb-5">
      <h2 className="text-center text-2xl font-bold text-amber-500 ">Update Product</h2>
     </div>
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
       minLength={4}
       maxLength={20}
       title="Min 4 Characters"
       className="bg-orange-50 border text-amber-300 border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300"
      />
     </div>
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
     <div className="mb-3">
      <input type="file" name="productImage" onChange={handleFileChange} placeholder="Product Image" className="bg-orange-50 border text-amber-300 border-orange-200 px-2 py-2 w-96 rounded-md outline-none placeholder-orange-300" />
     </div>
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
       title="Minimum 20 Characters"
       minLength={20}
       maxLength={120}
       className="w-full px-2 py-1 text-amber-300 bg-orange-50 border border-orange-200 rounded-md outline-none placeholder-orange-300"
      ></textarea>
     </div>
     <div className="mb-3">
      <button onClick={updateProduct} type="button" className="bg-orange-500 hover:bg-orange-600 w-full text-white text-center py-2 font-bold rounded-md">
       Update Product
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default UpdateProductPage;
