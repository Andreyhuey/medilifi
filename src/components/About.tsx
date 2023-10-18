import { Link } from "react-scroll";
import aboutImg from "../assets/About-img.png";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="min-h-screen section">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-10">
        <img src={aboutImg} alt="about image" />
        <div className="flex flex-col gap-5 items-start lg:max-w-[450px]">
          <p className="text-[#A1A7B0]">ABOUT</p>
          <h1 className="lg:text-[56px] text-[46px] font-bold lg:leading-[64px] leading-[50px]">
            Addressing Health Problems
          </h1>
          <p>
            It includes nurses, doctors, and various specialists. It covers
            diagnosis, treatment, and prevention of disease.
          </p>
          <Link
            className="text-[#478CF7] border-[1px] border-[#478df75e] px-6 py-2 trans cursor-pointer font-semibold"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-10 py-24 w-full">
        <div className="flex-1">
          <h1 className="font-bold text-[40px]">Some Numbers</h1>
          <p className="text-[#A1A7B0] lg:max-w-[470px] pt-2">
            Medicine is the field of health and healing. It includes nurses,
            doctors, and various specialists.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-20 gap-y-5 w-full flex-1">
          <div>
            <div className="font-bold lg:text-[56px] text-[46px]">
              <CountUp end={42} duration={5} enableScrollSpy />%
            </div>
            <p>Health</p>
            <p className="text-[#A1A7B0]">Diagnosis and treatment</p>
          </div>
          <div>
            <div className="font-bold lg:text-[56px] text-[46px]">
              <CountUp end={73} duration={5} enableScrollSpy />+
            </div>
            <p>Prevention</p>
            <p className="text-[#A1A7B0]">Disease and in alleviating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
