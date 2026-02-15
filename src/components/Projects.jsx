import React from 'react';
import { Terminal } from 'lucide-react';
const Projects = () => {
  const projects = [
    {
      title: "DataFlow CRM",
      description: "Gestion client optimisée avec analyse de données en temps réel.",
      tags: ["Postgres", "Node.js", "React js"],
      highlight: true
    },
    {
      title: "PsyClic App",
      description: "Application de Gestion des patients dédiés aux psychologues",
      tags: ["Postgres", "React js", "Laravel"],
      highlight: false
    },
    {
      title: "E-commerce API",
      description: "Architecture microservices pour une plateforme de vente scalable.",
      tags: ["Python", "Django", "Vue.js"],
      highlight: false
    }
  ];

  return (
    <section id="projets" className="py-20 bg-darkBg font-mono">
      <div className="container mx-auto px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 flex items-center gap-4 ">
            <Terminal className="text-neonGreen text-4xl" size={32} />
             ./my_projets
         
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl bg-cardBg border-2 transition-all duration-300 transform hover:-translate-y-2
                ${project.highlight ? 'border-neonGreen shadow-[0_0_20px_rgba(0,255,65,0.15)]' : 'border-gray-800 hover:border-neonGreen'}`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[10px] uppercase tracking-widest border border-neonGreen text-neonGreen px-3 py-1 rounded-md bg-neonGreen/5"
                  >
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; // La ligne magique qui manquait !