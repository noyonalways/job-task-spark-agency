import logo from "../../../../../assets/logo.png";

const SlideFive = () => {
  return (
    <div
      className={`bg-[url('/banner/5.jpg')] h-screen bg-center lg:bg-top bg-cover bg-no-repeat relative overflow-hidden`}
    >
      <div className="container">
        <div className="py-4 lg:py-10">
          <div className="flex items-center justify-between">
            <a
              className="w-full max-w-[200px] lg:max-w-sm inline-block"
              href="#"
            >
              <img className="logo" src={logo} alt="Spark Agency Logo" />
            </a>

            {/* nav links */}
            <ul className="flex items-center font-tiltWrap text-white space-x-4">
              <li>
                <a className="hover:underline px-6" href="#">
                  Diensten
                </a>
              </li>
              <li>
                <a className="hover:underline px-6" href="#">
                  Over Ons
                </a>
              </li>
              <li>
                <a className="hover:underline px-6" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <div className="flex items-center space-x-1 text-white">
              <div className="flex items-center space-x-1">
                <span>Spoed?</span>
                <a className="hover:underline" href="#">
                  020 1234567
                </a>
                <span>of klik hier</span>
              </div>
              <span>|</span>
              <a className="hover:underline" href="#">
                Chat
              </a>
            </div>
          </div>

          {/* main content */}
          <div className="flex lg:space-x-16 items-center h-screen">
            <div className="w-full lg:max-w-2xl space-y-4">
              <h1 className="font-tiltWrap text-3xl lg:text-6xl text-white !leading-tight">
                Wij bieden een duurzame en passende oplossing voor uw klus.
              </h1>
            </div>

            <div className="space-y-2 flex flex-col">
              <h3 className="text-white text-2xl font-tiltWrap">Uw adres</h3>
              <p className="font-actor text-gray-100 text-base">
                Via uw adres kunnen we openbare en vrij verkrijgbare informatie,
                bijv. kadaster-gegevens en satelliet beelden, gebruiken om een
                optimaal beeld te vormen van uw dak.
              </p>
              <input
                className="w-full p-2 rounded"
                placeholder="Singel 63 1012VD Amsterdam"
                type="text"
                name="search"
                id="search"
              />
              <button className="px-10 py-2 bg-blue-600 rounded-full font-semibold text-white self-end">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideFive;