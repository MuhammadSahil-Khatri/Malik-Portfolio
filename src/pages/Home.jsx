import React, { useRef, useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import machineryVideo from "../assets/machinery.mp4";
import MyImage from "../assets/MyImage.jpg";
import MehranImage from "../assets/MehranImage.jpg";
import ProjectsSection from "../Components/ProjectSection";
import Footer from "../Components/Footer";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import { Button } from "@/components/ui/button";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["80vw", "100%"]);


  return (
    <div className="flex flex-col text-white">
      <ScrollToTopButton />
      <Navbar />
      <div>
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-10 pointer-events-none" />

          <motion.div
            ref={containerRef}
            style={{ width }}
            className="h-[35rem] mx-auto rounded-sm mt-4 overflow-hidden relative"
          >
            <video
              autoPlay
              loop
              muted
              className="z-50 w-full h-full object-cover"
            >
              <source src={machineryVideo} type="video/mp4" />
            </video>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white h-full w-full z-30">
              <div className="flex flex-col justify-center items-center h-full">
                <div className="mx-auto">
                  <h1 className="text-white inline-block align-middle font-bold text-5xl xs:text-6xl md:text-7xl md-lg:text-8xl mb-5">
                    Hello, I Am{" "}
                  </h1>
                  <span className="h-16 w-16 ml-2 inline-block align-middle">
                    <img
                      src={MyImage}
                      alt="Abdul Malik Picture"
                      className="w-full h-full rounded-full mr-2"
                    />
                  </span>
                  <h1 className="text-white font-bold text-5xl xs:text-6xl md:text-7xl md-lg:text-8xl mb-5">
                    Engr. Abdul Malik
                  </h1>
                </div>
                <h2 className="text-white md:w-[50vw] w-[80vw] text-center font-semibold text-3xl">
                  A Mechanical Engineer with a passion for technology and
                  innovation.
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Who Am I */}
        <div className="flex flex-col md:flex-row justify-around items-center w-full bg-white px-10 md:px-4 py-16 md:gap-8 gap-12">
          <AnimatedSection className="md:w-[45%] flex flex-col justify-center items-start gap-y-4">
            <h3 className="text-[#101014] text-3xl font-bold cursor-pointer">
              Who Am I
            </h3>
            <h1 className="text-[#101014] text-2xl font-bold">
              I am Abdul Malik, a Mechanical Engineer
            </h1>
            <p className="text-[#4A4A53] text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              veritatis architecto, deleniti cupiditate reprehenderit quasi
              harum quia? Sequi exercitationem ipsa ullam blanditiis! Omnis
              molestiae, expedita eveniet voluptatem pariatur at in voluptate
              dicta cum cupiditate quae esse officia et autem aperiam deserunt
              nulla perspiciatis eaque blanditiis. Reprehenderit odio eum eius.
              Illum aliquid officia quos voluptas nisi nostrum provident quasi
              consequatur at.
            </p>
            <motion.button
              whileHover={{
                scale: 1.04,  
                backgroundColor: "transparent",
                color: "black",
                border: "1px solid #101014",
                transition: { type: "spring", stiffness: 250, damping: 18 },
              }}
              whileTap={{ scale: 0.90 }}
              className="px-4 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold cursor-pointer"
            >
              More About Me
            </motion.button>
          </AnimatedSection>

          <AnimatedSection className="w-[350px] md:w-[40%] lg:w-[35%] flex justify-center items-center rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer transition duration-500  shadow-gray-800">
            <img src={MyImage} alt="" className="object-contain" />
          </AnimatedSection>
        </div>

        {/* Education */}
        <div className="w-full bg-white">
          <div className="w-[90%] bg-black rounded-md py-16 px-6 mx-auto flex flex-col md:flex-row items-center gap-12">
            <AnimatedSection className="md:w-1/2  space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My Education
              </h2>
              <h3 className="text-xl font-semibold">
                B.E. Mechanical Engineering
              </h3>
              <p className="text-base font-medium">
                Mehran University of Engineering and Techonology
              </p>
              <p className="text-sm text-gray-400">2023 – Present</p>
              <p className="text-base leading-relaxed mt-4">
                I am currently pursuing my Bachelor's in Mechanical Engineering
                with a focus on product design, system development, and
                CAD-based modeling. My academic journey shaped my understanding
                of engineering principles, real-world problem solving, and
                hands-on mechanical design.
              </p>
            </AnimatedSection>
            <AnimatedSection className="md:w-1/2 h-[20rem] w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg cursor-pointer transition duration-500  shadow-gray-300 ">
              <img
                src={MehranImage}
                alt=""
                className="w-full h-full object-cover "
              />
            </AnimatedSection>
          </div>
        </div>

        <ProjectsSection />
          <Footer />
      </div>
    </div>
  );
};

export default Home;
