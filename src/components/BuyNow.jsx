import { useState } from "react";
import Dialogs from "./Dialogs";
import toast from "react-hot-toast";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
 const [open, setOpen] = useState(false);

 const handleOpen = () => {
  window.scrollTo({ top: open, behavior: "smooth" });
  setOpen(!open);
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setAddressInfo((prevInfo) => ({
   ...prevInfo,
   [name]: value,
  }));
 };

 const handleSubmit = () => {
  // Validation
  if (addressInfo.name.length < 4 || addressInfo.address.length < 10 || addressInfo.pincode.length !== 6 || addressInfo.mobileNumber.length !== 10) {
   toast.error("Please fill all fields with valid information.");
   return;
  }

  handleOpen();
  buyNowFunction();
 };

 return (
  <>
   <button type="button" onClick={handleOpen} className="w-full px-4 py-3 text-center text-gray-100 bg-amber-400 border border-transparent dark:border-gray-700 hover:border-amber-500 hover:bg-teal-400 rounded-3xl">
    Buy now
   </button>
   <Dialogs open={open} handler={handleOpen} className="bg-amber-50 ">
    <div className="w-full  max-w-md px-8 py-2 bg-amber-100 rounded-3xl shadow-md ">
     <h2 className="text-xl font-main  text-amber-500 text-center p-5 ">Purchase Details</h2>
     <div className="mb-8">
      <input
       type="text"
       name="name"
       value={addressInfo.name}
       onChange={handleChange}
       placeholder="Enter your name"
       className="bg-amber-50 border border-amber-200 px-2 py-2 w-full rounded-md outline-none text-amber-600 placeholder-amber-300"
       minLength={4}
       maxLength={20}
       required
      />
     </div>
     <div className="mb-8">
      <input
       type="text"
       name="address"
       value={addressInfo.address}
       onChange={handleChange}
       placeholder="Enter your address"
       className="bg-amber-50 border border-amber-200 px-2 py-2 w-full rounded-md outline-none text-amber-600 placeholder-amber-300"
       minLength={10}
       maxLength={100}
       required
      />
     </div>
     <div className="mb-8">
      <input
       type="text"
       name="pincode"
       value={addressInfo.pincode}
       onChange={handleChange}
       placeholder="Enter your 6 digit pincode"
       className="bg-amber-50 border border-amber-200 px-2 py-2 w-full rounded-md outline-none text-amber-600 placeholder-amber-300"
       required
       minLength={6}
       maxLength={6}
      />
     </div>
     <div className="mb-8">
      <input
       type="text"
       name="mobileNumber"
       value={addressInfo.mobileNumber}
       onChange={handleChange}
       placeholder="Enter your mobile number"
       className="bg-amber-50 border border-amber-200 px-2 py-2 w-full rounded-md outline-none text-amber-600 placeholder-amber-300"
       minLength={10}
       maxLength={10}
       required
      />
     </div>
     <div className="">
      <button type="button" onClick={handleSubmit} className="w-full px-4 py-3 text-center text-gray-100 bg-green-500 hover:bg-green-400 border border-transparent dark:border-gray-700 rounded-2xl">
       Pay now
      </button>
     </div>
    </div>
   </Dialogs>
  </>
 );
};

export default BuyNowModal;
