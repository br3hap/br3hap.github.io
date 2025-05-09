
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link } from "lucide-react";

interface Technology {
  name: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "API de Gestión de Inventarios",
    description: "Sistema RESTful para gestión de inventarios con autenticación JWT, validación de datos y documentación automática con Swagger.",
    technologies: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "JWT" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    repoUrl: "https://github.com/username/inventory-api"
  },
  {
    id: 2,
    title: "Microservicio de Procesamiento de Pagos",
    description: "Arquitectura de microservicios para procesamiento de pagos con manejo de colas para operaciones asíncronas y alta disponibilidad.",
    technologies: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "RabbitMQ" },
      { name: "PostgreSQL" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    repoUrl: "https://github.com/username/payment-processor"
  },
  {
    id: 3,
    title: "Pipeline de Datos ETL",
    description: "Sistema de extracción, transformación y carga de datos para análisis de comportamiento de usuarios con escalado automático.",
    technologies: [
      { name: "Python" },
      { name: "Apache Airflow" },
      { name: "AWS Lambda" },
      { name: "Redis" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    repoUrl: "https://github.com/username/etl-pipeline"
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800 px-4 md:px-8 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-3">Proyectos Destacados</h2>
        <div className="w-16 h-1 bg-accent mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-3">{project.title}</h3>
                <p className="font-roboto text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
                      {tech.name}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Repositorio</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
                    >
                      <Link size={18} className="mr-1" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
