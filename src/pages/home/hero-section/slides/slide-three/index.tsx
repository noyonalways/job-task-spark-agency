import { logos } from "../../../../../constants";

const SlideThree = () => {
  return (
    <div
      className={`bg-[url('/banner/3.jpg')] bg-center h-screen lg:bg-top bg-cover bg-no-repeat relative overflow-hidden min-w-full`}
    >
      <div className="container">
        <div className="py-4 lg:py-10">
          <a
            className="w-full max-w-[200px] lg:max-w-sm inline-block float-right"
            href="#"
          >
            <img className="logo" src={logos.logo2} alt="Spark Agency Logo" />
          </a>

          <div className="flex flex-col justify-center w-full h-screen">
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

export default SlideThree;
