import React from 'react';
import { Award, ExternalLink, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const docs = [
    {
      title: "Lettre de Félicitation",
      issuer: "Rectorat de l'UAC",
      desc: "Contribution à la conception de la plateforme SIG de l'UAC.",
      img: "/certificats/c5.png"
    },
    {
      title: "Attestation de Participation",
      issuer: "Fondation Mastercard",
      desc: "Atelier d'élaboration de la feuille de route E-learning.",
      img: "/certificats/c4.png"
    },
    {
      title: "Diplôme de Participation",
      issuer: "The John Maxwell Team",
      desc: "Événement de leadership pour les jeunes - Initiative Mondiale de la Jeunesse.",
      img: "/certificats/c6.jpeg" 
    },
    {
      title: "Attestation de Réussite",
      issuer: "Baobab Platform",
      desc: "Certification de réussite - Formation continue.",
      img: "/certificats/c1.png"
    },
  ];

  return (
    <section id="certificats" className="py-20 px-6 md:px-20 bg-slate-900 font-mono overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 flex items-center justify-center gap-4"
        >
          <Terminal className="text-neonGreen" size={32} />
          <span className="text-neonGreen">ls</span> ./my_certificats
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map((doc, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-black/40 border border-gray-800 rounded-xl overflow-hidden group hover:border-neonGreen/60 transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* Preview de l'image avec effet Overlay */}
              <div className="relative h-48 overflow-hidden bg-white/95 group-hover:bg-white transition-colors">
                <img 
                  src={doc.img} 
                  alt={doc.title} 
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-neonGreen/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                   <motion.div
                     whileHover={{ rotate: 15, scale: 1.2 }}
                   >
                     <Award className="text-neonGreen drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]" size={48} />
                   </motion.div>
                </div>
              </div>

              {/* Infos */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-neonGreen transition-colors line-clamp-1">
                    {doc.title}
                  </h3>
                  <p className="text-neonGreen text-[10px] font-bold uppercase mb-3 tracking-[0.2em]">
                    {doc.issuer}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 italic">
                    {doc.desc}
                  </p>
                </div>
                
                <button 
                  onClick={() => window.open(doc.img, '_blank')}
                  className="mt-6 flex items-center gap-2 text-[10px] font-bold text-gray-500 hover:text-white transition-all group/btn"
                >
                  <ExternalLink size={14} className="group-hover/btn:rotate-12 transition-transform" /> 
                  <span className="border-b border-transparent group-hover/btn:border-white">VOIR LE DOCUMENT</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;