import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { carouselImages } from "../../../constants";

const FeaturedSection = () => {
  return (
    <section className="py-10">
      {/* main content */}
      <div className="container mb-16">
        <div>
          <div className="mb-16">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              breakpoints={{
                // For small screens (mobile)
                320: {
                  slidesPerView: 1, // Show 1 slide
                  spaceBetween: 10, // Add spacing between slides
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: false,
                  },
                },
                // For medium screens (tablets)
                768: {
                  slidesPerView: 2, // Show 2 slides
                  spaceBetween: 0,
                  coverflowEffect: {
                    rotate: -30,
                    stretch: 0,
                    depth: 80,
                    modifier: 1.5,
                    slideShadows: false,
                  },
                },
                // For large screens (desktops)
                1024: {
                  slidesPerView: 3, // Show 3 slides
                  spaceBetween: 10,
                  coverflowEffect: {
                    rotate: -30,
                    stretch: 0,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                  },
                },
              }}
              autoplay={true}
              loop={true}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {carouselImages.map((item) => (
                <SwiperSlide className="lg:my-10" key={item.id}>
                  <img
                    className="w-full mx-auto lg:max-w-md max-h-[480px] lg:max-h-[500px] object-cover rounded-lg"
                    src={item.src}
                    alt={item.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="space-y-4 w-full lg:max-w-5xl mx-auto">
            <p>
              Bij GMK Dakonderhoud combineren we vakmanschap met passie voor
              daken. Onze specialisten zijn deskundig in het aanbrengen en
              onderhouden van diverse soorten dakbedekkingen, waaronder
              dakpannen, bitumen en EPDM. Of het nu gaat om dakisolatie,
              dakreiniging of het repareren van lekkages, wij behandelen elke
              klus met de hoogste zorg en aandacht.
            </p>
            <p>
              Onze focus ligt op kwaliteit en duurzaamheid, zodat uw dak niet
              alleen functioneel is, maar ook esthetisch aantrekkelijk. Klanten
              waarderen onze snelle service en professionele oplossingen. Bekijk
              onze projecten en ontdek hoe wij uw dak kunnen transformeren met
              de juiste materialen en technieken voor een langdurige
              bescherming.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-[#11162E] text-6xl lg:text-[320px] font-nobile font-bold mb-2 lg:mb-4">
        ONS WERK
      </h1>
    </section>
  );
};

export default FeaturedSection;
