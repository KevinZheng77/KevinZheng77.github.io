import React, { useState } from 'react';
import './Projects.css';
import AIimage from "../images/AI_inventorydisplay.jpg";
import AIimage2 from "../images/AI_inventoryLogin.jpg";
import AIimage3 from "../images/AI_inventoryRegister.jpg";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const Fitnessimages = [
    FitnessImage,
    FitnessImage2,
    FitnessImage3,
  ];

  const AIimages = [
    AIimage,
    AIimage2,
    AIimage3,
  ];
  
  //shows next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % AIimages.length);
  };
  return (
    <section id="projects">
      <div className='Title'>
        <h1>Projects</h1>
      </div>
      <div className='AI-inventory'>
        <h2>AI-Inventory</h2>
      </div>
      <div className="slideshow-container">
        <img src={AIimages[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className="next-btn" onClick={nextSlide}>
          {/* Custom arrow icon for the "Next" button */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
        </svg>
        </button>
      </div>
      <div className='AI-Projectdescription'>
        <p>This software was built on the MERN stack using MongoDB atlas.
          It is an inventory software that can store shoe inventory based on user-text input.
          It uses a text-entity model that can detect name, selling, cost, size, etc.
          Additionally it has user-token authentication for logging in and registering.
        </p>
      </div>
      <div className='Fitness-App'>
        <h2>Mobile Fitness App</h2>
      </div>
    </section>
  );
}

export default Projects;
