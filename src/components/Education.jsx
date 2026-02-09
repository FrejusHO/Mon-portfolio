import React from 'react';
import { GraduationCap, Award,Terminal } from 'lucide-react';

const Education = () => {
  const studies = [
    {
      degree: "Licence professionnelle en Génie Logiciel",
      period: "Oct 2020 - Dec 2023",
      school: "Institut de Formation et de Recherche en Informatique (IFRI)",
      location: "Université d'Abomey-Calavi, Benin",
      details: [
        "Focus sur le developpement web"
      ]
    },
    {
      degree: "Programme d'étude de la Fondation MasterCard",
      period: "Oct 2020 - Oct 2023",
      school: "Université d'Abomey-Calavi",
      location: "Benin",
      details: [
        "Boursier du programme de la Fondation Mastercard",
      ]
    },
     {
      degree: "Baccalauréat scientifique",
      period: "Oct 2017 - Juin 2020",
      school: "CEG Ahouannonzoun",
      location: "Allada",
      details: [
        "Major de promotion",
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-20 bg-slate-900 text-white font-mono">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <Terminal className="text-neonGreen" size={32} />
          <span className="text-neonGreen text-4xl"></span> Education
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {studies.map((study, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-cardBg border border-gray-800 rounded-lg group-hover:border-neonGreen transition-colors">
                  <GraduationCap className="text-neonGreen" size={24} />
                </div>
                <div className="w-[2px] h-full bg-gray-800 mt-2"></div>
              </div>

              <div className="pb-10">
                <span className="text-neonGreen text-sm font-bold tracking-widest">{study.period}</span>
                <h3 className="text-xl font-bold mt-1 mb-2  tracking-tighter">{study.degree}</h3>
                <p className="text-gray-400 mb-4">{study.school}, {study.location}</p>
                
                <div className="flex flex-col gap-2">
                  {study.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-500">
                      <Award size={14} className="text-neonGreen" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;