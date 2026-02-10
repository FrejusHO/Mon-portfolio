import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Terminal } from 'lucide-react';

const Contact = () => {
  // 1. État pour les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. État pour la gestion de l'envoi
  const [status, setStatus] = useState({ loading: false, message: '', error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: 'Envoi en cours...', error: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, message: 'Message envoyé avec succès !', error: false });
        setFormData({ name: '', email: '', message: '' }); // Réinitialise le formulaire
      } else {
        throw new Error(data.error || "Une erreur est survenue");
      }
    } catch (err) {
      setStatus({ loading: false, message: err.message, error: true });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-darkBg font-mono text-white">
      <div className="max-w-6xl mx-auto">
       <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 flex items-center gap-4 ">
            <Terminal className="text-neonGreen" size={32} />
            Contacte --me
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
                {/* ... autres infos gardées à l'identique ... */}
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

          {/* Formulaire relié à ton API */}
          <form onSubmit={handleSubmit} className="bg-cardBg p-6 rounded-xl border border-gray-800 space-y-4">
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Nom complet" 
              required
              className="w-full bg-black border border-gray-700 p-3 outline-none focus:border-neonGreen transition text-white" 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
              required
              className="w-full bg-black border border-gray-700 p-3 outline-none focus:border-neonGreen transition text-white" 
            />
            <textarea 
              name="message" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message" 
              required
              className="w-full bg-black border border-gray-700 p-3 outline-none focus:border-neonGreen transition text-white"
            ></textarea>
            
            <button 
              disabled={status.loading}
              className={`w-full py-3 border border-neonGreen text-neonGreen font-bold transition ${status.loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neonGreen hover:text-black'}`}
            >
              {status.loading ? 'ENVOI...' : 'ENVOYER'}
            </button>

            {/* Message de retour utilisateur */}
            {status.message && (
              <p className={`text-center mt-4 ${status.error ? 'text-red-500' : 'text-neonGreen'}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;