import React from 'react';
const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-20 font-mono pt-20">
      <div className="max-w-4xl">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white leading-snug md:leading-tight">
          Je bâtis des <span className="text-gray-400">architectures de données</span> <br className="hidden md:block" />
          <span className="text-white"> robustes et des interfaces </span>
          <span className="relative inline-block">
            fluides
            <span className="inline-block w-2 h-8 md:h-14 bg-neonGreen ml-2 animate-pulse-fast shadow-[0_0_8px_#00ff41]"></span>
          </span>
        </h1>
        <p className="mt-6 text-gray-500 text-base md:text-xl max-w-2xl leading-relaxed">
          Ingénieur logiciel spécialisé dans la conception de systèmes scalables...
        </p>
      </div>
    </section>
  );
};

export default Hero;