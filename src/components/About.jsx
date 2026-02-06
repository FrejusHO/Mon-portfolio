import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-darkBg font-mono">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Conteneur Image avec effet néon */}
        <div className="relative group w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <div className="absolute -inset-1 bg-neonGreen rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-cardBg rounded-2xl overflow-hidden border border-gray-800 h-full w-full">
            <img 
              src="/me.jpeg" // Place ta photo dans le dossier 'public' et nomme-la ainsi
              alt="Frejus N. HOUNGBENOU"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>

        {/* Texte de présentation */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
            {/* <span className="text-neonGreen">03.</span> À propos de moi */}
          </h2>
          
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Je suis <span className="text-white font-bold">HOUNGBENOU Nouwassè Frejus</span>, 
              Développeur web passionné par la technologie blockchain et les crypto
            monnaies, je développe des solutions digitales sécurisées et performantes,
            des enjeux complexes en applications robustes.
            </p>
            {/* <p>
              Mon expertise s'étend de la <span className="text-neonGreen">modélisation numérique </span> 
              à la mise en place d'architectures logicielles robustes et scalables. J'aime concevoir des 
              systèmes qui sont non seulement performants, mais aussi maintenables et élégants.
            </p> */}
            
            <div className="pt-6 flex gap-4">
              {/* <button className="px-6 py-2 bg-transparent border border-neonGreen text-neonGreen hover:bg-neonGreen/10 transition rounded">
                Consultez mon CV
              </button> */}

            <a 
                href="/CV_Houngbenou_Frejus.pdf" 
                target="_blank" 
                // download="CV_Houngbenou_Frejus.pdf"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-neonGreen text-neonGreen font-bold hover:bg-neonGreen hover:text-black transition-all duration-300 rounded inline-block"
                >
                 Consultez mon CV
            </a>
              <div className="flex items-center gap-4 ml-4 text-2xl">
                {/* Tu pourras ajouter des icônes ici plus tard */}
                {/* <span className="hover:text-neonGreen cursor-pointer">in</span>
                <span className="hover:text-neonGreen cursor-pointer">git</span> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;