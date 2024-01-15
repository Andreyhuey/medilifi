import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { InputPassword, Loader } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../services/firebase";
import { toast } from "react-hot-toast";

const SignupForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [user, loading] = useAuthState(auth);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const navigate = useNavigate();

  const createUser = async (e: any) => {
    e.preventDefault();
    try {
      if (isChecked === true) {
        await registerWithEmailAndPassword(
          fname,
          lname,
          phone,
          email,
          password
        );
        toast.success("Welcome to MediLifi");
      }
    } catch (err: any) {
      toast.error(err);
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Loader text="Loading..." />;
  }

  return (
    <div>
      <form className="flex flex-col gap-6 h-fit" onSubmit={createUser}>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          placeholder="First Name"
          className="text-black placeholder:text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          placeholder="Last Name"
          className="text-black placeholder:text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          className="text-black placeholder:text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-2"
          required
        />
        <input
          type="email"
          required
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black placeholder:text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-2"
        />
        <InputPassword
          setPassword={setPassword}
          password={password}
          placeholder={"Password"}
        />

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
          className="bg-[#478CF7] text-white py-2 font-semibold text-base md:text-xl rounded-lg"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
