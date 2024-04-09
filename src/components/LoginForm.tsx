import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputPassword, Loader } from "../components";
import { useAuthState } from "react-firebase-hooks/auth";
import { logInWithEmailAndPassword, auth } from "../services/firebase";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      await logInWithEmailAndPassword(email, password);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      setError("");
      navigate("/dashboard");
    }
  }, [user, navigate]);

  if (user && loading) {
    return <Loader text="Loading..." />;
  }

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={handleLogin}>
        <input
          type="email"
          required
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          className=" text-black placeholder:text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-2"
        />
        <InputPassword
          setPassword={setPassword}
          password={password}
          placeholder={"Password"}
        />

        <Link className="text-sm font-medium text-black" to="/reset-password">
          Forget Password?
        </Link>
        {error && (
          <p className="text-red-500 text-center font-[700]">{error}</p>
        )}
        <button
          className="bg-[#478CF7] text-white py-2 font-semibold text-base md:text-xl rounded-lg"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
