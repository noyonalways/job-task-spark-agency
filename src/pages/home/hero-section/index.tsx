import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideEight from "./slides/slide-eight";
import SlideFive from "./slides/slide-five";
import SlideFour from "./slides/slide-four";
import SlideOne from "./slides/slide-one";
import SlideSeven from "./slides/slide-seven";
import SlideSix from "./slides/slide-six";
import SlideThree from "./slides/slide-three";
import SlideTwo from "./slides/slide-two";

// Import Swiper styles
import "swiper/swiper-bundle.css";

const slides = [
  {
    id: "slide-001",
    component: SlideOne,
  },
  {
    id: "slide-002",
    component: SlideTwo,
  },
  {
    id: "slide-003",
    component: SlideThree,
  },
  {
    id: "slide-004",
    component: SlideFour,
  },
  {
    id: "slide-005",
    component: SlideFive,
  },
  {
    id: "slide-006",
    component: SlideSix,
  },
  {
    id: "slide-007",
    component: SlideSeven,
  },
  {
    id: "slide-008",
    component: SlideEight,
  },
];

const HeroSection = () => {
  return (
    <>
      <Swiper
        className="mySwiper lg:overflow-hidden lg:h-screen"
        grabCursor={true}
        loop={true}
        autoplay={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Autoplay]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <slide.component />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSection;
