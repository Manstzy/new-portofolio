import { useState } from "react";
import Icon from "../assets/Icon.svg";
import IconMenu from "../assets/icon-menu.png";
import { Link } from "react-scroll";

const Navbar = ({ nav, handleNav }) => {
  const [bgNav, setBgNav] = useState("false");

  window.addEventListener("scroll", function () {
    scrollY >= 20 ? setBgNav(true) : setBgNav(false);
  });

  return (
    <div
      className={
        bgNav
          ? "fixed px-4 z-20 py-3 w-full bg-[#323232] transition-all duration-300 top-0 flex justify-between"
          : "fixed px-4 z-20 py-3 w-full bg-[#202020] transition-all duration-300 top-0 flex justify-between"
      }
    >
      <div className="flex items-center">
        <img src={Icon} className="w-8 h-8" alt="" />
        <p className="font-manrope text-white text-xl ml-1">Hello.</p>
      </div>
      <div>
        <img
          onClick={handleNav}
          src={IconMenu}
          className="w-8 h-8 text-white filter invert cursor-pointer laptop:hidden"
          alt=""
        />
      </div>

      {/* Navbar */}
      <div
        className={
          nav
            ? "fixed top-0 text-white right-0 w-[300px] bottom-0  bg-[rgb(50,50,50)] flex flex-col items-center transition-all duration-300"
            : "fixed top-0 text-white -right-[1000px] w-[300px] bottom-0  bg-[rgb(50,50,50)] flex flex-col items-center transition-all duration-300 "
        }
      >
        <Link
          onClick={handleNav}
          offset={10}
          smooth={true}
          to={"home"}
          className="text-xl font-manrope p-10"
        >
          Home
        </Link>
        <Link
          onClick={handleNav}
          smooth={true}
          to={"home"}
          className="text-xl font-manrope p-10"
        >
          Skills
        </Link>
        <Link
          onClick={handleNav}
          smooth={true}
          to={"home"}
          className="text-xl font-manrope p-10"
        >
          Portofolio
        </Link>
        <button onClick={handleNav} className="text-xl font-manrope p-10">
          Close
        </button>
      </div>
    </div>
  );
};

export default Navbar;
