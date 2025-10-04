
import './App.css';
import CategoriesSection from './components/CategoriesSection.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import TodaySection from './components/TodaySection.jsx';
import TopBar from "./components/TopBar.jsx";
import BestSellingSection from "./components/BestSellingSection.jsx";
import FeaturedProductSection from "./components/FeaturedProductSection.jsx";
import ExploreSection from './components/ExploreSection.jsx';
import NewArrivalSection from './components/NewArrivalSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import Footer from './components/Footer.jsx';
function App() {

  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      <TodaySection />
      <CategoriesSection />
      <BestSellingSection />
      <FeaturedProductSection />
      <ExploreSection />
      <NewArrivalSection />
      <ServicesSection />
      <Footer />
    </>
  )
}

export default App;
