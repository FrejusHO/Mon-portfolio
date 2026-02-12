

import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, Facebook } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 md:px-20 bg-[#000a12] font-mono overflow-hidden">
      
      {/* --- DESIGN ARRIÈRE-PLAN --- */}
      {/* Grille de perspective animée */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        {/* Glow central vert (effet aura) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neonGreen/10 rounded-full blur-[120px]"></div>
        
        {/* Particules flottantes simulées en CSS */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-1/4 w-1 h-1 bg-neonGreen rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-2 h-2 bg-neonGreen rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-neonGreen rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* --- CONTENU --- */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Conteneur Image avec bordure néon */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 mb-10 group">
          {/* Cadre néon animé */}
          <div className="absolute inset-0 border-[4px] border-neonGreen rounded-tl-[60px] rounded-br-[60px] translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
           <div className="absolute inset-0 border-2 border-neonGreen/20 rounded-full animate-ping pointer-events-none"></div>
            <div className="absolute inset-0 border-2 border-neonGreen/10 rounded-full animate-pulse delay-75 pointer-events-none"></div>
            
          <div className="relative h-full w-full rounded-tl-[60px] rounded-br-[60px] overflow-hidden border-2 border-gray-800 bg-[#000d1a]">
            <img 
              src="/me.jpeg" 
              alt="Frejus N. HOUNGBENOU"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Nom & Titre */}
        <div className="space-y-2 mb-6">
          <h2 className="text-2xl md:text-4xl font-black text-white md:text-center tracking-tighter">
            Frejus <span className="text-neonGreen">N.</span> HOUNGBENOU
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[5px] w-8 bg-neonGreen"></div>
            {/* <span className="text-neonGreen  tracking-[0.3em] text-sm">Ingénieur Logiciel</span> */}
               <span className=" text-neonGreen overflow-hidden border-r-4 border-neonGreen whitespace-nowrap">
                  {/* Ingénieur Logiciel */}
                   <TypeAnimation
                  sequence={[
                    'Ingénieur Logiciel',
                    2000,
                    'Crypto trader',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
               <div className="h-20 mt-4 text-xl md:text-2xl font-mono text-gray-400">
               
          </div>
            <div className="h-[5px] w-8 bg-neonGreen"></div>
          </div>
        </div>

        {/* Texte de présentation */}
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-12 text-justify">
          Passionné par  <span className="text-white">l'innovation technologique, la Blockchain et les crypto monnaies,</span> je conçois des solutions digitales qui transforment des enjeux complexes en architectures <span className="text-neonGreen">robustes et scalables</span>.
        </p>

        {/* Icônes Sociales (Style Bubble Néon) */}
        <div className="flex flex-wrap justify-center gap-5 mb-14">
          {[
            { icon: <Facebook />, link: "#", color: "hover:text-blue-500" },
            { icon: <Mail />, link: "mailto:frejushn@gmail.com", color: "hover:text-red-400" },
            { icon: <MessageCircle />, link: "https://wa.me/2290163822317", color: "hover:text-green-500" },
            { icon: <Linkedin />, link: "#", color: "hover:text-blue-400" },
          ].map((social, index) => (
            <a 
              key={index}
              href={social.link}
              className={`p-4 bg-[#0a192f] border border-gray-800 text-white rounded-full transition-all duration-300 hover:border-neonGreen hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] ${social.color}`}
            >
              {React.cloneElement(social.icon, { size: 22 })}
            </a>
          ))}
        </div>

        {/* Bouton CV Stylisé */}
        <a 
          href="/CV_Houngbenou_Frejus.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative px-10 py-4 overflow-hidden rounded-full border-2 border-neonGreen font-bold text-neonGreen transition-all duration-300 hover:text-black"
        >
          <span className="absolute inset-0 bg-neonGreen translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
          <span className="relative z-10">Consulter mon CV</span>
        </a>
      </div>

      <style jsx>{`
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  );
};

export default About;