import React from 'react';

const Skills = () => {
  // Organized skill groups
  const skillGroups = [
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        'Linux',
        'Bash',
        'AWS'
      ]
    },
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        'Python',
        'JavaScript',
        'TypeScript'
      ]
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: [
        'Trello',
        'Postman',
        'APIs (REST & GraphQL)'
      ]
    },
    {
      title: 'Frameworks/Libraries',
      icon: '📚',
      skills: [
        'pandas',
        'NumPy',
        'React.js'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Core technologies and tools I use to build scalable cloud infrastructure, 
            automate deployments, and manage modern DevOps pipelines.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              }}
            >
              {/* Group header */}
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3 drop-shadow-lg">{group.icon}</span>
                <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                  {group.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-blue-500/20"
                    style={{
                      animationDelay: `${(groupIndex * 3 + skillIndex) * 0.1}s`,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    }}
                  >
                    <span className="text-gray-200 font-medium drop-shadow-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500">
            <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-lg">
              Always Learning
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Cloud technology evolves rapidly, and I'm committed to continuous learning. 
              Currently pursuing AWS certifications and exploring advanced DevOps practices like 
              Infrastructure as Code, CI/CD optimization, and cloud-native architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;