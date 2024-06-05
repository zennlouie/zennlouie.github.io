import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { styles } from "../styles";
import { portrait, linkedin, github, gmail, resume } from '../assets';
// resume is a pdf

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="bg-black rounded-full w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
            <img src={portrait} alt="portrait" className='w-44 h-44 sm:w-60 sm:h-60 rounded-full' />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className={`${styles.heroHeadText} mt-2 text-black-100`}>
            I am a 
            <span className='text-secondary-light'>
              <Typewriter words={[' Software Engineer.', ' Machine Learning Engineer.', ' Full Stack Developer.', ' Mobile Developer.']} cursor cursorStyle='|' typeSpeed={50} deleteSpeed={25} delaySpeed={1000} loop={0}/>
            </span>
          </p>
          <p className={`${styles.heroSubText} mt-4 text-1 text-gray-700`}>Hi, my name is Zenn Louie. I like to build stuff. I'm currently based in the Philippines 🇵🇭.</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a href='https://www.linkedin.com/in/zenn-louie-reyes-a60895215/' target='_blank' rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12">
              <img src={linkedin} alt="linkedin" className='w-full h-full hover:scale-105' />
            </a>
            <a href='https://github.com/zenrui' target='_blank' rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12">
              <img src={github} alt="github" className='w-full h-full hover:scale-105' />
            </a>
            <a href='mailto:reyeszlc21@gmail.com' target='_blank' rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12">
              <img src={gmail} alt="gmail" className='w-full h-full hover:scale-105' />
            </a>
          </div>
          <div className="mt-4 flex justify-center md:justify-start">
            <a href={resume} download className="py-2 px-4 bg-black text-white rounded-full text-lg font-bold hover:bg-gray-800">MY RESUME</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
