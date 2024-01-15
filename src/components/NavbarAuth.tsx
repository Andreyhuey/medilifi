import { RxAvatar } from "react-icons/rx";
import { TbLogout } from "react-icons/tb";
import { logout } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { Loader } from ".";
import { useAuth } from "../services/AuthContex";

const NavbarAuth = () => {
  const navigate = useNavigate();
  const { userProp, fetching } = useAuth();

  const logoff = () => {
    logout();
    navigate("/login");
  };

  if (fetching) return <Loader text="Loading Patient Vitals..." />;

  return (
    <div className="bg-[#CCE0FF] lg:px-12 md:px-8 px-4 py-3 lg:py-1 fixed top-0 z-30 w-full">
      {/* for tabs and pcs */}
      <div className="hidden md:flex items-center justify-between">
        <p className="h1 hover:cursor-pointer">MED</p>
        <div className="flex items-center gap-1">
          <RxAvatar />
          <p>{userProp?.name}</p>

          <TbLogout
            onClick={logoff}
            className="transition-transform transform hover:scale-125 cursor-pointer"
          />
        </div>
      </div>
      {/* for phones */}
      <div className="md:hidden flex items-center justify-between">
        <p className="h1 hover:cursor-pointer">MED</p>
        <div className="flex items-center gap-1">
          <RxAvatar />
          <p>{userProp?.name}</p>
          <TbLogout
            onClick={logoff}
            className="transition-transform transform hover:scale-125 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarAuth;
