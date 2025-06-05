import React, { useRef } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import { motion, useInView } from "framer-motion";
import ProjectSection from "@/Components/ProjectSection";
import SkillsSection from "@/Components/SkillsSection";
import AwardsMarquee from "@/Components/AwardsMarquee";

const Projects = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const AnimatedSection = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={ref}
        variants={fadeUpVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <ScrollToTopButton />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="w-[90vw] mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-16">
              Explore my portfolio of projects showcasing my skills in mechanical design, engineering analysis, and manufacturing.
            </p>
          </AnimatedSection>
          
          {/* Project Categories */}
          <div className="mb-16">
            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-300"
                >
                  All Projects
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition duration-300"
                >
                  Mechanical Design
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition duration-300"
                >
                  CAD Modeling
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-700 transition duration-300"
                >
                  Prototyping
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Project Grid */}
          <ProjectSection />
          
          {/* Skills Section */}
          <AnimatedSection className="mt-20 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              My Skills
            </h2>
            <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
              Technical expertise that powers my engineering projects
            </p>
          </AnimatedSection>
          <SkillsSection />
          
          {/* Awards & Certifications */}
          <AnimatedSection className="mt-20">
            <AwardsMarquee />
          </AnimatedSection>
          
          {/* Call to Action */}
          <AnimatedSection className="mt-20">
            <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 md:p-12 text-center shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Have a project in mind?
              </h2>
              <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new engineering projects, design challenges, or opportunities to collaborate on innovative mechanical solutions.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-white text-indigo-900 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
              >
                Let's Talk
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;