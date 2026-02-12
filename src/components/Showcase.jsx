import React from 'react';
import { Terminal, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Showcase = () => {
  const screenshots = [
    { title: "Développement Web", img: "/web-dev.jpg", tech: "React • Next.js" },
    { title: "Développement Mobile", img: "/mobile-dev.jpg", tech: "React Native • Expo" },
    { title: "Trading des cryptos", img: "/trading-app.jpg", tech: "Python • API Binance" }
  ];

  return (
    <section id="domaines" className="py-20 px-6 md:px-20 bg-slate-900 font-mono text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 flex items-center justify-center gap-4"
        >
          <Terminal className="text-neonGreen" size={40} />
         ./my_domains
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }} // La carte monte au survol
              className="group relative rounded-xl border border-gray-800 bg-black/40 p-2 transition-all duration-300 hover:border-neonGreen/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]"
            >
              <div className="relative h-56 overflow-hidden rounded-lg">
                {/* Overlay de couleur au survol */}
                <div className="absolute inset-0 bg-neonGreen/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />

                {/* Petit badge technique */}
                <div className="absolute top-3 right-3 z-20 translate-y-[-50px] group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-black/80 border border-neonGreen/30 text-neonGreen text-[10px] px-2 py-1 rounded">
                    {item.tech}
                  </div>
                </div>
              </div>

              <div className="mt-4 p-2 text-center">
                <h3 className="text-lg font-bold text-white group-hover:text-neonGreen transition-colors italic">
                  {item.title}
                </h3>
                <div className="w-0 group-hover:w-full h-[1px] bg-neonGreen transition-all duration-500 mx-auto mt-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;