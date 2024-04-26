import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="text-3xl text-gray-500 flex gap-4 dark:bg-black dark:text-white bg-white justify-center items-center p-10 pt-0">
        <a href="">
          <FaTwitter></FaTwitter>
        </a>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaDiscord />
        </a>
        <a href="">
          <IoMail />
        </a>
      </div>
    </>
  );
};

export default Footer;
