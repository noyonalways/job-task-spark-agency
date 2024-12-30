import tenYearsWarranty from "../../../assets/stickers/10-years.png";
import google from "../../../assets/stickers/google.png";
import topPro from "../../../assets/stickers/top-pro.png";
import Title from "../../../components/title";

const AboutUs = () => {
  return (
    <section className="pb-10 pt-10">
      <Title>OVER ONS</Title>
      <div className="container">
        <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row lg:justify-between">
          <div className="space-y-6 lg:space-y-10 lg:basis-1/2">
            <div className="space-y-4">
              <p>
                Wij zijn gespecialiseerd in Dak reparaties, -renovaties en
                -onderhoud.Dak lekkage? Spoedaanvragen? Dan bent u bij ons aan
                het juiste adres. Onze 24 uursservice zorgt ervoor dat wij u
                altijd op korte termijn een oplossing kunnen bieden. Wij brengen
                de verwachtingen van onze klanten in kaart en geven een duurzame
                passende oplossing voor uw klus. Dit wordt mogelijk gemaakt door
                onze vakmensen die jarenlang ervaring hebben. De specialisaties
                zijn o.a. het leveren en aanbrengen van Bitumen, Epdm en pannen
                daken. Maar ook het vernieuwen van lood en zink
              </p>
              <p>
                Goed om te weten; Het materiaal dat wij gebruiken behoort tot de
                A klasse producten, dit zorgt voor een perfect eindresultaat.
                Het doel is u zo snel en goed mogelijk te helpen. Wij leggen de
                lat hoog en streven naar het beste eindresultaat. Hiervoor
                hebben wij uw hulp nodig; transparantie, goede communicatie en
                duidelijke afspraken. Heeft u vragen of wilt u meer informatie?
                Wij staan klaar om u verder te helpen. Dakonderhoud GMK uw
                specialist voor alle klussen in en rondom uw huis.
              </p>
            </div>

            <div className="flex items-center space-x-4 lg:space-x-6">
              <a className="w-full max-w-[100px] lg:max-w-[160px]" href="#">
                <img src={tenYearsWarranty} alt="10-years-warranty" />
              </a>
              <a className="w-full max-w-[40px] lg:max-w-[60px]" href="#">
                <img src={topPro} alt="top-pro" />
              </a>
              <a className="w-full max-w-[80px] lg:max-w-[150px]" href="#">
                <img src={google} alt="google" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:basis-[38%]">
            <img src="./banner/1.jpg" alt="image" />
            <img src="./banner/3.jpg" alt="image" />
            <img src="./banner/6.jpg" alt="image" />
            <img src="./banner/4.jpg" alt="image" />
            <img src="./banner/7.jpg" alt="image" />
            <img src="./banner/1.jpg" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
