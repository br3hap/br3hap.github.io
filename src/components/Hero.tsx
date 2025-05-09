
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Juan Pérez Rodríguez';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100); // velocidad de escritura
      
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-32 px-4 md:px-8">
      <div className="container mx-auto animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
            {displayText}<span className="animate-pulse">|</span>
          </h1>
          <div className="w-20 h-1 bg-accent mb-8"></div>
          <p className="font-roboto text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
            Desarrollador web full-stack con experiencia en el diseño y creación de aplicaciones
            modernas. Especializado en React, Node.js y arquitecturas basadas en microservicios.
            Apasionado por crear experiencias de usuario excepcionales y soluciones escalables.
          </p>
          <a
            href="#projects"
            className="inline-block font-poppins bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
