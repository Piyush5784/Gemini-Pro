import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="text-3xl text-gray-500 flex gap-4 dark:bg-black dark:text-white bg-white justify-center items-center p-10 pt-0">
        <a href="https://twitter.com/Piyush5784" target="_blank">
          <FaTwitter></FaTwitter>
        </a>
        <a
          href="https://www.linkedin.com/in/piyush-jha-a29619239/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://discord.com/" target="_blank">
          <FaDiscord />
        </a>
        <a href="mailto:piyushjha5668@gmail.com">
          <IoMail />
        </a>
      </div>
    </>
  );
};

export default Footer;
