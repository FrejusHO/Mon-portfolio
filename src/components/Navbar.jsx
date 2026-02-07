import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Assure-toi d'avoir fait : npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About me', href: '#about' },
    { name: 'Mes domaines', href: '#domaines' },
    { name: 'Stack', href: '#stack' },
    { name: 'Certificats', href: '#certificats' },
    { name: 'Projets', href: '#projets' },
    { name: 'Références', href: '#references' },
    { name: 'Contact', href: '#contact' },
    

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
            <a key={link.name} href={link.href} className="text-gray-400 hover:text-neonGreen transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-darkBg border-b border-gray-800 flex flex-col items-center py-6 gap-6 ">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white text-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;