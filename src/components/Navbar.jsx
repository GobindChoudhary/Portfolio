import { useEffect, useRef, useState } from "react";
import Image from "./image";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, seetScroll] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        seetScroll(true);
      } else {
        seetScroll(false);
      }
    });
  });

  return (
    <>
      {/* Header background */}
      <div className=" fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            className="w-28 cursor-pointer mr-14"
            src={isDarkMode ? assets.logo_white : assets.logo}
            alt="logo"
          />
        </a>

        {/* Desktop Nav Links */}
        <motion.ul
          initial={{ z: 50, opacity: 0 }}
          whileInView={{ z: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.1,
          }}
          className={`hidden md:flex items-center  gap-6 lg:gap-8 rounded-full px-12 py-3 dark:text-white ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          {/* <li>
            <a href="#services">Services</a>
          </li> */}
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </motion.ul>

        {/* Actions */}
        <div className="flex items-center gap-4 ">
          {/* Theme Toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)} type="button">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle theme"
              className="w-6 cursor-pointer"
            />
          </button>
          {/* Contact Button (Desktop) */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50 dark:text-white"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow-icon"
              className="w-3"
            />
          </a>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Open menu"
              className="w-6"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        style={{ transform: "translateX(16rem)" }}
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="Close menu"
            className="w-5 cursor-pointer"
          />
        </div>
        <li>
          <a onClick={closeMenu} href="#top">
            Home
          </a>
        </li>
        <li>
          <a onClick={closeMenu} href="#about">
            About me
          </a>
        </li>
        <li>
          <a onClick={closeMenu} href="#">
            Services
          </a>
        </li>
        <li>
          <a onClick={closeMenu} href="#">
            My Work
          </a>
        </li>
        <li>
          <a onClick={closeMenu} href="#">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
