import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-white">
      <div className="w-[90vw] bg-black mx-auto py-6 px-2 rounded-t-lg flex flex-col md:flex-row items-center justify-between gap-6">
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
        <div className="flex gap-4 items-center mx-6">
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
            className="text-[var(--color-teal-blue)] hover:text-white transition text-2xl"
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
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
