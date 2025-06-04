import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = ["Home", "About", "Contact", "Resume"];

  // 🔽 Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 680) {
        setShowNavbar(false); // Scroll down → hide
      } else {
        setShowNavbar(true); // Scroll up → show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      className="w-full sticky top-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 60, damping: 10 }}
    >
      <header className="max-w-[90vw] mx-auto h-20 px-4 py-2 mt-4 bg-[var(--color-deeper-gray)] flex items-center rounded-full overflow-hidden opacity-90">
        {/* Logo Section */}
        <div className="w-[30vw] flex justify-start items-center">
          <img
            src={logo}
            alt="Malik Tech logo"
            className="h-12 cursor-pointer"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-between items-center w-full h-full">
          <ul className="flex flex-1 justify-evenly items-center list-none relative">
            {navLinks.map((link) => (
              <li
                key={link}
                onClick={() => setActiveLink(link)}
                className="relative text-white cursor-pointer text-lg font-semibold group px-2"
              >
                {link}
                <span className="absolute bottom-0 left-2 w-[80%] h-0.5 origin-right scale-x-0 transition-transform duration-300 ease-in-out group-hover:origin-left group-hover:scale-x-100 bg-white" />
                {activeLink === link && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                  />
                )}
              </li>
            ))}
          </ul>

          <motion.div
            whileHover={{
              scale: 1.04,
              transition: { type: "spring", stiffness: 250, damping: 18 },
            }}
            whileTap={{ scale: 0.97 }}
            className="group w-[23vw] lg:w-[18vw] h-full pl-4 rounded-full bg-gray-900 flex justify-between items-center cursor-pointer overflow-hidden"
          >
            <span className="text-white font-bold text-lg z-10">
              My Projects
            </span>

            <motion.span
              className="w-12 h-12 m-2 flex justify-center items-center bg-[var(--color-deeper-gray)] rounded-full z-10"
              whileHover={{
                rotate: -15,
                x: 4,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* SVG Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="var(--color-light-gray)"
              >
                <path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z" />
              </svg>
            </motion.span>
          </motion.div>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white ml-auto focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center z-50 px-10"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-white"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="space-y-6">
              {navLinks.map((link) => (
                <motion.li
                  key={link}
                  onClick={() => {
                    setActiveLink(link);
                    setMenuOpen(false);
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={`text-white text-2xl font-semibold cursor-pointer ${
                    activeLink === link ? "underline" : ""
                  }`}
                >
                  {link}
                </motion.li>
              ))}
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="text-white font-semibold text-2xl cursor-pointer"
              >
                My Projects
              </motion.li>
            </ul>

            <div className="flex gap-4 mt-16">
              {/* Social icons */}
              {/* (Keep your social icons here as you already had) */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
