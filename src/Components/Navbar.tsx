import ThemeSwitcher from "./ThemeSwitcher";
import { useContextGemini } from "../Context/GeminiContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setShowMenu, showMenu } = useContextGemini();
  return (
    <>
      <div>
        <div className=" bg-white fixed  w-full text-black dark:bg-black dark:text-white">
          <div className="flex justify-between items-center p-5">
            <a href="" className="font-bold md:pl-20 text-xl">
              Gemini Pro
            </a>

            <div className="hidden md:block">
              <div className="flex justify-center items-center gap-2 pr-16">
                <div className="mr-5">
                  <ThemeSwitcher />
                </div>
                <Link
                  to={"/"}
                  className="p-3 hover:bg-gray-700 w-full rounded-lg hover:text-white"
                >
                  Home
                </Link>
                <a
                  href="https://www.linkedin.com/in/piyush-jha-a29619239/"
                  target="_blank"
                  className="p-3  rounded-lg  hover:bg-gray-700 hover:text-white"
                >
                  About
                </a>
                <Link
                  to={"/chatNow"}
                  className="p-3  rounded-lg  hover:bg-gray-700 hover:text-white"
                >
                  Chat
                </Link>
              </div>
            </div>

            <div className="md:hidden cursor-pointer">
              <ThemeSwitcher />
            </div>
            <button
              className="pr-4 md:hidden"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {showMenu ? <RxCross1 /> : <GiHamburgerMenu />}
            </button>
          </div>
          <div
            className={`duration-300 md:hidden h-0 relative top-[-20rem] bg-black  ${
              showMenu ? "top-[0rem]" : ""
            } `}
          >
            <ul className="text-center bg-white dark:bg-black ">
              <li className="hover:bg-gray-700 p-3  w-full hover:text-white">
                <Link to={"/"} className="">
                  Home
                </Link>
              </li>
              <li className="p-3 hover:bg-gray-700 hover:text-white">
                <a href="https://www.linkedin.com/in/piyush-jha-a29619239/">
                  About
                </a>
              </li>
              <li className="hover:bg-gray-700 p-3  w-full hover:text-white">
                <Link to={"/chatNow"}>Chat Now</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
