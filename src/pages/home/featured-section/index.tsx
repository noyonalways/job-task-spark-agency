import "keen-slider/keen-slider.min.css";
import { KeenSliderPlugin, useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import Title from "../../../components/title";
import { carouselImages } from "../../../constants";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 620;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const sliderInterval = 3000;

const FeaturedSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
      drag: true,
    },
    [carousel]
  );

  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;

    autoplayRef.current = window.setInterval(() => {
      if (slider) {
        slider.next(); // Moves to the next slide
      }
    }, sliderInterval);

    return () => {
      if (autoplayRef.current !== null) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [instanceRef]);

  return (
    <section className="py-10 lg:mb-[360px]">
      <div className="container mb-16">
        <div className="overflow-hidden">
          <div className="wrapper">
            <div className="scene">
              <div className="carousel keen-slider" ref={sliderRef}>
                {carouselImages?.map((item, index) => (
                  <div key={item.id} className={`carousel__cell`}>
                    <img
                      className="rounded-xl w-full h-full object-cover"
                      src={item.src}
                      alt={item.alt || `Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-full lg:max-w-5xl mx-auto">
          <p>
            Bij GMK Dakonderhoud combineren we vakmanschap met passie voor
            daken. Onze specialisten zijn deskundig in het aanbrengen en
            onderhouden van diverse soorten dakbedekkingen, waaronder dakpannen,
            bitumen en EPDM. Of het nu gaat om dakisolatie, dakreiniging of het
            repareren van lekkages, wij behandelen elke klus met de hoogste zorg
            en aandacht.
          </p>
          <p>
            Onze focus ligt op kwaliteit en duurzaamheid, zodat uw dak niet
            alleen functioneel is, maar ook esthetisch aantrekkelijk. Klanten
            waarderen onze snelle service en professionele oplossingen. Bekijk
            onze projecten en ontdek hoe wij uw dak kunnen transformeren met de
            juiste materialen en technieken voor een langdurige bescherming.
          </p>
        </div>
      </div>

      <Title>ONS WERK</Title>
    </section>
  );
};

export default FeaturedSection;
