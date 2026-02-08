// // import React from 'react';

// // const About = () => {
// //   return (
// //     <section id="about" className="py-20 px-6 md:px-20 bg-darkBg font-mono">
// //       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
// //         {/* Conteneur Image avec effet néon */}
// //         <div className="relative group w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
// //           <div className="absolute -inset-1 bg-neonGreen rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
// //           <div className="relative bg-cardBg rounded-2xl overflow-hidden border border-gray-800 h-full w-full">
// //             <img 
// //               src="/me.jpeg" // Place ta photo dans le dossier 'public' et nomme-la ainsi
// //               alt="Frejus N. HOUNGBENOU"
// //               className="w-full h-full object-cover  hover:grayscale transition duration-500"
// //             />
// //           </div>
// //         </div>

// //         {/* Texte de présentation */}
// //         <div className="flex-1 text-white">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
// //             {/* <span className="text-neonGreen">03.</span> À propos de moi */}
// //           </h2>
          
// //           <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
// //             <p>
// //               Je suis <span className="text-white font-bold">HOUNGBENOU Nouwassè Frejus</span>, 
// //               Développeur web full-stack passionné par la technologie blockchain et les crypto
// //             monnaies, je développe des solutions digitales sécurisées et performantes,
// //             des enjeux complexes en applications robustes.
// //             </p>
// //             {/* <p>
// //               Mon expertise s'étend de la <span className="text-neonGreen">modélisation numérique </span> 
// //               à la mise en place d'architectures logicielles robustes et scalables. J'aime concevoir des 
// //               systèmes qui sont non seulement performants, mais aussi maintenables et élégants.
// //             </p> */}
            
// //             <div className="pt-6 flex gap-4">
// //               {/* <button className="px-6 py-2 bg-transparent border border-neonGreen text-neonGreen hover:bg-neonGreen/10 transition rounded">
// //                 Consultez mon CV
// //               </button> */}

// //             <a 
// //                 href="/CV_Houngbenou_Frejus.pdf" 
// //                 target="_blank" 
// //                 // download="CV_Houngbenou_Frejus.pdf"
// //                 rel="noopener noreferrer"
// //                 className="px-6 py-3 border-2 border-neonGreen text-neonGreen font-bold hover:bg-neonGreen hover:text-black transition-all duration-300 rounded inline-block"
// //                 >
// //                  Consultez mon CV
// //             </a>
// //               <div className="flex items-center gap-4 ml-4 text-2xl">
// //                 {/* Tu pourras ajouter des icônes ici plus tard */}
// //                 {/* <span className="hover:text-neonGreen cursor-pointer">in</span>
// //                 <span className="hover:text-neonGreen cursor-pointer">git</span> */}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default About;

// import React from 'react';
// import { Github, Linkedin, Mail, MessageCircle, Facebook } from 'lucide-react';

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-6 md:px-20 bg-[#001122] font-mono text-center">
//       <div className="max-w-4xl mx-auto flex flex-col items-center">
        
//         {/* Conteneur Image avec bordure arrondie spécifique (style image 4) */}
//         <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8">
//           {/* Le cadre néon vert derrière l'image */}
//           <div className="absolute inset-0 border-[6px] border-neonGreen rounded-tl-[50px] rounded-br-[50px] translate-x-3 translate-y-3"></div>
          
//           <div className="relative h-full w-full rounded-tl-[50px] rounded-br-[50px] overflow-hidden border-2 border-gray-800 bg-cardBg">
            
//             <img 
//               src="/me.jpeg" 
//               alt="Frejus N. HOUNGBENOU"
//               // className="w-full h-full object-cover"
//               className="w-full h-full object-cover  hover:grayscale transition duration-500"
//             />
//           </div>
//         </div>

//         {/* Nom en Vert Néon */}
//         <h2 className="text-2xl md:text-3xl font-bold text-neonGreen mb-4 tracking-wide">
//           Frejus N. HOUNGBENOU
//         </h2>

//         {/* Titre "Je suis..." avec barre de soulignement */}
//         <div className="mb-8">
//           {/* <h3 className="text-xl md:text-2xl text-white font-semibold">
//             Je suis passionné par la technologie blockchain et les crypto monnaies
//           </h3> */}
//           <div className="w-24 h-1 bg-neonGreen mx-auto mt-2"></div>
//         </div>

//         {/* Texte de présentation centré */}
//         <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
//           J'ai une forte passion pour la technologie blockchain et les crypto monnaies.
//           Développeur full-stack, je transforme des enjeux complexes en applications robustes.
//         </p>

//         {/* Icônes Sociales Arrondies (Style Image 4) */}
//         <div className="flex flex-wrap justify-center gap-6 mb-12">
//           {[
//             { icon: <Facebook />, link: "#" },
//             { icon: <Mail />, link: "mailto:frejushn@gmail.com" },
//             // { icon: <Github />, link: "#" },
//             { icon: <MessageCircle />, link: "https://wa.me/2290163822317" },
//             { icon: <Linkedin />, link: "#" },
//           ].map((social, index) => (
//             <a 
//               key={index}
//               href={social.link}
//               className="p-4 bg-neonGreen text-black rounded-full hover:scale-110 hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.4)]"
//             >
//               {React.cloneElement(social.icon, { size: 24 })}
//             </a>
//           ))}
//         </div>

//         {/* Bouton CV */}
//         <a 
//           href="/CV_Houngbenou_Frejus.pdf" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="px-8 py-3 border-2 border-neonGreen text-neonGreen font-bold hover:bg-neonGreen hover:text-black transition-all duration-300 rounded-full"
//         >
//           Consultez mon CV
//         </a>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, Facebook } from 'lucide-react';

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
          <h2 className="text-3xl md:text-3xl font-black text-white tracking-tighter">
            Frejus <span className="text-neonGreen">N.</span> HOUNGBENOU
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[2px] w-8 bg-neonGreen"></div>
            <span className="text-neonGreen  tracking-[0.3em] text-sm">Ingénieur Logiciel</span>
            <div className="h-[2px] w-8 bg-neonGreen"></div>
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