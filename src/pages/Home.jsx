import HeroSection from "../components/HeroSection";
import TodaySection from '../components/TodaySection.jsx';
import CategoriesSection from '../components/CategoriesSection.jsx';
import BestSellingSection from "../components/BestSellingSection.jsx";
import FeaturedProductSection from "../components/FeaturedProductSection.jsx";
import ExploreSection from '../components/ExploreSection.jsx';
import NewArrivalSection from '../components/NewArrivalSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
function Home(){
    return(
        <>
      <HeroSection />
      <TodaySection />
      <CategoriesSection />
      <BestSellingSection />
      <FeaturedProductSection />
      <ExploreSection />
      <NewArrivalSection />
      <ServicesSection />
      <ScrollToTopButton />
           
            </>
    )
};
export default Home;