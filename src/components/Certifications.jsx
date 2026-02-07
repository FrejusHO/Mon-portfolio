import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const docs = [
    {
      title: "Lettre de Félicitation",
      issuer: "Rectorat de l'UAC",
      desc: "Contribution à la conception de la plateforme SIG de l'UAC.",
      img: "/certificats/c5.png" // Assure-toi de mettre les images dans le dossier public
    },
    {
      title: "Attestation de Participation",
      issuer: "Fondation Mastercard",
      desc: "Atelier d'élaboration de la feuille de route E-learning.",
      img: "/certificats/c4.png"
    },
    {
      title: "Étudier de façon optimale",
      issuer: "Baobab Platform",
      desc: "Certification de réussite - Février 2024.",
      img: "/certificats/c2.png"
    },
    {
      title: "Apprendre à apprendre",
      issuer: "Baobab Platform",
      desc: "Certification de réussite - Novembre 2023.",
      img: "/certificats/c1.png"
    }
  ];

  return (
    <section id="certificats" className="py-20 px-6 md:px-20 bg-darkBg font-mono">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center md:text-left">
          <span className="text-neonGreen">$</span> Certificats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc, index) => (
            <div key={index} className="bg-cardBg border border-gray-800 rounded-xl overflow-hidden group hover:border-neonGreen transition-all duration-300 shadow-lg">
              {/* Preview de l'image */}
              <div className="relative h-48 overflow-hidden bg-white">
                <img 
                  src={doc.img} 
                  alt={doc.title} 
                  className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Award className="text-neonGreen" size={40} />
                </div>
              </div>

              {/* Infos */}
              <div className="p-5">
                <h3 className="text-white font-bold text-sm mb-1 truncate">{doc.title}</h3>
                <p className="text-neonGreen text-[10px] uppercase mb-3 tracking-widest">{doc.issuer}</p>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                  {doc.desc}
                </p>
                
                <button 
                  onClick={() => window.open(doc.img, '_blank')}
                  className="mt-4 flex items-center gap-2 text-[10px] text-gray-500 hover:text-white transition-colors"
                >
                  <ExternalLink size={12} /> VOIR LE DOCUMENT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;