import { useState } from "react";
import { InputPassword } from "../components";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-6"
        // onSubmit={(e) => registerHandler(e)}
      >
        <input
          type="email"
          required
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
        />
        <InputPassword
          setPassword={setPassword}
          password={password}
          placeholder={"Password"}
        />
        {/* <InputPassword
          setConfirmPassword={setConfirmPassword}
          // confirmPassword={confirmPassword}
          placeholder={"Confirm Password"}
        /> */}

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="checkbox"
            required
            name="agreement"
            checked={isChecked}
            onChange={() => handleCheckboxChange()}
          />
          <p className="text-black">
            I agree to terms and conditions
            <span className="">
              {" "}
              <Link
                to="#"
                target="_blank"
                className="text-base font-bold text-[#478CF7]"
              >
                User Agreement{" "}
              </Link>
            </span>
            and
            <span>
              {" "}
              <Link
                to="#"
                target="_blank"
                className="text-base font-bold text-[#478CF7]"
              >
                Privacy Policy
              </Link>
            </span>
          </p>
        </div>

        <button
          className="bg-[#478CF7] text-white py-4 font-semibold text-base md:text-xl rounded-lg"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
