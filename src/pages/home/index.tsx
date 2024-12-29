import Footer from "../../shared/footer";
import AboutUs from "./about-us";
import FeaturedSection from "./featured-section";
import HeroSection from "./hero-section";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default HomePage;
