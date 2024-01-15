import React, { useState, ChangeEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputPasswordProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

function InputPassword({
  password,
  setPassword,
  placeholder,
}: InputPasswordProps): JSX.Element {
  const [inputType, setInputType] = useState<"password" | "text">("password");

  function handleShowPassword() {
    setInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password"
    );
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // if (setPassword) {
    //   setPassword(e.target.value);
    // } else if (setConfirmPassword) {
    //   setConfirmPassword(e.target.value);
    // }

    // recommended chatGPT settings
    setPassword(e.target.value);

    // If setConfirmPassword is provided, update it as well
  };

  return (
    <div className="relative flex items-center">
      <input
        type={inputType}
        required
        name="password"
        placeholder={placeholder}
        value={password}
        onChange={handleChange}
        className="w-full text-black placeholder:text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-2"
      />
      <button
        className="absolute text-sm font-medium text-black right-4"
        type="button"
        onClick={handleShowPassword}
      >
        {inputType === "password" ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
}

export default InputPassword;
