import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const SkillsSection = () => {
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

  const skillCategories = [
    {
      id: "mechanical-design",
      title: "Mechanical Design",
      skills: [
        { name: "SolidWorks", level: 90 },
        { name: "AutoCAD", level: 85 },
        { name: "Technical Drawing", level: 85 },
      ],
      color: "from-indigo-600 to-purple-600",
      iconColor: "text-indigo-400",
    },
    {
      id: "engineering-analysis",
      title: "Engineering Analysis",
      skills: [
        { name: "Finite Element Analysis", level: 85 },
        { name: "Thermal Analysis", level: 80 },
        { name: "Fluid Dynamics", level: 75 },
        { name: "Material Selection", level: 90 },
      ],
      color: "from-blue-600 to-cyan-500",
      iconColor: "text-blue-400",
    },
    {
      id: "programming-tech",
      title: "Programming & Technical Skills",
      skills: [
        { name: "HTML (Basic)", level: 60 },
        { name: "CSS (Basic)", level: 55 },
        { name: "Python (Basic)", level: 65 },
        { name: "PowerPoint Animation", level: 70 },
        { name: "AI Tools (Image & Video Generation)", level: 75 }
      ],
      color: "from-indigo-600 to-blue-500",
      iconColor: "text-indigo-400",
    }
    
  ];

  return (
    <section className="w-full bg-black py-20">
      <div className="w-[90vw] mx-auto">
       

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <AnimatedSection key={category.id} className="w-full">
              <div className="bg-gray-900 rounded-xl p-6 shadow-lg backdrop-blur-sm bg-opacity-80 border border-gray-800 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-bold text-white mb-6">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          className={`h-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;