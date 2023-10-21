import { Link } from "react-scroll";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import img from "../assets/service-pic.png";

const Features = () => {
  return (
    <div className="min-h-screen bg-[#CCE0FF] section">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-[#A1A7B0]">FEATURES </p>
        <h1 className="lg:text-[56px] text-[46px] font-bold lg:leading-[64px] leading-[50px]">
          Our Features
        </h1>
        <p className="lg:max-w-[450px] text-center">
          Basic medicine concentrate on studying the laws of human life and
          disease phenomena.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center py-16 gap-10">
        <div className="flex flex-col lg:w-[330px] shadow-md rounded-sm">
          <div className="bg-[#F4FCFF] flex flex-col items-center py-10">
            <img src={icon1} alt="icon" />
          </div>
          <div className="text-[#333333] bg-white p-6">
            <p className="font-bold pb-2">Better Care</p>
            <p>
              Concentrate on studying the laws of human life and disease
              phenomena, and thus provide.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col lg:w-[330px] shadow-md rounded-sm">
          <div className="bg-[#F4FCFF] flex flex-col items-center py-10">
            <img src={icon2} alt="icon" />
          </div>
          <div className="text-[#333333] bg-white p-6">
            <p className="font-bold pb-2">Communication</p>
            <p>
              Human life and disease phenomena, and thus provide necessary
              theoretical support.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col lg:w-[330px] shadow-md rounded-sm">
          <div className="bg-[#F4FCFF] flex flex-col items-center py-10">
            <img src={icon3} alt="icon" />
          </div>
          <div className="text-[#333333] bg-white p-6">
            <p className="font-bold pb-2">Improved quality</p>
            <p>
              Provide necessary theoretical support for clinical practice as
              part of the efforts to cure.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center py-16 gap-y-6">
        <div className="flex flex-col gap-5 items-start lg:max-w-[400px]">
          <p className="text-[#A1A7B0]">SERVICE</p>
          <h1 className="lg:text-[56px] text-[46px] font-bold lg:leading-[64px] leading-[50px]">
            Practice of the Diagnosis
          </h1>
          <p>
            Organized medical service offering diagnostic, therapeutic, or
            preventive outpatient services often, the term covers an entire
            medical.
          </p>
          <Link
            className="text-[#478CF7] border-[1px] border-[#478df75e] px-6 py-2 trans cursor-pointer font-semibold"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Learn More
          </Link>
        </div>
        <img src={img} alt="image of doctor" />
      </div>
    </div>
  );
};

export default Features;
