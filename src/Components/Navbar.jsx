import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 680);
      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setResumeDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  const openResume = () => window.open("/resume.pdf", "_blank");
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <motion.div
      className="w-full fixed top-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 60, damping: 10 }}
    >
      <header className="max-w-[90vw] mx-auto h-20 px-6 py-2 mt-4 bg-gray-900 rounded-full flex items-center justify-between shadow-md backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Malik Tech logo" className="h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`relative text-white text-md font-medium hover:text-indigo-400 transition ${
                location.pathname === path ? "text-indigo-400" : ""
              }`}
            >
              {label}
              {location.pathname === path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400"
                />
              )}
            </Link>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
              className="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-full transition shadow-md"
            >
              See Resume ▾
            </button>

            <AnimatePresence>
              {resumeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-14 right-0 bg-gray-800 text-white rounded-lg shadow-xl w-44 z-50 border border-indigo-500"
                >
                  <button
                    onClick={openResume}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    View Resume
                  </button>
                  <button
                    onClick={downloadResume}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Download Resume
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center z-40 space-y-8"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="text-white text-2xl font-medium hover:text-indigo-400"
              >
                {label}
              </Link>
            ))}

            <div className="flex flex-col items-center space-y-2">
              <button
                onClick={openResume}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-2 px-5 rounded-full shadow"
              >
                View Resume
              </button>
              <button
                onClick={downloadResume}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-2 px-5 rounded-full shadow"
              >
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;  