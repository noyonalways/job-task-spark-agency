import avatar from "../../../../../assets/avatar.jpg";
import box from "../../../../../assets/box.png";
import handMessage from "../../../../../assets/images/hand-message.png";
import line from "../../../../../assets/line.png";
import tenYearsWarranty from "../../../../../assets/stickers/10-years.png";
import google from "../../../../../assets/stickers/google.png";
import topPro from "../../../../../assets/stickers/top-pro.png";
import { logos } from "../../../../../constants";

const SlideOne = () => {
  return (
    <div
      className={`bg-[url('/banner/1.jpg')] lg:h-screen bg-cover bg-no-repeat relative overflow-hidden min-w-full`}
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
            <img className="logo" src={logos.logo1} alt="Spark Agency Logo" />
          </a>

          {/* cards */}
          <div className="absolute top-[50%] -translate-y-[50%] w-full left-0">
            <div className="grid lg:grid-cols-2 justify-evenly w-full md:pl-12 lg:pl-96 gap-5">
              <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6">
                <div className="flex flex-col items-end flex-1">
                  <h5 className="text-[#000000] font-semibold text-xl">
                    Fermin Vargas
                  </h5>
                  <p className="text-[#78858F] text-base text-right">
                    Construction <br /> manager
                  </p>
                </div>
                <img
                  className="object-cover w-[107px] h-[97px] rounded-r-2xl"
                  src={avatar}
                  alt="avatar"
                />
              </div>
              <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6">
                <div className="flex flex-col items-end flex-1">
                  <h5 className="text-[#000000] font-semibold text-xl">
                    Fermin Vargas
                  </h5>
                  <p className="text-[#78858F] text-base text-right">
                    Construction <br /> manager
                  </p>
                </div>
                <img
                  className="object-cover w-[107px] h-[97px] rounded-r-2xl"
                  src={avatar}
                  alt="avatar"
                />
              </div>
            </div>

            <div className="hidden lg:flex my-4">
              <div>
                <img src={line} alt="image" />
                <div className="flex justify-end">
                  <img src={box} alt="" />
                </div>
              </div>
              <div>
                <img src={line} alt="image" />
                <div className="flex justify-end">
                  <img src={box} alt="" />
                </div>
              </div>
              <div>
                <img src={line} alt="image" />
                <div className="flex justify-end">
                  <img src={box} alt="" />
                </div>
              </div>
              <div>
                <img src={line} alt="image" />
                <div className="flex justify-end">
                  <img src={box} alt="" />
                </div>
              </div>
              <div>
                <img src={line} alt="image" />
                <div className="flex justify-end">
                  <img src={box} alt="" />
                </div>
              </div>
              <div>
                <img src={line} alt="image" />
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-between w-full md:pl-12">
              <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6">
                <div className="flex flex-col items-end flex-1">
                  <h5 className="text-[#000000] font-semibold text-xl">
                    Fermin Vargas
                  </h5>
                  <p className="text-[#78858F] text-base text-right">
                    Construction <br /> manager
                  </p>
                </div>
                <img
                  className="object-cover w-[107px] h-[97px] rounded-r-2xl"
                  src={avatar}
                  alt="avatar"
                />
              </div>
              <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6 ml-40">
                <div className="flex flex-col items-end flex-1">
                  <h5 className="text-[#000000] font-semibold text-xl">
                    Fermin Vargas
                  </h5>
                  <p className="text-[#78858F] text-base text-right">
                    Construction <br /> manager
                  </p>
                </div>
                <img
                  className="object-cover w-[107px] h-[97px] rounded-r-2xl"
                  src={avatar}
                  alt="avatar"
                />
              </div>
              <div className="bg-white rounded-2xl flex justify-between items-center w-[290px] h-[97px] gap-6 ml-48 mt-10 lg:mt-0">
                <div className="flex flex-col items-end flex-1">
                  <h5 className="text-[#000000] font-semibold text-xl">
                    Fermin Vargas
                  </h5>
                  <p className="text-[#78858F] text-base text-right">
                    Construction <br /> manager
                  </p>
                </div>
                <img
                  className="object-cover w-[107px] h-[97px] rounded-r-2xl"
                  src={avatar}
                  alt="avatar"
                />
              </div>
            </div>
          </div>

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
