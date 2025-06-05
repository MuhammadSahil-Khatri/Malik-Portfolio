import React, { useRef } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import { motion, useInView } from "framer-motion";
import MyImage from "../assets/MyImage.jpg";

const About = () => {
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
        {/* Hero Section */}
        <section className="w-[90vw] mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <AnimatedSection className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-full max-w-md mx-auto overflow-hidden rounded-2xl">
                  <img 
                    src={MyImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-lg shadow-xl">
                  <p className="font-bold text-lg">Mechanical Engineer</p>
                  <p className="text-sm">Passionate Designer</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Mechanical Engineer with expertise in product design, CAD modeling, and engineering analysis. With a strong foundation in mechanical principles and design methodologies, I create innovative solutions to complex engineering challenges.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in engineering began with a fascination for how things work, which evolved into a deep interest in designing and optimizing mechanical systems. Today, I combine technical knowledge with creative problem-solving to develop efficient and elegant mechanical solutions.
              </p>
              <div className="pt-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1px solid white",
                    transition: { type: "spring", stiffness: 250, damping: 18 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg"
                >
                  Download Resume
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="w-[90vw] mx-auto mb-16">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </AnimatedSection>
          
          <div className="space-y-8">
            {/* Timeline items */}
            <AnimatedSection>
  <div className="flex flex-col md:flex-row gap-4 mt-10">
    <div className="md:w-1/3">
      <div className="bg-gray-900 p-4 rounded-lg">
        <h3 className="font-bold text-xl text-indigo-400">ETP, Boiler, Chiller & RO-Plant Intern</h3>
        <p className="text-gray-400">Industrial Training</p>
        <p className="text-sm text-gray-500">Internship</p>
      </div>
    </div>
    <div className="md:w-2/3 bg-gray-900 p-6 rounded-lg">
      <p className="text-gray-300 mb-4">
        Learned operational fundamentals of key industrial systems responsible for utility, cooling, water treatment, and steam generation.
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        <li>
          <span className="font-semibold text-white">ETP (Effluent Treatment Plant):</span> Understood processes used to treat and purify industrial wastewater before environmental discharge.
        </li>
        <li>
          <span className="font-semibold text-white">Boiler:</span> Observed how steam is generated and utilized to drive turbines for power generation.
        </li>
        <li>
          <span className="font-semibold text-white">Chillers:</span> Learned the function of industrial chillers in large-scale AC systems and cooling industrial components.
        </li>
        <li>
          <span className="font-semibold text-white">RO Plant (Reverse Osmosis):</span> Studied how non-potable water is filtered and converted into clean, drinkable water.
        </li>
      </ul>
    </div>
  </div>
</AnimatedSection>

            
          
          </div>
        </section>
        
        {/* Education Section */}
        <section className="w-[90vw] mx-auto mb-16">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Education
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-500 transition duration-300">
                <h3 className="font-bold text-xl text-emerald-400 mb-2">B.E. Mechanical Engineering</h3>
                <p className="text-gray-400">Mehran University of Engineering and Technology</p>
                <p className="text-sm text-gray-500 mb-4">2023 - Present</p>
                <p className="text-gray-300">
                  Currently pursuing my Bachelor's in Mechanical Engineering with a focus on product design, system development, and CAD-based modeling.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-500 transition duration-300">
                <h3 className="font-bold text-xl text-teal-400 mb-2">Pre-Engineering</h3>
                <p className="text-gray-400">City College</p>
                <p className="text-sm text-gray-500 mb-4">2021 - 2023</p>
                <p className="text-gray-300">
                  Completed pre-engineering studies with distinction. Focused on physics, mathematics, and technical drawing. Participated in multiple engineering design competitions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Personal Interests */}
        <section className="w-[90vw] mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Beyond Engineering
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection>
              <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-opacity-70 transition duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-bold text-lg text-purple-400 mb-2">DIY Projects</h3>
                <p className="text-gray-300">
                  I enjoy building and tinkering with mechanical projects in my spare time, from custom furniture to small machines and gadgets.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-opacity-70 transition duration-300">
                <div className="text-4xl mb-4">🏎️</div>
                <h3 className="font-bold text-lg text-pink-400 mb-2">Automotive Design</h3>
                <p className="text-gray-300">
                  I'm fascinated by automotive engineering and design. I follow industry trends and enjoy sketching concept vehicles and mechanical systems.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="bg-gray-900 p-6 rounded-lg text-center hover:bg-opacity-70 transition duration-300">
                <div className="text-4xl mb-4">🏃‍♂️</div>
                <h3 className="font-bold text-lg text-indigo-400 mb-2">Fitness</h3>
                <p className="text-gray-300">
                  Regular exercise keeps my mind sharp and body healthy. I enjoy running, hiking, and playing cricket with friends on weekends.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
