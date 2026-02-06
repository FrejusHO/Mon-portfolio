import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppBubble = () => {
  return (
    <a
      href="https://wa.me/2290163822317"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 group flex items-center justify-center"
      aria-label="Discuter sur WhatsApp"
    >
      {/* Tooltip style Terminal qui apparaît au survol sur ordinateur */}
      <span className="absolute right-20 bg-cardBg border border-gray-800 text-neonGreen text-xs font-mono px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        <span className="text-white">$</span> Joindre Frejus via whatsapp --direct
      </span>
<span className="absolute right-16 bg-white text-black text-xs font-bold px-3 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Besoin d'aide ? Discutons !
      </span>
      {/* Icône WhatsApp */}
      <MessageCircle size={28} fill="currentColor" strokeWidth={1} />
      
      {/* Petit point de notification animé (Ping) */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </a>
  );
};

export default WhatsAppBubble;