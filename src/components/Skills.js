import React from 'react';
import { languages, frameworks } from '../constants';
import { styles } from "../styles";
import './bounce.css';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-200 py-16">
      <div className="text-center max-w-7xl mx-auto flex flex-col items-start ">
        <h2 className={`text-4xl font-bold mb-8 ${styles.sectionHeadText}`}>my skills.</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-16 my-10 w-full">
  
          <div className="text-center w-full mb-10 md:mb-0">
            <h3 className={`${styles.sectionSubText} text-3xl font-semibold mb-4`}>Technical Languages</h3>
            <div className="flex flex-row flex-wrap justify-center gap-6 md:gap-16">
                <div className='flex flex-row flex-wrap justify-center gap-6 md:gap-16 my-10 w-full'>
                {languages.map((language, index) => (
                    <div key={index} className={`sphere sunset-gradient flex items-center justify-center rounded-full p-4`}>
                        <img title={language.title} src={language.icon} alt={language.title} className={`hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain`} />
                    </div>
                ))}
            </div>
              
            </div>
          </div>
          
          <div className="text-center w-full">
            <h3 className={`${styles.sectionSubText} text-3xl font-semibold mb-4`}>Frameworks and Technologies</h3>
            <div className='flex flex-row flex-wrap justify-center gap-6 md:gap-16 my-10 w-full'>
                {frameworks.map((framework, index) => (
                    <div key={index} className={`sphere sunset-gradient flex items-center justify-center rounded-full p-4`}>
                        <img title={framework.title} src={framework.icon} alt={framework.title} className={`hover:animate-spin w-12 h-12 md:w-20 md:h-20 object-contain`}  />
                    </div>
                ))}
            </div>
           
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
