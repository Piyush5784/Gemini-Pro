import { Link } from "react-router-dom";
import ButtonTypeOne from "./ButtonTypeOne";

const HeroSection = () => {
  return (
    <>
      <span className="flex top-[20rem] left-20 md:left-[18.75rem] lg:left-[37.5rem] absolute justify-center items-center">
        <span className="h-[9.375rem] border border-white w-[18.75rem] bg-gray-500  rounded-[50%]   blur-[7.1875rem]"></span>
      </span>

      <div className="h-screen dark:bg-black dark:text-black ">
        <div className="text-center ">
          <p className="text-4xl pt-[12.5rem] md:text-[2.5rem] lg:text-[3.125rem] font-bold">
            <span className="dark:text-[#fffacc] text-black">
              Welcome to <br />
            </span>{" "}
            <div className="md:pt-3">
              <span className="text-bg">the Gemini Era</span>
            </div>
          </p>
          <p className=" font-extralight md:text-[1.375rem] text-gray-400 p-10 pt-2">
            An Advance AI model that not only generates text but also explain
            images, generate texts from images, explain the differents between
            images
          </p>

          <div className="flex justify-center items-center">
            <Link to={"/chatNow"}>
              <ButtonTypeOne />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-[0.0625rem]" />
    </>
  );
};

export default HeroSection;
