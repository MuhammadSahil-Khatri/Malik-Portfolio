import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="w-[90vw] bg-black mx-auto py-8 px-4 md:px-8 rounded-t-lg flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-800 shadow-lg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600"></div>
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-600 opacity-10 rounded-full blur-3xl"></div>
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Engr. Abdul Malik</h2>
          <p className="text-sm mt-1">
            Mechanical Engineer | Tech Innovator | CAD Designer
          </p>
          <p className="text-xs text-gray-400 mt-2">
            © {new Date().getFullYear()} Abdul Malik. All rights reserved.
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-5 items-center mx-6">
          <a
            href="https://www.linkedin.com/in/abdul-malik-khatri-b5b267237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white transition text-2xl"
            title="Visit LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              fill="white"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/abdulmalik.khatri.3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 transition duration-300 text-2xl"
            title="Visit Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              fill="white"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
            </svg>
          </a>
          <a
            href="https://github.com/MuhammadSahil-Khatri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 transition duration-300 text-2xl"
            title="Visit GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              fill="white"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
            </svg>
          </a>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
