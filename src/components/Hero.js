import React from 'react';

const Hero = () => {
  // Scroll to contact section when button is clicked
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          {/* Main heading with name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Jon Hidalgo
            </span>
          </h1>
          
          {/* Subtitle/Introduction */}
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 drop-shadow-sm">
              Aspiring Cloud Engineer & DevOps Enthusiast
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Computer Science student passionate about cloud infrastructure, automation, and scalable systems. 
              I focus on building robust, automated solutions using modern DevOps practices and cloud technologies 
              to deliver reliable, efficient, and maintainable infrastructure.
            </p>
          </div>

          {/* Skills highlight */}
          <div className="mb-8">
            <p className="text-gray-300 mb-4">Specialized in</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {['AWS', 'Docker', 'Terraform', 'GitHub Actions', 'Python', 'Linux'].map((skill) => (
                <span
                  key={skill}
                  className="backdrop-blur-sm bg-white/10 border border-white/20 text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="backdrop-blur-lg bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-400/90 hover:to-blue-500/90 text-white font-semibold py-3 px-8 rounded-xl shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 border border-white/20"
            >
              Get In Touch
            </button>
            <a
              href="#projects"
              className="backdrop-blur-sm bg-white/5 border-2 border-white/30 text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              View My Work
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
              <svg
                className="w-6 h-6 mx-auto drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;