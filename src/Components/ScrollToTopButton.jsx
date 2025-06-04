import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-10 right-10 z-50 bg-gray-800 hover:bg-white p-3 rounded-full shadow-lg cursor-pointer text-white hover:text-black hover:border-black hover:border"
      aria-label="Scroll to top"
    >
      {/* Up arrow icon (Material Design) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </motion.button>
  );
};

export default ScrollToTopButton;
