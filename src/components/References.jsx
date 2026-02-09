import React from 'react';
import { UserCheck, Phone, Mail } from 'lucide-react';

const References = () => {
  const references = [
    {
      name: "YADOULETON C.Césaire",
      role: "Chef Scolarité ENEAM-UAC",
      phone: "+229 01 95 84 59 84",
      email: "cesairecodjo@gmail.com"
    },
    {
      name: "OYETOLA Victor",
      role: "Chef SERVICE SPTIC-UAC ", 
      phone: "+229 01 95 56 85 51", 
      email: "victor.oyetola@uac.bj" 
    },
    {
      name: "ZOHOU Pierre Jérôme",
      role: "Informaticien IFRI-UAC", 
      phone: "+229 01 97 38 49 92", 
      email: "pzohou@gmail.com" 
    }
    
  ];

  return (
    <section id='references' className="py-20 px-6 md:px-20 bg-slate-900 font-mono">
      <div className="max-w-6xl mx-auto"> {/* Augmenté à 6xl pour plus d'espace horizontal */}
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 text-center md:text-left">
          <span className="text-neonGreen">$</span> Références
        </h2>

        {/* Le conteneur Flex qui aligne les cartes */}
        <div className="flex flex-col md:flex-row gap-8">
          {references.map((ref, index) => (
            <div 
              key={index} 
              className="flex-1 bg-cardBg border border-gray-800 p-8 rounded-xl relative group hover:border-neonGreen transition-all shadow-lg"
            >
              <div className="absolute -top-4 -left-4 bg-neonGreen text-black p-2 rounded shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                <UserCheck size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">{ref.name}</h3>
              <p className="text-neonGreen text-sm mb-6 uppercase tracking-widest">{ref.role}</p>
              
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3 group/item">
                  <Phone size={16} className="text-gray-500 group-hover/item:text-neonGreen transition-colors" />
                  <span className="hover:text-white transition-colors">{ref.phone}</span>
                </div>
                <div className="flex items-center gap-3 group/item">
                  <Mail size={16} className="text-gray-500 group-hover/item:text-neonGreen transition-colors" />
                  <span className="hover:text-white transition-colors">{ref.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;