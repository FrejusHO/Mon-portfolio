// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react'; // Assure-toi d'avoir fait : npm install lucide-react

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Me', href: '#about' },
//     { name: 'Domaines', href: '#domaines' },
//     { name: 'Stack', href: '#stack' },
//     { name: 'Certificats', href: '#certificats' },
//     { name: 'Projets', href: '#projets' },
//     { name: 'Références', href: '#references' },
//     { name: 'Contact', href: '#contact' },
    

//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-darkBg/90 backdrop-blur-md border-b border-gray-800 font-mono">
//       <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//         <div className="text-white text-lg font-bold">
//           Frejus <span className="text-neonGreen">N.</span> HOUNGBENOU
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8">
//           {navLinks.map((link) => (
//             <a key={link.name} href={link.href} className="text-gray-400 hover:text-neonGreen transition-colors text-lg font-bold">
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Button */}
//         <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="md:hidden bg-darkBg border-b border-gray-800 flex flex-col items-center py-6 gap-6 ">
//           {navLinks.map((link) => (
//             <a 
//               key={link.name} 
//               href={link.href} 
//               className="text-white text-lg font-bold"
//               onClick={() => setIsOpen(false)}
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, MessageCircle, Home, User, Briefcase, FileCode, Award, Send } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#home', icon: <Home size={20} /> },
    { name: 'À propos', href: '#about', icon: <User size={20} /> },
    { name: 'Services', href: '#domaines', icon: <Briefcase size={20} /> },
    { name: 'Projets', href: '#projets', icon: <FileCode size={20} /> },
    { name: 'Certificats', href: '#certificats', icon: <Award size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Send size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-darkBg/90 backdrop-blur-md border-b border-gray-800 font-mono">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          Frejus <span className="text-neonGreen">N.</span> HOUNGBENOU
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-400 hover:text-neonGreen transition-colors font-bold">
              {link.name}
            </a>
          ))}
        </div>

        {/* Bouton Burger Mobile */}
        <button className="md:hidden text-neonGreen z-[60]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Sidebar Mobile */}
      <div className={`fixed top-0 right-0 h-screen w-[80%] max-w-[300px] bg-black border-l border-gray-800 z-[55] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        
        <div className="flex flex-col h-full p-6 pt-20">
          {/* Section Profil (Comme sur ton image) */}
          <div className="flex flex-col items-center mb-8 border-b border-gray-800 pb-6">
            <div className="w-20 h-20 rounded-full border-2 border-neonGreen overflow-hidden mb-3">
              <img src="/me.jpeg" alt="Profil" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white font-bold text-center">Frejus N. <br/> HOUNGBENOU</h3>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
               <MessageCircle size={18} className="text-gray-400 hover:text-neonGreen cursor-pointer" />
               <Linkedin size={18} className="text-gray-400 hover:text-neonGreen cursor-pointer" />
               <Mail size={18} className="text-gray-400 hover:text-neonGreen cursor-pointer" />
            </div>
          </div>

          {/* Liens de navigation avec icônes */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="flex items-center gap-4 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-900 transition-all border-b border-gray-900/50"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-neonGreen">{link.icon}</span>
                <span className="text-lg font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay sombre pour fermer le menu en cliquant à côté */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;