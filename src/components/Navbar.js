import React from 'react';
import { Link } from 'react-scroll';
import { styles } from '../styles';

const Navbar = () => {
  return (
    <nav className="w-full fixed bg-white bg-opacity-90 text-black z-10 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">zl.</a>
        <div className="flex space-x-8">
          <Link to="hero" smooth={true} duration={500} className={`${styles.sectionSubText} cursor-pointer font-medium text-gray-700 font-bold hover:text-black hover:underline`}>
            Home
          </Link>
          <Link to="skills" smooth={true} duration={500} className={`${styles.sectionSubText} cursor-pointer font-medium text-gray-700 font-bold hover:text-black hover:underline`}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className={`${styles.sectionSubText} cursor-pointer font-medium text-gray-700 font-bold hover:text-black hover:underline`}>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
