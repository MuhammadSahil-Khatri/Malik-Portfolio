import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50 opacity-80">
      <header className="max-w-[90vw] mx-auto h-20 px-4 py-2 mt-4 bg-[var(--color-deeper-gray)] flex items-center rounded-full overflow-hidden">
        {/* Logo Section */}
        <div className="w-[30vw] flex justify-start items-center">
          <img src={logo} alt="Malik Tech logo" className="h-12 cursor-pointer" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-between items-center w-full h-full">
          <ul className="flex flex-1 justify-evenly items-center list-none">
            <li className="text-[var(--color-light-gray)] cursor-pointer text-lg font-semibold">Home</li>
            <li className="text-[var(--color-light-gray)] cursor-pointer text-lg font-semibold">About</li>
            <li className="text-[var(--color-light-gray)] cursor-pointer text-lg font-semibold">Contact</li>
            <li className="text-[var(--color-light-gray)] cursor-pointer text-lg font-semibold">Resume</li>
          </ul>
          <div className="w-[23vw] lg:w-[18vw] h-full pl-4 rounded-full bg-[var(--color-teal-blue)] flex justify-between items-center cursor-pointer">
            <span className="text-[var(--color-deeper-gray)] font-bold text-lg">My Projects</span>
            <span className="w-12 h-12 m-2 flex justify-center items-center bg-[var(--color-deeper-gray)] rounded-full"><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="var(--color-light-gray)"><path d="m243-240-51-51 405-405H240v-72h480v480h-72v-357L243-240Z"/></svg></span>
          </div>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[var(--color-light-gray)] ml-auto focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-teal-blue)] px-4 pb-4 rounded-b-xl">
          <ul className="flex flex-col space-y-2 text-center">
            <li className="text-[var(--color-light-gray)] hover:text-[var(--color-deeper-gray)] font-medium">Home</li>
            <li className="text-[var(--color-light-gray)] hover:text-[var(--color-deeper-gray)] font-medium">About</li>
            <li className="text-[var(--color-light-gray)] hover:text-[var(--color-deeper-gray)] font-medium">Contact</li>
            <li className="text-[var(--color-light-gray)] hover:text-[var(--color-deeper-gray)] font-medium">Resume</li>
            <li className="text-[var(--color-deeper-gray)] hover:underline font-semibold">My Projects</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
