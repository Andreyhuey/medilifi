import { RxAvatar } from "react-icons/rx";
import { logout } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const NavbarAuth = () => {
  const navigate = useNavigate();

  const logoff = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-[#CCE0FF] lg:px-12 md:px-8 px-4 py-3 lg:py-1 fixed top-0 z-30 w-full">
      {/* for tabs and pcs */}
      <div className="hidden md:flex items-center justify-between">
        <p className="h1 hover:cursor-pointer">MED</p>
        <div className="flex items-center gap-1">
          <RxAvatar
            onClick={logoff}
            className="transition-transform transform hover:scale-110 cursor-pointer"
          />
          <p>John Doe</p>
        </div>
      </div>
      {/* for phones */}
      <div className="md:hidden flex items-center justify-between">
        <p className="h1 hover:cursor-pointer">MED</p>
        <div className="flex items-center gap-1">
          <RxAvatar
            onClick={logoff}
            className="transition-transform transform hover:scale-110"
          />
          <p>John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarAuth;
