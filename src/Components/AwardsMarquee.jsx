import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Awards data with actual image paths
const awardsData = [
  {
    id: 1,
    name: 'Intership Certificate',
    image: '/awards/intership.jpg'
  },
  {
    id: 2,
    name: 'Solid Work',
    image: '/awards/solidwork.jpg'
  },
  {
    id: 3,
    name: 'Textile spinning mechanical Maintenance',
    image: '/awards/Textile_spinning_mechanical_Maintenance.jpg'
  },
  {
    id: 4,
    name: 'Solid Works Quiz Competition',
    image: '/awards/Solid_works_quiz_competition.jpg'
  },
  {
    id: 5,
    name: '10x Growth 10 Sessions',
    image: '/awards/10x_growth_10_sessions.jpg'
  },
  {
    id: 6,
    name: '10x Growth Networking Session',
    image: '/awards/10x_growth_10_sessions_Networking.png'
  },
  {
    id: 7,
    name: '10 x Growth Freelance Freedom Elevate Your Freelance Game Session',
    image: '/awards/Freelance_Freedom_Elevate_Your_Freelance Game.png'
  },
  {
    id: 8,
    name: '10X Growth Gentle Introduction To Generative AI Sessions',
    image: '/awards/Gentle_introduction_to_generative_AI.png'
  },
  {
    id: 9,
    name: '10X Growth From Learning To Leading Where Learning Fuels Leadership Sessions',
    image: '/awards/From Learning To Leading Where Learning Fuels Leadership.png'
  },
  {
    id: 10,
    name: '10X Growth Effective Communication For Better Success Sessions',
    image: '/awards/Effective Communication For Better Success.png'
  },
  {
    id: 11,
    name: 'Build Your Effective Social Media Presence',
    image: '/awards/Build Your Effective Social Media Presence.png'
  },
  {
    id: 12,
    name: 'From Classroom To Career Preparing For Life After University',
    image: '/awards/From Classroom To Career Preparing For Life After University.png'
  },
  {
    id: 13,
    name: '10X Growth The World of AI & Intellectual Paralysis Session',
    image: '/awards/d of Al & Intellectual Paralysis.png'
  },
  {
    id: 14,
    name: '10X Growth Digital Solution Of Technology Session',
    image: '/awards/Digital Solution Of Technology.png'
  }
];

// Separate the top 5 awards for the gallery
const topAwards = awardsData.slice(0, 5);

// Get the remaining awards for the marquee
const scrollingAwards = awardsData.slice(5);

// Create a duplicate array for seamless looping
const duplicatedScrollingAwards = [...scrollingAwards, ...scrollingAwards];

const AwardsMarquee = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  const openModal = (award) => {
    setSelectedAward(award);
  };

  const closeModal = () => {
    setSelectedAward(null);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-10">
      {/* Decorative gear SVG in background */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-5">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Decorative gear SVG in background */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Title */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Awards & Certifications</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4"></div>
      </div>

      {/* Top 5 Awards Gallery */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Featured Certificates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">
          {topAwards.map((award) => (
            <motion.div 
              key={award.id}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => openModal(award)}
            >
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 h-64 flex flex-col items-center">
                <div className="flex-1 flex items-center justify-center mb-3">
                  <img 
                    src={award.image} 
                    alt={award.name} 
                    className="w-full h-40 object-contain transition-all duration-300 hover:scale-105"
                  />
                </div>
                <p className="text-white font-medium text-center text-sm">{award.name}</p>
             
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling Awards Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">More Achievements</h3>
        <div className="relative overflow-hidden">
          {/* Gradient overlay on left */}
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-900 to-transparent"></div>
          
          {/* Gradient overlay on right */}
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-900 to-transparent"></div>
          
          {/* Marquee container */}
          <motion.div
            className="flex py-4"
            animate={{ x: [0, -50 * scrollingAwards.length] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear"
            }}
          >
            {duplicatedScrollingAwards.map((award, index) => (
              <div 
                key={`${award.id}-${index}`} 
                className="flex flex-col items-center mx-6 w-44 flex-shrink-0"
                onClick={() => openModal(award)}
              >
                <div className="bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300 w-full h-40 flex items-center justify-center mb-2 cursor-pointer">
                  <img 
                    src={award.image} 
                    alt={award.name} 
                    className="w-20 h-20 object-contain transition-all duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-white font-medium text-center text-xs">{award.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal for viewing certificates */}
      {selectedAward && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 p-6 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{selectedAward.name}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center">
              <img 
                src={selectedAward.image} 
                alt={selectedAward.name} 
                className="max-w-full max-h-[70vh] object-contain border-2 border-indigo-500 rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AwardsMarquee;