import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Linkedin, Mail, MessageCircle, Home, User, Briefcase, FileCode, Award, Send, Settings, Palette } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  const colors = [
    { name: 'Matrix Green', value: '#00ff41' },
    { name: 'Cyber Blue', value: '#00d4ff' },
    // { name: 'Electric Indigo', value: '#6200ff' },
    // { name: 'Deep Purple', value: '#9c27b0' },
    // { name: 'Ruby Red', value: '#ff003c' },
    // { name: 'Neon Orange', value: '#ff5722' },
    // { name: 'Gold', value: '#ffcc00' },
    // { name: 'Lemon Yellow', value: '#d4ff00' },
    // { name: 'Hot Pink', value: '#e91e63' },
    { name: 'Candy Orchid', value: '#f14eff' },
    { name: 'Soft Cyan', value: '#00fff2' },
    // { name: 'Mint', value: '#00ff95' },
    // { name: 'Sky Blue', value: '#03a9f4' },
    // { name: 'Lavender', value: '#bd93f9' },
    // { name: 'Pure White', value: '#ffffff' },
    // { name: 'Crimson', value: '#dc143c' },
  ];

  const changeColor = (colorValue) => {
    document.documentElement.style.setProperty('--neon-green', colorValue);
    localStorage.setItem('selectedColor', colorValue);
  };

  useEffect(() => {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
      document.documentElement.style.setProperty('--neon-green', savedColor);
    }

    // Fermer le sélecteur si on clique en dehors (PC)
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home', icon: <Home size={20} /> },
    { name: 'À propos', href: '#about', icon: <User size={20} /> },
    { name: 'Education', href: '#education', icon: <Award size={20} /> },
    { name: 'Expériences', href: '#experience', icon: <Briefcase size={20} /> },
    { name: 'Projets', href: '#projets', icon: <FileCode size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Send size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-darkBg/90 backdrop-blur-md border-b border-gray-800 font-mono">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          Frejus <span className="text-neonGreen tracking-tighter transition-colors duration-300">N.</span> HOUNGBENOU
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-400 hover:text-neonGreen transition-colors font-bold text-sm">
              {link.name}
            </a>
          ))}

          {/* SÉLECTEUR DE THÈME PC */}
          <div className="relative" ref={pickerRef}>
            <button 
              onClick={() => setShowPicker(!showPicker)}
              className="flex items-center gap-2 p-2 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-400 hover:text-neonGreen transition-all shadow-lg"
              title="Personnaliser la couleur"
            >
              <Palette size={20} />
              <span className="text-[10px] font-black uppercase tracking-tighter">Thème</span>
            </button>

            {showPicker && (
              <div className="absolute right-0 mt-3 p-4 bg-[#0a0a0a] border border-gray-700 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-56 animate-in fade-in zoom-in duration-200">
                <div className="flex items-center gap-2 mb-3 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                  <Settings size={10} /> Choisis un thème
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => { changeColor(color.value); setShowPicker(false); }}
                      className="w-8 h-8 rounded-md border border-white/5 hover:scale-110 active:scale-90 transition-all shadow-inner"
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bouton Burger Mobile */}
        <button className="md:hidden text-neonGreen z-[60] p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Sidebar Mobile */}
      <div className={`fixed top-0 right-0 h-screen w-[85%] max-w-[320px] bg-[#050505] border-l border-gray-800 z-[55] transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden overflow-y-auto`}>
        <div className="flex flex-col h-full p-6 pt-20">
          {/* Section Profil */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-neonGreen overflow-hidden mb-4 transition-colors duration-300 shadow-[0_0_15px_var(--neon-green)] opacity-80">
                <img src="/me.jpeg" alt="Profil" className="w-full h-full object-cover" />
              </div>
            </div>
            <h3 className="text-white font-black text-xl text-center leading-tight  tracking-tighter">
              Frejus N. <br/> HOUNGBENOU
            </h3>
            <div className="flex gap-4 mt-4 mb-6">
               <MessageCircle size={20} className="text-gray-400 hover:text-neonGreen cursor-pointer" />
               <Linkedin size={20} className="text-gray-400 hover:text-neonGreen cursor-pointer" />
               <Mail size={20} className="text-gray-400 hover:text-neonGreen cursor-pointer" />
            </div>
          </div>

          <hr className="border-gray-900 mb-6" />

          {/* SECTION PRÉFÉRENCES MOBILE */}
          <div className="mb-8 px-2">
            <div className="flex items-center gap-2 mb-4 text-gray-400 uppercase text-[10px] font-black tracking-[0.2em]">
              <Settings size={12} className="text-neonGreen animate-spin-slow" /> 
              Choisir un thème
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => changeColor(color.value)}
                  className="w-8 h-8 rounded-md border border-white/10 active:scale-95 transition-all"
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
            {/* <p className="text-[9px] text-gray-500 italic text-center uppercase tracking-widest">
              Accent global du site
            </p> */}
          </div>

          <hr className="border-gray-900 mb-6" />

          {/* Liens Mobile */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="flex items-center gap-4 text-gray-300 py-4 px-4 rounded-xl hover:bg-white/5 transition-all border-b border-gray-900/50 group"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-neonGreen">{link.icon}</span>
                <span className="text-lg font-bold tracking-tight">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[50] md:hidden" onClick={() => setIsOpen(false)}></div>
      )}
    </nav>
  );
};

export default Navbar;