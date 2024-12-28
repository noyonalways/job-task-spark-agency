import SlideEight from "./slides/slide-eight";
import SlideFive from "./slides/slide-five";
import SlideFour from "./slides/slide-four";
import SlideOne from "./slides/slide-one";
import SlideSeven from "./slides/slide-seven";
import SlideSix from "./slides/slide-six";
import SlideThree from "./slides/slide-three";
import SlideTwo from "./slides/slide-two";

const HeroSection = () => {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="flex">
        <SlideOne />
        <SlideTwo />
        <SlideThree />
        <SlideFour />
        <SlideFive />
        <SlideSix />
        <SlideSeven />
        <SlideEight />
      </div>
    </div>
  );
};

export default HeroSection;
