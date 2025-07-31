import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A passionate Computer Science student focused on cloud technologies, 
            automation, and building scalable infrastructure solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-sm">
                My Journey into Cloud & DevOps
              </h3>
              <p className="text-gray-300 leading-relaxed">
                As a Computer Science student, I've developed a deep passion for cloud infrastructure 
                and DevOps practices. My journey began with curiosity about how modern applications 
                scale and maintain reliability, leading me to explore AWS services, containerization, 
                and Infrastructure as Code.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-sm">
                What Drives Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm fascinated by the intersection of development and operations, where automation 
                meets reliability. Building systems that can handle scale while maintaining simplicity 
                is what excites me most. I believe that well-designed infrastructure should be 
                invisible to users but powerful enough to support any application.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-sm">
                My Approach
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I focus on building robust, automated solutions using modern DevOps practices. 
                Whether it's implementing CI/CD pipelines, managing cloud infrastructure with Terraform, 
                or containerizing applications with Docker, I prioritize reliability, scalability, 
                and maintainability in every project.
              </p>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}>
            <h3 className="text-xl font-semibold text-white mb-6 drop-shadow-sm">
              Key Highlights
            </h3>
            
            <div className="space-y-6">
              {/* Education */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Education</h4>
                  <p className="text-gray-300">Computer Science Student</p>
                  <p className="text-sm text-gray-400">Focus on Cloud Computing & Systems</p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Entrepreneurial Experience</h4>
                  <p className="text-gray-300">Founded & Scaled E-commerce Business</p>
                  <p className="text-sm text-gray-400">25,000+ customers through automation</p>
                </div>
              </div>

              {/* Technical Focus */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Technical Focus</h4>
                  <p className="text-gray-300">Cloud Architecture & Automation</p>
                  <p className="text-sm text-gray-400">AWS, Docker, Terraform, CI/CD</p>
                </div>
              </div>

              {/* Goals */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Career Goals</h4>
                  <p className="text-gray-300">Cloud Engineer Internship</p>
                  <p className="text-sm text-gray-400">Building scalable, impactful systems</p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  Ready to contribute to innovative cloud solutions
                </p>
                <a
                  href="#contact"
                  className="backdrop-blur-lg bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-400/90 hover:to-blue-500/90 text-white font-semibold py-2 px-4 rounded-xl shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-12 drop-shadow-lg">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Reliability</h4>
              <p className="text-gray-300">
                Building systems that work consistently and can be trusted in production environments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Automation</h4>
              <p className="text-gray-300">
                Eliminating manual processes through intelligent automation and Infrastructure as Code.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Scalability</h4>
              <p className="text-gray-300">
                Designing solutions that grow with business needs and handle increased demand gracefully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;