import { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "false" ? false : true;
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    // console.log(darkMode);
    // //@ts-ignore
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded-md bg-gray-800"
      >
        {darkMode ? (
          <CiLight className="text-yellow-200 dark:text-white  duration-300" />
        ) : (
          <FaMoon className="text-yellow-200 duration-300" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitcher;
