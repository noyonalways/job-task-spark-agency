import logo from "../../../../../assets/logo.png";

const SlideSeven = () => {
  return (
    <div
      className={`bg-[url('/banner/7.jpg')] h-screen bg-center lg:bg-top bg-cover bg-no-repeat relative overflow-hidden min-w-full`}
    >
      <div className="container">
        <div className="py-4 lg:py-10  flex flex-col lg:justify-between h-screen">
          <a className="w-full max-w-[200px] lg:max-w-sm inline-block" href="#">
            <img className="logo" src={logo} alt="Spark Agency Logo" />
          </a>

          {/* main content */}
          <div className="flex flex-col lg:flex-row mt-20 lg:mt-0 lg:justify-between">
            <div className="w-full lg:max-w-2xl space-y-4">
              <h1 className="font-tiltWrap text-3xl lg:text-6xl text-white !leading-tight">
                Wij bieden een duurzame en passende oplossing voor uw klus.
              </h1>
            </div>

            <div className="space-y-2 flex flex-col w-full lg:max-w-xl">
              <p className="font-actor text-gray-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <button className="w-44 h-8 bg-[#1677FF] rounded-full"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideSeven;
