import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Navbar from './components/Navbar'; 
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
