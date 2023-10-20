import header from "../assets/header-img.png";

const Header = () => {
  return (
    <div className="bg-[#CCE0FF] section min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:order-1 order-2 flex flex-col gap-5 items-start">
          <p className="text-[#A1A7B0]">MEDICAL</p>
          <h1 className="lg:text-[70px] text-[56px] font-bold lg:leading-[80px] leading-[60px]">
            Find Your Doctor
          </h1>
          <p className="text-[#A1A7B0] lg:max-w-[370px]">
            Medicine is the field of health and healing. It includes nurses,
            doctors.
          </p>
          <button className="px-8 py-3 font-bold text-white bg-[#478CF7] rounded-sm trans">
            Appointment
          </button>
        </div>
        <img src={header} alt={header} className="order-1 lg:order-2" />
      </div>
    </div>
  );
};

export default Header;
