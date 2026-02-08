import React from 'react';
import { Briefcase, Calendar, MapPin, Terminal } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Développeur web backend (Stage-pro)",
      company: "SPTIC-UAC",
      location: "Abomey-Calavi, Bénin",
      period: "Avril 2023 - Aujourd'hui",
      points: [
        "Participation à la mise en place de l'Espace Numérique de Travail (ENT) de l'UAC",
        "Développement effectif du module 'Espace Étudiant' de l'ENT",
        "Optimisation des processus d'inscription numérisés à l'Université d'Abomey-Calavi"
      ]
    },
    {
      title: "Développeur web (Stage-Immersion) ",
      company: "Wootan-Group",
      location: "Cotonou, Bénin",
      period: "Août 2022 - Octobre 2022",
      points: [
        "Développement du back-office d'une application de gestion d'entreprise"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-[#000a12] font-mono text-white relative overflow-hidden">
      {/* Effet de fond subtil */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neonGreen/5 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
          <Terminal className="text-neonGreen" size={32} />
          <span>Expériences</span>
        </h2>

        <div className="relative border-l-2 border-gray-800 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 ml-8 relative group">
              {/* Point lumineux sur la timeline */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#000a12] border-2 border-neonGreen rounded-full group-hover:shadow-[0_0_15px_#00ff41] transition-shadow"></div>
              
              <div className="bg-[#00121a] p-8 rounded-2xl border border-gray-800 hover:border-neonGreen/40 transition-all duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <h3 className="text-xl font-bold text-neonGreen tracking-tight">
                    {exp.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-black/50 border border-gray-700 rounded-full text-xs font-bold text-gray-300">
                    <Calendar size={12} className="text-neonGreen" />
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 font-semibold uppercase">
                  <span className="flex items-center gap-2">
                    <Briefcase size={14} className="text-neonGreen" /> {exp.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-neonGreen" /> {exp.location}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-3 leading-relaxed">
                      <span className="text-neonGreen font-bold mt-1">{'>'}</span>
                      <span className="text-[15px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;