import { useNavigate } from "react-router";
import Layout from "../components/Layout";

// productData
const productData = [
 {
  id: 1,
  image: "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  title: "Hand Painted Blue .am Tea Pot in Aluminium",
  desc: "Shop Hand Painted Blue .am Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  price: 150,
  trendingProductName: "Featured",
  quantity: 1,
 },
 {
  id: 2,
  image: "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  title: ".am kalash Copper Pot",
  desc: "Shop Hand Painted Blue .am Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  price: 120,
  trendingProductName: "Featured",
  quantity: 1,
 },
 {
  id: 3,
  image: "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  title: "Hand Painted Blue .am Tea Pot in Aluminium",
  desc: "Shop Hand Painted Blue .am Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  price: 130,
  trendingProductName: "Featured",
  quantity: 1,
 },
 {
  id: 4,
  image: "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
  title: "Hand Painted Blue .am Tea Pot in Aluminium",
  desc: "Shop Hand Painted Blue .am Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  price: 120,
  trendingProductName: "Featured",
  quantity: 1,
 },
 {
  id: 1,
  image: "https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg",
  title: "Hand Painted Blue .am Tea Pot in Aluminium",
  desc: "Shop Hand Painted Blue .am Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  price: 150,
  trendingProductName: "Featured",
  quantity: 1,
 },
 {
  id: 2,
  image: "https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg",
  title: ".am kalash Copper Pot",
  desc: "Shop Hand Painted Blue .am Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  price: 120,
  trendingProductName: "Featured",
  quantity: 1,
 },
 {
  id: 3,
  image: "https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg",
  title: "Hand Painted Blue .am Tea Pot in Aluminium",
  desc: "Shop Hand Painted Blue .am Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  price: 130,
  trendingProductName: "Featured",
  quantity: 1,
 },
 {
  id: 4,
  image: "https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg",
  title: "Hand Painted Blue .am Tea Pot in Aluminium",
  desc: "Shop Hand Painted Blue .am Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.",
  price: 120,
  trendingProductName: "Featured",
  quantity: 1,
 },
];

const AllProduct = () => {
 const navigate = useNavigate();
 return (
  <Layout>
   <div className="py-8">
    {/* Heading  */}
    <div className="">
     <h1 className=" text-center mb-5 text-2xl font-semibold">All Products</h1>
    </div>

    {/* main  */}
    <section className="text-gray-600 body-font">
     <div className="container px-5 lg:px-0 py-5 mx-auto">
      <div className="flex flex-wrap -m-4">
       {productData.map((item, index) => {
        const { image, title, price } = item;
        return (
         <div key={index} className="px-10 mb-4 w-full md:w-1/2 lg:w-1/4">
          <div className="product-card h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
           <img onClick={() => navigate("/productinfo")} className="h-72 w-full lg:w-full lg:h-80 transition duration-300 ease-in-out transform hover:scale-105" src={image} alt="image" />
           <div className="p-4 transition duration-300 ease-in-out transform hover:bg-gray-200">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category</h2>
            <h1 className="title-font text-lg font-medium text-gray-700 mb-3">{title.substring(0, 25)}</h1>
            <h1 className="title-font text-lg font-medium text-amber-500 mb-3">₹{price}</h1>
            <div className="flex justify-center ">
             <button className="bg-slate-500 hover:bg-amber-400 w-full text-white py-[4px] rounded-2xl font-bold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-amber-500">Add To Cart</button>
            </div>
           </div>
          </div>
         </div>
        );
       })}
      </div>
     </div>
    </section>
   </div>
  </Layout>
 );
};

export default AllProduct;
