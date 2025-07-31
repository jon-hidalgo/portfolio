import React from 'react';

const Certifications = () => {
  // Certifications data
  const certifications = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      status: 'In Progress',
      expectedDate: 'Q4 2024',
      description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Pricing'],
      badgeUrl: null, // Placeholder for badge image
      credentialUrl: null // Placeholder for credential verification
    },
    {
      id: 2,
      title: 'Google Business Intelligence Certificate',
      issuer: 'Google',
      status: 'Completed',
      completedDate: '2024',
      description: 'Comprehensive program covering data analysis, visualization, and business intelligence tools.',
      skills: ['Data Analysis', 'Business Intelligence', 'Data Visualization', 'Analytics'],
      badgeUrl: null,
      credentialUrl: '#' // Placeholder
    },
    {
      id: 3,
      title: 'n8n Automation Specialist',
      issuer: 'n8n',
      status: 'Completed',
      completedDate: '2024',
      description: 'Advanced workflow automation and integration platform expertise.',
      skills: ['Workflow Automation', 'API Integration', 'Process Optimization', 'No-Code Solutions'],
      badgeUrl: null,
      credentialUrl: '#' // Placeholder
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-88 h-88 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Certifications
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in cloud technologies, 
            data analysis, and automation platforms.
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              }}
            >
              {/* Certification header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-sm">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-300">{cert.issuer}</p>
                </div>
                <div className="ml-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      cert.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : cert.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
              </div>

              {/* Date information */}
              <div className="mb-4">
                {cert.status === 'Completed' && cert.completedDate && (
                  <p className="text-sm text-gray-400">
                    Completed: {cert.completedDate}
                  </p>
                )}
                {cert.status === 'In Progress' && cert.expectedDate && (
                  <p className="text-sm text-gray-400">
                    Expected: {cert.expectedDate}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills covered */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-white mb-2">
                  Key Skills:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="backdrop-blur-sm bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 px-2 py-1 rounded text-xs font-medium hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex space-x-3">
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    className="backdrop-blur-sm bg-white/5 border border-white/30 text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/50 inline-flex items-center px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300"
                  >
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verify
                  </a>
                )}
                {cert.badgeUrl && (
                  <a
                    href={cert.badgeUrl}
                    className="backdrop-blur-sm bg-white/5 border border-white/30 text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/50 inline-flex items-center px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300"
                  >
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Badge
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications pursuit */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}>
            <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-sm">
              Continuous Learning
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              I'm actively pursuing additional certifications to stay current with cloud technologies and DevOps practices. 
              Next up: AWS Solutions Architect Associate and Docker Certified Associate.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AWS Solutions Architect', 'Docker Certified Associate', 'Kubernetes Administrator', 'Terraform Associate'].map((cert) => (
                <span
                  key={cert}
                  className="backdrop-blur-sm bg-white/10 border border-white/20 text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;