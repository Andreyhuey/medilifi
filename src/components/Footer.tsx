import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="min-h-50vh bg-[#478CF7] text-white lg:px-16 md:px-8 px-4 pb-10 pt-16">
      <div className="flex flex-col justify-center items-center gap-y-12 md:grid md:grid-cols-2 md:items-center md:justify-center lg:flex lg:flex-row lg:justify-between lg:items-start pt-5">
        <div className="text-[40px] font-bold md:text-center lg:text-left">
          MED
        </div>
        <div className="md:text-center lg:text-left">
          <p className="text-[#ffffff73] text-[16px]">MENU</p>
          <ul className="flex flex-col gap-3 pt-2">
            <li>About</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-[#ffffff73] text-[16px]">SERVICE</p>
          <ul className="flex flex-col gap-3 pt-2">
            <li>Health Promotion</li>
            <li>Disease Prevention</li>
            <li>Diagnosis & Treatment</li>
            <li>Rehabilitation</li>
          </ul>
        </div>
        <div className="flex gap-3 justify-center">
          <div className="p-3 rounded-full bg-[#FAD149] text-[#584400]">
            <FiFacebook />
          </div>
          <div className="p-3 rounded-full bg-[#FAD149] text-[#584400]">
            <FiTwitter />
          </div>
          <div className="p-3 rounded-full bg-[#FAD149] text-[#584400]">
            <FiInstagram />
          </div>
        </div>
      </div>
      <div className="lg:mt-14 mt-10 pt-14 border-[#ffffff7c] border-t-[1px] flex flex-col gap-y-5 md:flex-row justify-between">
        <p className="text-[#ffffff81] text-center lg:text-left">
          Copyright © 2023 Andreyhuey. All Rights Reserved.
        </p>
        <div className="flex justify-between lg:justify-end items-center md:gap-x-10">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
