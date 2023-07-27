import React, { useState } from 'react';
import './Projects.css';
import AIimage from "../images/AI_inventorydisplay.jpg";
import AIimage2 from "../images/AI_inventoryLogin.jpg";
import AIimage3 from "../images/AI_inventoryRegister.jpg";
import FitnessImage from "../images/fitness_home.png";
import FitnessImage2 from "../images/fitness_login.png";
import FitnessImage3 from "../images/fitness_register.png";
import FitnessImage4 from "../images/fitness_workouts.png";
import FitnessImage5 from "../images/fitness_exercise.png";
import FitnessImage6 from "../images/fitness_analytics.png";
import FitnessImage7 from "../images/Fitness_stopwatch.jpg";
import VirusImage from "../images/VirusWebsite.png";
import VirusImage2 from "../images/VirusWebsite2.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fitness_currentIndex, setfitness_currentIndex] = useState(0);
  const [Virus_currentIndex, setVirus_currentIndex] = useState(0);

  const Virusimages = [
    VirusImage,
    VirusImage2,
  ]

  const Fitnessimages = [
    FitnessImage,
    FitnessImage2,
    FitnessImage3,
    FitnessImage4,
    FitnessImage5,
    FitnessImage6,
    FitnessImage7,
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
  //next image for fitness app
  const nextfitnessSlide = () =>{
    setfitness_currentIndex((prevIndex) => (prevIndex+1) % Fitnessimages.length);
  }
  //next image for virus website
  const nextVirusSlide = () =>{
    setVirus_currentIndex((prevIndex) => (prevIndex+1) % Virusimages.length);
  }

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
            className="arrow-icon"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
        </svg>
        </button>
      </div>
      <div className='AI-Projectdescription'>
        <p>This software was built on the MERN stack using MongoDB atlas.
          It is an inventory software that can store shoe inventory based on user-text input.
          It uses a text-entity machine learning algorithm that can detect name, selling, cost, size, etc.
          Additionally it has user-token authentication for logging in and registering.
        </p>
      </div>

      <div className='Fitness-App'>
        <h2>Mobile Fitness Application</h2>
      </div>
      <div className="fitness-slideshow-container">
        <img src={Fitnessimages[fitness_currentIndex]} alt={`Slide ${fitness_currentIndex + 1}`} />
        <button className="next-fitnessbtn" onClick={nextfitnessSlide}>
          {/* Custom arrow icon for the "Next" button */}
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fitness-arrow-icon"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor" // Use "currentColor" to inherit the parent element's color
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
        </svg>
        </button>
      </div>
      <div className='AI-Projectdescription'>
        <p>This mobile application was built using the Flutter framework and firebase database.
          It is a CRUD application for workouts and exercises that comes with special features such as a stopwatch,timer,
          daily motivational quotes, daily workout routines, and calorie analytics. This application also has a login and registration
          with email and phone number authentication.
        </p>
      </div>

      <div className='Virus-website'>
        <h2>Malicious Virus Detection Site</h2>
      </div>
      <div className="Virus-slideshow-container">
        <img src={Virusimages[Virus_currentIndex]} alt={`Slide ${Virus_currentIndex + 1}`} />
        <button className="next-Virusbtn" onClick={nextVirusSlide}>
          {/* Custom arrow icon for the "Next" button */}
          <svg
            width="24"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="Virus-arrow-icon"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor" // Use "currentColor" to inherit the parent element's color
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
        </svg>
        </button>
      </div>
      <div className='AI-Projectdescription'>
        <p>This website was build using React front-end,flask,python and SQLalchemy database. The website can take in hashes and 
          detect whether they are malicious. If the database does not recognize the hash then it will call the VIRUSTOTAL API to search 
          the hash, return the information about the hash, and then store the new hash into our database for future use. Additionally, this website
          has a rate limit feature and search analytics.
        </p>
      </div>
    </section>
  );
}

export default Projects;
