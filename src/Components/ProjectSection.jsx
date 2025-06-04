import React from "react";
import { useNavigate } from "react-router-dom";
import ClampVise1 from "../assets/MyProjects/ClampVice-1.jpeg";
import ClampVise2 from "../assets/MyProjects/ClampVice-2.jpeg";
import ClampVise3 from "../assets/MyProjects/ClampVice-3.jpeg";
import LEDCircuit1 from "../assets/MyProjects/LEDCircuit-1.jpeg";
import LEDCircuit2 from "../assets/MyProjects/LEDCircuit-2.jpeg";
import OEL1 from "../assets/MyProjects/OEL-1.jpeg";
import OEL2 from "../assets/MyProjects/OEL-2.jpeg";
import TableVise1 from "../assets/MyProjects/TableVise-1.jpeg";
import TableVise2 from "../assets/MyProjects/TableVise-2.jpeg";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const navigate = useNavigate();
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

  const projects = [
    {
      id: 1,
      title: "Hydraulic Press Design",
      images: [ClampVise1, ClampVise2, ClampVise3],
    },
    {
      id: 2,
      title: "Robotic Arm Mechanism",
      images: [OEL1, OEL2],
    },
    {
      id: 3,
      title: "Thermal Analysis Model",
      images: [LEDCircuit1, LEDCircuit2],
    },
    {
      id: 4,
      title: "CNC Machine Redesign",
      images: [TableVise1, TableVise2],
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="w-[90vw] p-4 rounded-lg bg-black mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AnimatedSection key={project.id} className="w-full">
              <ProjectCard
                key={project.id}
                project={project}
                navigate={navigate}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, navigate }) => {
  return (
    <Card className="rounded-xl shadow-md overflow-hidden transition hover:shadow-xl pt-0 pb-4">
      <CardHeader className="p-0">
        <Carousel>
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-48 md:h-56 lg:h-48">
                  <img
                    src={image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CustomCarouselButtons />
        </Carousel>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-lg font-semibold text-gray-800">
          {project.title}
        </CardTitle>
      </CardContent>

      <CardFooter>
        {/* <Button
          className="w-full bg-gray-900 hover:bg-gray-700 text-white transition"
          onClick={() => navigate(`/projects/${project.id}`)}
        >
          View Details
        </Button> */}
        <motion.button
          whileHover={{
            backgroundColor: "transparent",
            color: "black",
            border: "1px solid #101014",
            transition: { type: "spring", stiffness: 140, damping: 10 },
          }}
          className="w-full py-1 rounded border border-gray-900 bg-gray-900 text-white text-sm font-semibold cursor-pointer"
          onClick={() => navigate(`/projects/${project.id}`)}
        >
          More About Me
        </motion.button>
      </CardFooter>
    </Card>
  );
};

const CustomCarouselButtons = () => {
  const { scrollPrev, scrollNext } = useCarousel();

  return (
    <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 transform -translate-y-1/2 z-10">
      <Button
        size="icon"
        className="bg-white hover:bg-black p-3 rounded-full shadow-lg cursor-pointer text-black hover:text-white hover:border-white hover:border"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        className="bg-white hover:bg-black p-3 rounded-full shadow-lg cursor-pointer text-black hover:text-white hover:border-white hover:border"
        onClick={scrollNext}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ProjectsSection;
