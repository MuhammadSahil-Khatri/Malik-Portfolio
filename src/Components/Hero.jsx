import React from 'react'

const Hero = () => {
  return (
    <div ref={targetRef} className='h-screen w-screen relative overflow-hidden'>
    <motion.video 
      style={{ opacity, scale }}
      className='h-full w-full object-cover filter brightness-75' 
      autoPlay 
      loop 
      muted
      playsInline
    >
      <source src={machineryVideo} type="video/mp4" />
    </motion.video>
    
    {/* Overlay gradient for better text visibility */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
    
    <div className='absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4'>
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
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.div>
  </div>
  )
}

export default Hero
