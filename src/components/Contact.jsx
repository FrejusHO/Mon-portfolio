import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'; // Assure-toi d'avoir installé lucide-react

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-darkBg font-mono text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center md:text-left">
          <span className="text-neonGreen">$</span> Contact --me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Infos Personnelles */}
          <div className="space-y-8">
            <p className="text-gray-400 text-lg">
              N'hésitez pas à me contacter pour toute opportunité ou collaboration.
            </p>
            <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-cardBg border border-gray-800 rounded group-hover:border-neonGreen transition-colors">
                    <MessageCircle className="text-neonGreen" size={20} />
                    </div>
                    <span className="text-lg">+229 0163822317</span>
                </div>
                 <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-cardBg border border-gray-800 rounded group-hover:border-neonGreen transition-colors">
                    <Phone className="text-neonGreen" size={20} />
                    </div>
                    <span className="text-lg">+229 0144268899</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-cardBg border border-gray-800 rounded group-hover:border-neonGreen transition-colors">
                    <Mail className="text-neonGreen" size={20} />
                    </div>
                    <span className="text-lg">frejushn@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="p-3 bg-cardBg border border-gray-800 rounded group-hover:border-neonGreen transition-colors">
                    <MapPin className="text-neonGreen" size={20} />
                    </div>
                    <span className="text-lg">Abomey Calavi, Bénin</span>
                </div>
            </div>
          </div>

          {/* Formulaire (Déjà existant, on le garde) */}
          <form action="https://api.web3forms.com/submit" method="POST" className="bg-cardBg p-6 rounded-xl border border-gray-800 space-y-4">
            <input type="hidden" name="access_key" value="VOTRE_CLE_ICI" />
            <input type="text" name="name" placeholder="Nom complet" className="w-full bg-black border border-gray-700 p-3 outline-none focus:border-neonGreen transition" />
            <input type="email" name="email" placeholder="Email" className="w-full bg-black border border-gray-700 p-3 outline-none focus:border-neonGreen transition" />
            <textarea name="message" rows="4" placeholder="Votre message" className="w-full bg-black border border-gray-700 p-3 outline-none focus:border-neonGreen transition"></textarea>
            <button className="w-full py-3 border border-neonGreen text-neonGreen hover:bg-neonGreen hover:text-black font-bold transition">
              ENVOYER
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;