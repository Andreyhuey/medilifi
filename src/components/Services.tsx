import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";

const Services = () => {
  return (
    <div className="min-h-screen section bg-white">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-[#A1A7B0]">SERVICES </p>
        <h1 className="lg:text-[56px] text-[46px] font-bold lg:leading-[64px] leading-[50px] lg:max-w-[396px] text-center">
          Field of Health and Healing
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex  items-center justify-center h-[256px] shadow-md">
          <div className="bg-[#EEFAFF] flex items-center justify-center h-full w-full">
            <img src={icon4} alt="icon4" />
          </div>
          <div className="p-6 flex flex-col items-center justify-between">
            <p className="font-bold ">Health Promotion</p>
            <p className="text-[#33333369]">
              Organized medical service offering
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Services;
