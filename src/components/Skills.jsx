import React from 'react';

const Skills = () => {
  const stack = {
    "Langages": ["C", "PHP", "Python", "HTML5", "CSS3", "SQL", "Javascript"],
    "Frameworks": ["Laravel", "React js", "Tailwind CSS", "Bootstrap", "Express js"],
    "Architecture": ["Analyse & Modélisation de projets informatiques"],
    "Database": ["MySQL", "PostgreSQL"]
  };

  return (
    <section id="stack" className="py-20 px-6 md:px-20 bg-darkBg font-mono">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center md:text-left">
           <span className="text-neonGreen">$</span> Ma <span className="text-neonGreen">Stack</span> Technique
        </h2>

        {/* Fenêtre IDE */}
        <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
          {/* Barre de titre */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="text-gray-500 text-xs italic">houngbenou_skills.json</span>
          </div>

          {/* Zone de code */}
          <div className="p-6 md:p-10 text-sm md:text-base overflow-x-auto">
            <div className="flex gap-3 mb-6">
              <span className="text-neonGreen font-bold">$</span>
              <p className="text-white italic">cat houngbenou_skills.json</p>
            </div>

            <pre className="text-blue-400 leading-relaxed">
              <span className="text-gray-400">{`{`}</span>
              {Object.entries(stack).map(([category, items], index, array) => (
                <div key={category} className="pl-6">
                  <span className="text-orange-300">"{category}"</span>: <span className="text-gray-400">[</span>
                  <div className="pl-6 flex flex-wrap gap-x-2">
                    {items.map((item, i) => (
                      <span key={item} className="text-green-400">
                        "{item}"{i < items.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-400">]</span>{index < array.length - 1 ? ',' : ''}
                </div>
              ))}
              <span className="text-gray-400">{`}`}</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;