
import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-3">Contacto</h2>
        <div className="w-16 h-1 bg-accent mb-12"></div>
        
        <div className="max-w-xl">
          <p className="font-roboto text-gray-700 dark:text-gray-300 mb-12">
            ¿Interesado en trabajar juntos? Contáctame a través de los siguientes medios:
          </p>
          
          <div className="flex flex-col space-y-4">
            <a 
              href="mailto:correo@ejemplo.com" 
              className="flex items-center font-roboto text-lg group"
            >
              <Mail className="mr-4 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
              <span className="group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">correo@ejemplo.com</span>
            </a>
          </div>
          
          <div className="mt-12">
            <h3 className="font-poppins font-medium text-lg mb-4">Redes sociales:</h3>
            <div className="flex space-x-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Github"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
