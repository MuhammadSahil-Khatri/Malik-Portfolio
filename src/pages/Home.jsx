import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Navbar from '../Components/Navbar';
import ProjectsSection from '../Components/ProjectSection';
import SkillsSection from '../Components/SkillsSection';
import AwardsMarquee from '../Components/AwardsMarquee';
import Footer from '../Components/Footer';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import machineryVideo from '../assets/machinery.mp4';
import MyImage from '../assets/MyImage.jpg';

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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className='bg-black text-white w-screen'>
      <ScrollToTopButton />
      <Navbar />

      {/* Hero Section with Parallax Effect */}
      <div ref={targetRef} className='relative h-screen w-screen overflow-hidden'>

        {/* Background Video */}
        <motion.video
  key={machineryVideo} // helps force re-render if needed
  className="absolute inset-0 h-full w-full object-cover filter brightness-200 z-0"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  poster="/fallback.jpg" // fallback image while loading
>
  <source src={machineryVideo} type="video/mp4" />
</motion.video>


        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>

        {/* Foreground Content */}
        <div className='absolute inset-0 flex flex-col justify-center items-center px-4 z-20'>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center"
          >
            <motion.span 
              className="inline-block text-lg md:text-xl font-medium text-indigo-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className='text-5xl md:text-7xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'
            >
              Abdul Malik
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative mb-8"
            >
              <p className='text-xl md:text-3xl font-light mb-2 text-gray-200'>
                Mechanical Engineer
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact" className='bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg'>
                Get in Touch
              </Link>

              <Link to="/projects" className='bg-transparent border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black font-bold py-3 px-8 rounded-lg transition duration-300'>
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className='py-20 px-4  md:px-8 mx-auto '>
        <div className='max-w-screen mx-auto'>
          {/* About Me Section */}
          <AnimatedSection className='mb-24'>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-2/5">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-50 blur-lg"></div>
                  <img 
                    src={MyImage} 
                    alt="Abdul Malik" 
                    className="relative rounded-xl w-full h-auto object-cover shadow-2xl"
                  />
                </div>
              </div>
              
              <div className="md:w-3/5">
                <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'>Who Am I?</h2>
                
                <p className='text-lg text-gray-300 mb-6'>
                  I'm a passionate Mechanical Engineer with expertise in product design, system development, and CAD-based modeling. My academic journey has shaped my understanding of engineering principles, real-world problem solving, and hands-on mechanical design.
                </p>
                
                <p className='text-lg text-gray-300 mb-8'>
                  My approach combines technical excellence with creative problem-solving to deliver innovative solutions that meet real-world needs.
                </p>
                
                <div className='flex gap-6 items-center'>
                  <Link to="/about" className='px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition duration-300 flex items-center'>
                    More About Me
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  
                  <a href="./resume.pdf"
                  download={true}

                  className='text-indigo-400 hover:text-indigo-300 font-medium transition duration-300 flex items-center'>
                    Download Resume
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Skills Section */}
          <AnimatedSection className='mb-24'>
            <h2 className='text-3xl md:text-4xl font-bold mb-2 text-center'>My Skills</h2>
            <p className='text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto'>
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
            
            <SkillsSection />
          </AnimatedSection>

          {/* Education Section */}
          <AnimatedSection className='mb-24'>
            <h2 className='text-3xl md:text-4xl font-bold mb-2 text-center'>Education</h2>
            <p className='text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto'>
              My academic journey and qualifications
            </p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)" }}
                className='bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg'
              >
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-500 bg-opacity-20 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>B.E. Mechanical Engineering</h3>
                    <p className='text-indigo-400'>Mehran University of Engineering and Technology</p>
                  </div>
                </div>
                
                <div className="pl-16">
                  <p className='text-gray-400 mb-4'>2023 - Present</p>
                  <p className='text-gray-300'>
                    Currently pursuing my Bachelor's in Mechanical Engineering with a focus on product design, system development, and CAD-based modeling.
                  </p>
                </div>
              </motion.div>

              <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)" }}
              className='bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg'
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-500 bg-opacity-20 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white'>Intermediate in Pre-Engineering</h3>
                  <p className='text-indigo-400'>Govt. Degree College Qamber</p>
                </div>
              </div>
              <div className="pl-16">
                <p className='text-gray-400 mb-4'>2018 - 2020</p>
                <p className='text-gray-300'>
                  Completed my intermediate education in Pre-Engineering with a strong foundation in mathematics and physics.
                </p>
              </div>
            </motion.div>
            </div>
          </AnimatedSection>

          {/* Awards & Certifications Section */}
          <AnimatedSection className='mb-24'>
            <AwardsMarquee />
          </AnimatedSection>

          {/* Projects Section */}
          <AnimatedSection className='mb-24'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>Projects</h2>
            <ProjectsSection />
          </AnimatedSection>

          {/* Contact CTA */}
          <AnimatedSection>
            <div className="text-center py-16 bg-indigo-900 rounded-xl shadow-lg">
              <h2 className='text-3xl md:text-5xl font-bold mb-6 text-white'>Interested in working together?</h2>
              <p className='text-gray-300 text-lg mb-8 max-w-xl mx-auto'>
                Feel free to reach out if you'd like to collaborate or just say hi!
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full font-semibold text-white shadow-lg transition duration-300"
              >
                Contact Me
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
