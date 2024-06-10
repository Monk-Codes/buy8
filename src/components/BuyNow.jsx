import { useState } from "react";
import Dialogs from "./Dialogs";
import toast from "react-hot-toast";

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
   <button type="button" onClick={handleOpen} className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl">
    Buy now
   </button>
   <Dialogs open={open} handler={handleOpen} className="bg-pink-50">
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
     <h2 className="text-2xl font-bold mb-4">Purchase Details</h2>
     <div className="mb-3">
      <input
       type="text"
       name="name"
       value={addressInfo.name}
       onChange={handleChange}
       placeholder="Enter your name"
       className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
       minLength={4}
       maxLength={20}
       required
      />
     </div>
     <div className="mb-3">
      <input
       type="text"
       name="address"
       value={addressInfo.address}
       onChange={handleChange}
       placeholder="Enter your address"
       className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
       minLength={10}
       maxLength={100}
       required
      />
     </div>
     <div className="mb-3">
      <input
       type="text"
       name="pincode"
       value={addressInfo.pincode}
       onChange={handleChange}
       placeholder="Enter your 6 digit pincode"
       className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
       required
       minLength={6}
       maxLength={6}
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
       minLength={10}
       maxLength={10}
       required
      />
     </div>
     <div className="">
      <button type="button" onClick={handleSubmit} className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg">
       Buy now
      </button>
     </div>
    </div>
   </Dialogs>
  </>
 );
};

export default BuyNowModal;
