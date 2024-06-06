import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import MyContext from "../context/MyContext";
import Track from "../components/Track";
import Testimonial from "../components/Testimonial";
import HomePageProductCard from "../components/HomePageProductCard";
import Category from "../components/Category";

const HomePage = () => {
 return (
  <Layout>
   <HeroSection />
   <Category />
   <HomePageProductCard />
   <Track />
   <Testimonial />
  </Layout>
 );
};

export default HomePage;
