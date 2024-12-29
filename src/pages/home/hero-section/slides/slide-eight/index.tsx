import logo from "../../../../../assets/logo.png";

const SlideEight = () => {
  return (
    <div
      className={`bg-[url('/banner/8.jpg')] h-screen lg:h-auto bg-contain lg:bg-left-top bg-no-repeat relative overflow-hidden min-w-full`}
    >
      <div className="container">
        <div className="py-4 lg:py-10">
          <a className="w-full max-w-[200px] lg:max-w-sm inline-block" href="#">
            <img className="logo" src={logo} alt="Spark Agency Logo" />
          </a>

          {/* main content */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-28 lg:h-screen mt-10 lg:mt-0">
            <div className="hidden space-y-2 lg:flex flex-col lg:basis-[45%]">
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
            </div>

            <div className="absolute top-20 lg:static space-y-6 flex flex-col flex-1 lg:px-16 mt-28 lg:mt-0">
              <h3 className="text-white lg:text-[#11162E] text-5xl font-tiltWrap text-center w-full lg:max-w-sm mx-auto">
                Vraag hieronder een offerte op
              </h3>
              <div className="border p-6 space-y-6 bg-white">
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="border p-2 rounded"
                    placeholder="Value"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold" htmlFor="surname">
                    Surname
                  </label>
                  <input
                    className="border p-2 rounded"
                    placeholder="Value"
                    type="text"
                    name="surname"
                    id="surname"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border p-2 rounded"
                    placeholder="Value"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="p-2 rounded border"
                    name="message"
                    id="message"
                    placeholder="Value"
                  ></textarea>
                </div>
                <button className="bg-[#11162E] text-white w-full rounded font-semibold py-2 px-4">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideEight;
