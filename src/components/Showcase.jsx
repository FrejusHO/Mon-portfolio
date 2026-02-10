import React from 'react';
import { Terminal } from 'lucide-react';
const Showcase = () => {
  const screenshots = [
    { title: "Développement Web", img: "/web-dev.jpg" },
    { title: "Développement Mobile", img: "/mobile-dev.jpg" },
    { title: "Trading des cryptos", img: "/trading-app.jpg" }
  ];

  return (
    <section id="domaines" className="py-20 px-6 md:px-20 bg-slate-900 font-mono text-white">
      <div className="max-w-6xl mx-auto">
         <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 flex items-center gap-4 ">
            <Terminal className="text-neonGreen" size={32} />
            My domain
          </h2>
        </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border border-gray-800 bg-cardBg">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-48 object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-neonGreen font-mono text-sm uppercase tracking-tighter">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;