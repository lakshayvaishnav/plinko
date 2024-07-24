import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className=" z-50 border-black bg-[#1A2C38]   shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img
            src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1713647295/standardboard.1d6f9426_asqzum.png"
            className="h-8"
            alt="plinkoo Logo"
          /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Plinkoo.100x
          </span>
        </Link>
        <Button
          data-collapse-toggle="navbar-default"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-[#2F4452] dark:focus:ring-gray-600 bg-transparent"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <RxHamburgerMenu size={30} />
        </Button>{" "}
        <div
          className={`w-full lg:hidden flex flex-col md:w-auto items-center ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-default"
        >
          <Button
            className="bg-transparent mx-4 hover:bg-purple-400 w-[50%]"
            onClick={() => navigate("/simulation")}
          >
            Simulation
          </Button>
          <Button
            className="bg-transparent mx-4 hover:bg-black w-[50%]"
            onClick={() => navigate("/game")}
          >
            Game
          </Button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <Button
            className="bg-transparent mx-4 hover:bg-[#2F4452]"
            onClick={() => navigate("/simulation")}
          >
            Simulation
          </Button>
          <Button
            className="bg-transparent mx-4 hover:bg-[#2F4452]"
            onClick={() => navigate("/game")}
          >
            Game
          </Button>
        </div>
      </div>
    </nav>
  );
};
