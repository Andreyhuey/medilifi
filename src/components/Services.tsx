import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";

const Services = () => {
  return (
    <div className="min-h-screen section bg-white w-full">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-[#A1A7B0]">SERVICES </p>
        <h1 className="lg:text-[56px] text-[46px] font-bold lg:leading-[64px] leading-[50px] lg:w-full text-center">
          Field of Health and Healing
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:px-20 gap-4 md:gap-8 mt-4 lg:mt-8">
        <div className="flex items-center justify-center  lg:w-[100%] shadow-md">
          <div className="bg-[#EEFAFF] flex items-center justify-center w-full h-full">
            <img src={icon4} alt="icon4" className="object-contain w-fit" />
          </div>
          <div className="p-6 flex flex-col items-start h-full w-full justify-between gap-12 lg:gap-20">
            <p className="font-bold ">Health Promotion</p>
            <p className="text-[#33333369]">
              Organized medical service offering
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center  lg:w-[100%] shadow-md">
          <div className="bg-[#EEFAFF] flex items-center justify-center w-full h-full">
            <img src={icon5} alt="icon4" className="object-contain w-fit" />
          </div>
          <div className="p-6 flex flex-col items-start h-full w-full justify-between gap-12 lg:gap-20">
            <p className="font-bold ">Health Promotion</p>
            <p className="text-[#33333369]">
              Organized medical service offering
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center  lg:w-[100%] shadow-md">
          <div className="bg-[#EEFAFF] flex items-center justify-center w-full h-full">
            <img src={icon6} alt="icon4" className="object-contain w-fit" />
          </div>
          <div className="p-6 flex flex-col items-start h-full w-full justify-between gap-12 lg:gap-20">
            <p className="font-bold ">Health Promotion</p>
            <p className="text-[#33333369]">
              Organized medical service offering
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center  lg:w-[100%] shadow-md">
          <div className="bg-[#EEFAFF] flex items-center justify-center w-full h-full">
            <img src={icon7} alt="icon4" className="object-contain w-fit" />
          </div>
          <div className="p-6 flex flex-col items-start h-full w-full justify-between gap-12 lg:gap-20">
            <p className="font-bold ">Health Promotion</p>
            <p className="text-[#33333369]">
              Organized medical service offering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
