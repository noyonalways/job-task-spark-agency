import SlideFive from "./slides/slide-five";
import SlideFour from "./slides/slide-four";
import SlideOne from "./slides/slide-one";
import SlideThree from "./slides/slide-three";
import SlideTwo from "./slides/slide-two";

const HeroSection = () => {
  return (
    <div className="max-w-full">
      <SlideOne />
      <SlideTwo />
      <SlideThree />
      <SlideFour />
      <SlideFive />
    </div>
  );
};

export default HeroSection;
