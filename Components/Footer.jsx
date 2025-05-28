import React from "react";
import FacebookIcon from "../assets/Socialicons/Facebook-Icon.png";    
import LinkedinIcon from "../assets/Socialicons/Linkedin-Icon.png";    

const Footer = () => {
  return (
    <footer className="bg-[var(--color-deeper-gray)] text-[var(--color-light-gray)] py-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Engr. Abdul Malik</h2>
          <p className="text-sm mt-1">
            Mechanical Engineer | Tech Innovator | CAD Designer
          </p>
          <p className="text-xs text-gray-400 mt-2">
            © {new Date().getFullYear()} Abdul Malik. All rights reserved.
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-teal-blue)] hover:text-white transition text-2xl"
            title="Visit LinkedIn"
          >
            <img src={LinkedinIcon} alt="Linkedin Icon" className="w-6 h-6"/>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-teal-blue)] hover:text-white transition text-2xl"
            title="Visit LinkedIn"
          >
            <img src={FacebookIcon} alt="Facebook Icon" className="w-6 h-6"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
