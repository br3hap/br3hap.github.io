
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-50 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-roboto text-gray-600 mb-4 md:mb-0">
            © {currentYear} Juan Pérez Rodríguez. Todos los derechos reservados.
          </p>
          <nav>
            <ul className="flex space-x-6 font-roboto text-sm">
              <li>
                <a href="#home" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
