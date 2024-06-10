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

 // GET ORDER FUNCTION
 const [getAllOrder, setGetAllOrder] = useState([]);

 const getAllOrderFunction = async () => {
  setLoading(true);
  try {
   const q = query(collection(fireDB, "order"), orderBy("time"));
   const data = onSnapshot(q, (QuerySnapshot) => {
    let orderArray = [];
    QuerySnapshot.forEach((doc) => {
     orderArray.push({ ...doc.data(), id: doc.id });
    });
    setGetAllOrder(orderArray);
    setLoading(false);
   });
   return () => data;
  } catch (error) {
   console.log(error);
   setLoading(false);
  }
 };

 // GET USERS FUNCTION
 const [getAllUser, setGetAllUser] = useState([]);

 const getAllUserFunction = async () => {
  setLoading(true);
  try {
   const q = query(collection(fireDB, "user"), orderBy("time"));
   const data = onSnapshot(q, (QuerySnapshot) => {
    let userArray = [];
    QuerySnapshot.forEach((doc) => {
     userArray.push({ ...doc.data(), id: doc.id });
    });
    setGetAllUser(userArray);
    setLoading(false);
   });
   return () => data;
  } catch (error) {
   console.log(error);
   setLoading(false);
  }
 };

 useEffect(() => {
  getAllProductFunction();
  getAllOrderFunction();
  getAllUserFunction();
 }, []);
 return (
  <MyContext.Provider
   value={{
    loading,
    setLoading,
    getAllProduct,
    getAllProductFunction,
    getAllOrder,
    getAllOrderFunction,
    getAllUser,
   }}
  >
   {children}
  </MyContext.Provider>
 );
}

export default MyState;
