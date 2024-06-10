import Category from "./Category";
import HomePageProductCard from "./HomePageProductCard";
import Testimonial from "./Testimonial";
import Track from "./Track";

const HeroSection = () => {
 return (
  <>
   <div>
    <img className=" h-40 md:h-full lg:h-full" src="https://ibb.co/JxpghYR" alt="hero" />
   </div>
   <Category />
   <HomePageProductCard />
   <Track />
   <Testimonial />
  </>
 );
};

export default HeroSection;
