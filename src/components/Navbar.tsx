import { useState, useEffect } from "react";
import { Link, Button } from "react-scroll";

// icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  // Add this effect to handle body overflow
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Make sure to reset when unmounting
    };
  }, [nav]);

  return (
    <div className="bg-[#CCE0FF] lg:px-12 md:px-8 px-4 py-3">
      {/* for pcs and tabs */}
      <div className="hidden md:flex items-center justify-between">
        <ul className="flex items-center md:gap-12 lg:gap-16">
          <Link
            className="h1 hover:cursor-pointer"
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            MED
          </Link>
          <Link
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:cursor-pointer"
          >
            <li className="">About</li>
          </Link>
          <Link
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:cursor-pointer"
          >
            <li className="">Features</li>
          </Link>
          <Link
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:cursor-pointer"
          >
            Services
          </Link>
          <Link
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="hover:cursor-pointer"
          >
            Blog
          </Link>
        </ul>
        <Button
          className="text-[#478CF7] border-[1px] border-[#478df75e] px-6 py-2 hover:scale-110 trans"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Button>
      </div>

      {/* for phones */}
      <div className="lg:hidden flex items-center justify-between">
        <Link
          className={`h1 hover:cursor-pointer ${nav && "text-transparent"} `}
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          MED
        </Link>
        <div onClick={handleNav}>
          {nav ? (
            <AiOutlineClose className="text-[35px]" />
          ) : (
            <AiOutlineMenu className="text-[35px]" />
          )}
        </div>
      </div>

      {nav && (
        <div className="h-screen bg-[#CCE0FF]">
          <div className="flex flex-col gap-16 items-center h-screen pt-10">
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:cursor-pointer"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:cursor-pointer"
            >
              Features
            </Link>
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:cursor-pointer"
            >
              Services
            </Link>
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:cursor-pointer"
            >
              Blog
            </Link>

            <Link
              className="text-[#478CF7] border-[1px] border-[#478df75e] px-6 py-2 trans"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
