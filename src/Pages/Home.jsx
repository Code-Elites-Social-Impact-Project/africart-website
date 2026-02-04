import Footer from "../components/footer/Footer";
import HomeSection from "../components/HeroSection/Hero";
import Header from '../components/Header/Header'
import Trending from "../components/trendingProducts/Trending";
import Featured from "../components/featured/FeaturedSection";
import ShopbyCategory from "../components/Category";
import Badges from "../components/Badges";

const Home = () => {

  return (
    <>
    <Header />
    <HomeSection />
    <Badges />
    <ShopbyCategory />
    <Trending />
    <Featured />
    <Footer />
    </>
  );
};

export default Home;
