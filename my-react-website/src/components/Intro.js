import React, { useRef } from 'react';
import './intro.css';
import Profilepic from '../images/Profile.jpg';
const Intro = () => {
  return (
    <>
    <section id="intro">
        <div className='Intro-text'>
            <div className='Intro-title'>
                <h1>Hello, my name is</h1>
                <h1>Kevin</h1>
            </div>
            <div className ='Intro-desc'>
            <p>I'm a software developer passionate about crafting innovative solutions. 
                With a curiosity-driven mindset, I've immersed myself in various programming languages and frameworks. 
                From interactive web applications to cutting-edge machine learning, 
                I'm always eager to take on new challenges and contribute to projects that make a positive impact on people's lives.
            </p>
            </div>
        </div>
        <div className='Profile-picture'>
            <img src={Profilepic} alt='Profile Pic'/>
        </div>
    </section>
    </>
  );
}

export default Intro;
