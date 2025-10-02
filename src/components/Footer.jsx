import { assets } from "../assets/assets";
import Image from "./image";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20 dark:text-white">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_white : assets.logo}
          className="w-36 mx-auto mb-2"
          alt=""
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          chaudharygobind24@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] my-12 py-6">
        <p> Gobind Choudhary </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li className="flex gap-2 items-center">
            <Image
              src={isDarkMode ? assets.github_dark : assets.github_light}
              alt=""
              className="w-4 h-4"
            />{" "}
            <a target="_blank" href="https://github.com/GobindChoudhary">
              GitHub
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <Image
              src={isDarkMode ? assets.linkedin_dark : assets.linkedin_light}
              alt=""
              className="w-4 h-4"
            />{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gobind-chaudhary/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
