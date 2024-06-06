/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

function MyState({ children }) {
 const [loading, setLoading] = useState(false);
 const [getAllProduct, setGetAllProduct] = useState([]);

 // GET PRODUCT FUNCTION
 const getAllProductFunction = async () => {
  setLoading(true);
  try {
   const q = query(collection(fireDB, "products"), orderBy("time"));
   const data = onSnapshot(q, (QuerySnapshot) => {
    let productArray = [];
    QuerySnapshot.forEach((doc) => {
     productArray.push({ ...doc.data(), id: doc.id });
    });
    setGetAllProduct(productArray);
    setLoading(false);
   });
   return () => data;
  } catch (error) {
   setLoading(false);
  }
 };

 useEffect(() => {
  getAllProductFunction();
 }, []);
 return (
  <MyContext.Provider
   value={{
    loading,
    setLoading,
    getAllProduct,
    getAllProductFunction
   }}
  >
   {children}
  </MyContext.Provider>
 );
}

export default MyState;
