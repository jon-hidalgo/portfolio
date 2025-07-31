import React from 'react';

const Projects = () => {
  // Project data focused on Cloud/DevOps
  const projects = [
    {
      id: 1,
      title: 'Cloud Resume Challenge',
      description: 'A full-stack cloud resume built using AWS services to demonstrate cloud architecture and DevOps skills. Features a visitor counter with serverless backend and automated CI/CD deployment.',
      technologies: ['AWS S3', 'CloudFront', 'DynamoDB', 'API Gateway', 'Lambda', 'Python', 'Terraform', 'GitHub Actions'],
      features: [
        'Static website hosting with S3 + CloudFront CDN',
        'Serverless visitor counter using Lambda + DynamoDB',
        'RESTful API with API Gateway integration',
        'Infrastructure as Code with Terraform',
        'Automated CI/CD pipeline with GitHub Actions',
        'Custom domain with Route 53 and SSL certificates'
      ],
      githubLink: '#', // Placeholder - user can update
      liveLink: '#', // Placeholder - user can update
      status: 'Completed',
      metrics: 'Fully automated deployment'
    },
    {
      id: 2,
      title: 'fbref-scraper',
      description: 'A scalable football statistics scraper that extracts detailed player and team data from fbref.com. Built with Python for automated data collection and analysis.',
      technologies: ['Python', 'BeautifulSoup', 'pandas', 'Docker'],
      features: [
        'Automated data extraction from fbref.com',
        'Player and team statistics processing',
        'Data cleaning and transformation pipeline',
        'Export to multiple formats (CSV, JSON)',
        'Containerized deployment with Docker',
        'Error handling and retry mechanisms'
      ],
      githubLink: '#', // Placeholder - user can update
      liveLink: null,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'E-commerce Business',
      description: 'Founded and scaled a successful e-commerce business using Shopify and Printful integration. Grew from concept to 25,000+ satisfied customers through strategic operations and automation.',
      technologies: ['Shopify', 'Printful', 'Automation Tools'],
      features: [
        'Custom Shopify store development',
        'Print-on-demand integration with Printful',
        'Customer service automation workflows',
        'Inventory and order management systems',
        'Digital marketing campaigns and analytics',
        'Scalable business process automation'
      ],
      githubLink: null,
      liveLink: '#', // Placeholder - user can update
      status: 'Active',
      metrics: '25,000+ customers'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Projects that demonstrate cloud architecture, DevOps practices, and automation skills.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              }}
            >
              {/* Project header */}
              <div className="p-6 border-b border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-sm">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                
                {project.metrics && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      📈 {project.metrics}
                    </span>
                  </div>
                )}

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies used */}
              <div className="px-6 py-4 border-b border-white/20">
                <h4 className="text-sm font-semibold text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="backdrop-blur-sm bg-white/10 border border-white/20 text-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key features */}
              <div className="px-6 py-4 border-b border-white/20">
                <h4 className="text-sm font-semibold text-white mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project links */}
              <div className="px-6 py-4">
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="backdrop-blur-sm bg-white/5 border border-white/30 text-gray-200 hover:text-white hover:bg-white/10 hover:border-white/50 inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      className="backdrop-blur-lg bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-400/90 hover:to-blue-500/90 text-white inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border border-white/20"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}>
            <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-sm">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm passionate about building scalable cloud solutions and automating infrastructure. 
              Let's discuss how we can work together on your next cloud or DevOps project.
            </p>
            <a
              href="#contact"
              className="backdrop-blur-lg bg-gradient-to-r from-cyan-500/80 to-blue-600/80 hover:from-cyan-400/90 hover:to-blue-500/90 text-white font-semibold py-3 px-6 rounded-xl shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;