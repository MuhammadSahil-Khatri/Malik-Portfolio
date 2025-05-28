import React from "react";
import Navbar from "../Components/Navbar";
import machineryVideo from "../assets/machinery.mp4";
import image from "../assets/image.jpeg";
import ProjectsSection from "../Components/ProjectSection";
import Footer from "../Components/Footer";
import { Button } from "@/components/ui/button"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const containerRef = useRef(null);

  // Scroll progress (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // 👈 starts animation as soon as it enters viewport
  });

  // Map scroll progress to width from 90vw → 100vw
  const width = useTransform(scrollYProgress, [0, 1], ["80vw", "100%"]);

  return (
    <div className="flex flex-col bg-white text-[var(--color-light-gray)] ">
      <Navbar />
    <motion.div
      ref={containerRef}
      style={{ width }}
      className="h-[35rem] mx-auto rounded-sm mt-4 overflow-hidden relative"
    >
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={machineryVideo} type="video/mp4" />
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white h-full w-full opacity-70 bg-black">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="mx-auto">
            <h1 className="text-white inline-block align-middle font-bold text-5xl xs:text-6xl md:text-7xl md-lg:text-8xl mb-5 z-10">
              Hello, I Am{" "}
            </h1>
            <span className="h-16 w-16 ml-2 inline-block align-middle">
              <img
                src={image}
                alt="Abdul Malik Picture"
                className="w-full h-full rounded-full mr-2"
              />
            </span>
            <h1 className="text-white font-bold text-5xl xs:text-6xl md:text-7xl md-lg:text-8xl mb-5 z-10">
              Engr. Abdul Malik
            </h1>
          </div>
          <h2 className="text-white md:w-[50vw] w-[80vw]  text-center font-semibold text-3xl z-10">
            A Mechanical Engineer with a passion for technology and innovation.
          </h2>
        </div>
      </div>
    </motion.div>

      <div className="h-screen flex justify-around items-center w-full bg-gray-300">
        <div className="w-[30%] flex flex-col justify-center items-start gap-y-4">
          <h3 className="text-[var(--color-deeper-gray)] text-3xl font-bold cursor-pointer hover:text-[var(--color-teal-blue))">
            Who Am I
          </h3>
          <h1 className="text-[var(--color-deeper-gray)] text-2xl font-bold">
            I am Abdul Malik, a Mechanical Engineer{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            veritatis architecto, deleniti cupiditate reprehenderit quasi harum
            quia? Sequi exercitationem ipsa ullam blanditiis! Omnis molestiae,
            expedita eveniet voluptatem pariatur at in voluptate dicta cum
            cupiditate quae esse officia et autem aperiam deserunt nulla
            perspiciatis eaque blanditiis. Reprehenderit odio eum eius. Illum
            aliquid officia quos voluptas nisi nostrum provident quasi
            consequatur at.
          </p>
          <Button className={"rounded-full cursor-pointer"}>More About Me</Button>

        </div>
        <div className="w-[30%] h-[30rem] flex justify-center items-center bg-[var(--color-teal-blue)]">
          <img src="" alt="" />
        </div>
      </div>
      <section className="w-full bg-[var(--color-deeper-gray)] py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* University Image - LEFT */}
          <div className="md:w-1/2 h-[20rem] w-full rounded-xl overflow-hidden shadow-lg">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>

          {/* Education Info - RIGHT */}
          <div className="md:w-1/2 text-[var(--color-light-gray)] space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-teal-blue)] mb-4">
              Education
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
              with a focus on product design, system development, and CAD-based
              modeling. My academic journey shaped my understanding of
              engineering principles, real-world problem solving, and hands-on
              mechanical design.
            </p>
          </div>
        </div>
      </section>
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Home;
