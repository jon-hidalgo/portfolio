import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/5 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Experience
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional experience and key accomplishments in software development and business.
          </p>
        </div>

        {/* Experience content - placeholder as requested */}
        <div className="max-w-4xl mx-auto">
          {/* Placeholder card */}
          <div className="backdrop-blur-lg bg-white/10 border-2 border-dashed border-white/30 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-500" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}>
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-white/20 border border-white/30 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <svg 
                  className="w-8 h-8 text-gray-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm">
                Experience Coming Soon
              </h3>
              
              <p className="text-gray-300 mb-6">
                This section will be updated with professional experience, internships, 
                and relevant work history as they become available.
              </p>
              
              <div className="text-sm text-gray-400">
                Currently focusing on completing Computer Science studies and building 
                a strong foundation in software development.
              </div>
            </div>
          </div>

          {/* Skills highlight relevant to experience */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-500" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}>
              <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-lg mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Academic Excellence</h4>
              <p className="text-gray-300 text-sm">Strong foundation in Computer Science principles and practical application</p>
            </div>

            <div className="text-center p-6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-500" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}>
              <div className="w-12 h-12 bg-green-500/20 border border-green-400/30 rounded-lg mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Entrepreneurial Spirit</h4>
              <p className="text-gray-300 text-sm">Successfully scaled e-commerce business to 25,000+ customers</p>
            </div>

            <div className="text-center p-6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-500" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}>
              <div className="w-12 h-12 bg-purple-500/20 border border-purple-400/30 rounded-lg mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Technical Projects</h4>
              <p className="text-gray-300 text-sm">Hands-on experience with data scraping, web development, and automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;