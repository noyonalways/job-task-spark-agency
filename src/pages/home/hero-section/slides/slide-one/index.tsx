import handMessage from "../../../../../assets/images/hand-message.png";
import logo from "../../../../../assets/logo.png";
import tenYearsWarranty from "../../../../../assets/stickers/10-years.png";
import google from "../../../../../assets/stickers/google.png";
import topPro from "../../../../../assets/stickers/top-pro.png";

const SlideOne = () => {
  return (
    <div
      className={`bg-[url('/banner/1.jpg')] h-screen bg-cover bg-no-repeat relative overflow-hidden min-w-full`}
    >
      {/* hand message */}
      <img
        className="hidden lg:inline-block absolute -right-32 bottom-6"
        src={handMessage}
        alt="hand-message"
      />

      <div className="container">
        <div className="py-4 lg:py-10 flex flex-col justify-between w-full h-screen">
          <a className="w-full max-w-[200px] lg:max-w-sm inline-block" href="#">
            <img className="logo" src={logo} alt="Spark Agency Logo" />
          </a>
          {/* scroll content */}
          <div className="hidden">
            <h1 className="text-3xl font-bold">
              We Are Spark Agency, Your Comprehensive Solution
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              felis vel mi rutrum consectetur. Sed quis ipsum in nunc commodo
              fermentum.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
              Learn More
            </button>
          </div>

          {/* stickers */}
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
      </div>
    </div>
  );
};

export default SlideOne;
