const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col-reverse lg:flex-row  gap-y-2 lg:gap-y-0 lg:items-center lg:justify-between lg:pl-4 pl-2 mb-10 lg:mb-4">
        <h2 className="text-2xl lg:text-5xl w-full lg:max-w-2xl font-bold !leading-snug">
          Overtuigd van de nummer 1 in Noord Holland ?
        </h2>
        <h1 className="text-[#11162E] text-6xl lg:text-[320px] font-nobile font-bold mb-2 lg:mb-4">
          GMK
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center w-full lg:justify-between lg:px-4 border-t border-[#11162E] py-4 gap-4 px-2">
        <div className="flex flex-col">
          <p>GMK Dakonderhoud B.V.</p>
          <p>Leidsekade 57 1016 CX Amsterdam</p>
        </div>
        <div className="flex flex-col">
          <a href="#" className="hover:underline">
            info@dakonderhoudgmk.nl
          </a>
          <a className="hover:underline" href="tel:020261257">
            (020) 26 12 257
          </a>
        </div>
        <div className="flex flex-col">
          <a className="hover:underline" href="#">
            Privacy verklaring
          </a>
          <a className="hover:underline" href="#">
            Algemene Voorwaarden
          </a>
        </div>
        <div className="flex flex-col">
          <p>(C) MMXXIV GMK Dakonderhoud B.V.</p>
          <p>Concept by Nakatori Amsterdam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
