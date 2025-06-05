import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";

import ClampVise1 from "../assets/MyProjects/ClampVice-1.jpeg";
import ClampVise2 from "../assets/MyProjects/ClampVice-2.jpeg";
import ClampVise3 from "../assets/MyProjects/ClampVice-3.jpeg";
import LEDCircuit1 from "../assets/MyProjects/LEDCircuit-1.jpeg";
import LEDCircuit2 from "../assets/MyProjects/LEDCircuit-2.jpeg";
import OEL1 from "../assets/MyProjects/OEL-1.jpeg";
import OEL2 from "../assets/MyProjects/OEL-2.jpeg";
import TableVise1 from "../assets/MyProjects/TableVise-1.jpeg";
import TableVise2 from "../assets/MyProjects/TableVise-2.jpeg";

const ProjectsSection = () => {
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
      title: "Small Bench Vice - AutoCAD Multi-View Drawing",
      description:
        "Hands-on project where we crafted detailed mechanical part views using AutoCAD. Boosted my manual sketching skills and deepened my understanding of engineering drawing.",
      images: [ClampVise1, ClampVise2, ClampVise3],
      category: "CAD Design",
      tech: ["AutoCAD", "Technical Drawing", "3D Modeling"]
    },
    {
      id: 2,
      title: "Hook Design Project (AutoCAD)",
      images: [OEL1, OEL2],
      description:
        "Designed and fabricated a mechanical hook using AutoCAD. Strengthened my design sense and brought concepts to life through lab-based teamwork.",
      category: "Mechanical Design",
      tech: ["AutoCAD", "Fabrication", "Team Leadership"]
    },
    {
      id: 3,
      title: "LED Blinking Circuit (Electronics)",
      images: [LEDCircuit1, LEDCircuit2],
      description:
        "Built a working LED blinking circuit from scratch. Managed procurement and team coordination, sharpening both technical and leadership skills.",
      category: "Electronics",
      tech: ["Circuit Design", "Electronics", "Project Management"]
    },
    {
      id: 4,
      title: "Heavy-Duty Table Vise Project",
      images: [TableVise1, TableVise2],
      description:
        "Led the creation of a robust table vise in a mechanical workshop. Learned fabrication techniques and project management on the go.",
      category: "Manufacturing",
      tech: ["Workshop Skills", "Fabrication", "Quality Control"]
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover my journey through engineering and design projects
          </p>
        </motion.div>

        {/* Equal height grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              className="w-full h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      
      {/* Card with flexbox for equal height */}
      <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-purple-500/25 h-full flex flex-col">
        
        {/* Header Image with Controls */}
        <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold bg-purple-600/90 text-white rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Image navigation controls */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={() => handleImageNavigation('prev')}
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="text-white text-xs bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                {currentImageIndex + 1}/{project.images.length}
              </span>
              
              <button
                onClick={() => handleImageNavigation('next')}
                className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Content - flex-grow to fill available space */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 2).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 2 && (
              <span className="px-2 py-1 text-xs bg-gray-700 text-gray-400 rounded-md">
                +{project.tech.length - 2} more
              </span>
            )}
          </div>

          {/* Spacer to push button to bottom */}
          <div className="flex-grow"></div>

          {/* Action button - positioned at bottom */}
          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDetails(!showDetails)}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              {showDetails ? 'Hide Details' : 'View Details'}
            </motion.button>
          </div>

          {/* Expandable details without images */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-4"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                
                <p className="text-gray-300 text-sm leading-relaxed border-l-4 border-purple-500 pl-4 italic">
                  {project.description}
                </p>

                {/* All tech stack */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 rounded-full border border-blue-700/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;