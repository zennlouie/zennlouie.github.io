import React, { useState, useRef } from 'react';
import { styles } from "../styles"; 
import { projects } from '../constants'; 
import { popout } from '../assets';

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const cardRef = useRef(null);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + project.images.length) % project.images.length);
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const handleToggle = () => {
  onToggle();
  if (!isExpanded && cardRef.current) {
    setTimeout(() => {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200); 
  }
};


  return (
    <div ref={cardRef} className="border border-gray-300 rounded-lg overflow-hidden shadow-md mb-4">
      <div className="p-4 flex justify-between items-center cursor-pointer" onClick={handleToggle}>
        <div className="flex items-center">
          <h2 className="text-xl font-bold mr-2">{project.title}</h2>
          {project.techStack.map((tech, index) => (             
            <img key={index} src={tech.icon} alt={tech.title} className="w-8 h-8 ml-2" />
          ))}
        </div>
        <button className="text-gray-500 hover:text-gray-700">{isExpanded ? "▲" : "▼"}</button>
      </div>
      {isExpanded && (
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1">
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
          <div className="flex justify-center">
            {project.liveDemoUrl ? (
              <div className="border border-black rounded-lg p-4 w-full max-w-2xl">
                <iframe src={project.liveDemoUrl} className="w-full h-[500px]" title={project.title} />
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  <img src={popout} alt="Live Demo" className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <div className={`relative border border-black rounded-lg p-4 w-full cursor-pointer ${project.mode === "landscape" ? styles.landscape : styles.portrait}`} >
                <img src={project.images[currentSlide]} alt={`Slide ${currentSlide}`} className="w-full h-full max-w-full max-h-full object-contain" onClick={openImageModal}/>
                <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
                  ‹
                </button>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {isImageModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50" onClick={closeImageModal}>
          <button className="absolute top-20 right-0 m-4 text-black font-bold" onClick={closeImageModal}>✕</button>
          <div className={`relative ${project.mode === "landscape" ? styles.landscape_modal : styles.portrait_modal}`}>
            <img src={project.images[currentSlide]} className='w-full h-full max-w-full max-h-full object-contain' alt={`Slide ${currentSlide}`} />
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="container max-w-7xl mx-auto flex flex-col justify-between px-4">
        <h2 className={`${styles.sectionHeadText} font-bold mb-16`}>my public projects.</h2>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
