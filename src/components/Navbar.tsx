
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300", 
        scrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="font-poppins font-medium text-lg">Portfolio</div>
        <div className="flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-8 font-roboto">
              <li>
                <a href="#home" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Proyectos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contacto</a>
              </li>
            </ul>
          </nav>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
