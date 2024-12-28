import logo from "../../../../../assets/logo.png";

const SlideThree = () => {
  return (
    <div
      className={`bg-[url('/banner/3.jpg')] h-screen bg-center lg:bg-top bg-cover bg-no-repeat relative overflow-hidden`}
    >
      <div className="container">
        <div className="py-4 lg:py-10 flex flex-col justify-between w-full h-screen">
          <a className="w-full max-w-[200px] lg:max-w-sm inline-block" href="#">
            <img className="logo" src={logo} alt="Spark Agency Logo" />
          </a>

          {/* main content */}
          <div className="w-full lg:max-w-2xl space-y-4 text-right ml-auto">
            <h1 className="font-tiltWrap text-3xl lg:text-6xl text-white !leading-tight">
              Wij bieden een duurzame en passende oplossing voor uw klus.
            </h1>
            <p className="font-actor text-gray-100 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideThree;
