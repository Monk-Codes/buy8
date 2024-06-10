import { useState } from "react";
import Dialogs from "./Dialogs";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
 const [open, setOpen] = useState(false);

 const handleOpen = () => setOpen(!open);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setAddressInfo((prevInfo) => ({
   ...prevInfo,
   [name]: value,
  }));
 };

 return (
  <>
   <button type="button" onClick={handleOpen} className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl">
    Buy now
   </button>
   <Dialogs open={open} handler={handleOpen} className="bg-pink-50">
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
     <h2 className="text-2xl font-bold mb-4">Purchase Details</h2>
     <div className="mb-3">
      <input type="text" name="name" value={addressInfo.name} onChange={handleChange} placeholder="Enter your name" className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300" />
     </div>
     <div className="mb-3">
      <input type="text" name="address" value={addressInfo.address} onChange={handleChange} placeholder="Enter your address" className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300" />
     </div>
     <div className="mb-3">
      <input
       type="number"
       name="pincode"
       value={addressInfo.pincode}
       onChange={handleChange}
       placeholder="Enter your pincode"
       className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
      />
     </div>
     <div className="mb-3">
      <input
       type="text"
       name="mobileNumber"
       value={addressInfo.mobileNumber}
       onChange={handleChange}
       placeholder="Enter your mobile number"
       className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
      />
     </div>
     <div className="">
      <button
       type="button"
       onClick={() => {
        handleOpen();
        buyNowFunction();
       }}
       className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
      >
       Buy now
      </button>
     </div>
    </div>
   </Dialogs>
  </>
 );
};

export default BuyNowModal;
