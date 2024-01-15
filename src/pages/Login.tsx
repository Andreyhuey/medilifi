import { useState } from "react";
import header from "../assets/header-img.png";
import { LoginForm, SignupForm } from "../components";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="min-h-screen bg-[#CCE0FF]">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full">
          <div className="hidden lg:flex lg:w-7/12">
            <img src={header} alt="header" />
          </div>
          <div className="bg-[#478CF7] w-full h-screen  lg:w-5/12 flex items-center justify-center">
            <div className="lg:w-[60vh] md:w-[50vh] bg-[#F4FCFF] rounded-xl flex flex-col gap-5 py-6 px-8 w-full">
              <h1 className="text-3xl text-center font-bold">
                {" "}
                MediLifi Portal
              </h1>

              <div className="flex gap-4 font-bold text-lg">
                <button
                  onClick={handleIsLogin}
                  className={isLogin ? "text-[#478CF7]" : "text-black"}
                >
                  Login
                </button>

                <button
                  onClick={handleIsLogin}
                  className={!isLogin ? "text-[#478CF7]" : "text-black"}
                >
                  Sign up
                </button>
              </div>

              {isLogin && <LoginForm />}
              {!isLogin && <SignupForm />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
