import { useState } from "react";
import header from "../assets/header-img.png";

const Login = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <>
      <div className="min-h-screen bg-[#CCE0FF]">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full">
          <div className="hidden lg:flex lg:w-7/12">
            <img src={header} alt="header" />
          </div>
          <div className="bg-[#478CF7] w-full h-screen  lg:w-5/12 flex items-center justify-center">
            <div className="w-[30vh] bg-[#F4FCFF] text-center rounded-xl">
              <h1>Portal</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
