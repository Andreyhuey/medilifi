import { useState } from "react";
import { Link } from "react-router-dom";
import { InputPassword } from "../components";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form
        className="flex flex-col gap-6"
        //   onSubmit={(e) => loginHandler(e)}
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

        <Link className="text-sm font-medium text-black" to="/reset-password">
          Forget Password?
        </Link>
        <button className="bg-[#0D2C58] text-white py-4 font-semibold text-base md:text-xl rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
