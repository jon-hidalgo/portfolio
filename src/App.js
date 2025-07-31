import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [currentSection, setCurrentSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [bootSequence, setBootSequence] = useState([]);
  const mainRef = useRef(null);

  const scrambleText = (element, finalText, duration = 1000) => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let startTime = null;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      
      if (progress < 1) {
        const scrambled = finalText
          .split('')
          .map((char, index) => {
            if (progress * finalText.length > index) {
              return char;
            } else {
              return chars[Math.floor(Math.random() * chars.length)];
            }
          })
          .join('');
        
        element.textContent = scrambled;
        requestAnimationFrame(animate);
      } else {
        element.textContent = finalText;
      }
    };
    
    requestAnimationFrame(animate);
  };

  const handleTextScramble = (e) => {
    const element = e.target;
    const finalText = element.getAttribute('data-text') || element.textContent;
    scrambleText(element, finalText, 800);
  };

  const sections = {
    about: 'About',
    experience: 'Experience', 
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    certifications: 'Certifications'
  };

  const sectionKeys = Object.keys(sections);

  const bootMessages = [
    'Loading system modules...',
    'Initializing portfolio interface...',
    'Mounting file systems...',
    'Starting network services...',
    'Loading user profile...',
    'Ready.'
  ];

  useEffect(() => {
    let messageIndex = 0;
    const bootInterval = setInterval(() => {
      if (messageIndex < bootMessages.length) {
        setBootSequence(prev => [...prev, bootMessages[messageIndex]]);
        messageIndex++;
      } else {
        clearInterval(bootInterval);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 300);

    return () => clearInterval(bootInterval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLoading) return;
      
      const currentIndex = sectionKeys.indexOf(currentSection);
      
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : sectionKeys.length - 1;
        setCurrentSection(sectionKeys[prevIndex]);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = currentIndex < sectionKeys.length - 1 ? currentIndex + 1 : 0;
        setCurrentSection(sectionKeys[nextIndex]);
      } else if (e.key >= '1' && e.key <= '6') {
        e.preventDefault();
        const index = parseInt(e.key) - 1;
        if (index < sectionKeys.length) {
          setCurrentSection(sectionKeys[index]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isLoading, sectionKeys]);

  const renderPrompt = () => (
    <div className="mb-4 text-sm font-medium text-muted">
      <span className="accent">~/</span>
      <span className="text-secondary">{currentSection}</span>
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-6">
      {renderPrompt()}
      <div className="space-y-4">
        <h2 className="section-title text-lg mb-3">About</h2>
        <div className="leading-relaxed space-y-3 text-sm text-primary">
          <p className="accent">Final year Computer Engineering student</p>
          <p>Hands-on experience in Linux, AWS, Docker, Python and CI/CD using GitHub Actions. Self-driven, solutions-oriented and committed to continuous improvement, bringing analytical thinking, product vision and clear communication.</p>
          <div className="pt-2">
            <span className="text-secondary">Languages:</span> <span className="accent">Spanish (native)</span>, <span className="text-primary">English (C1)</span>, <span className="text-secondary">German (A2)</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      {renderPrompt()}
      <div className="space-y-4">
        <h2 className="section-title text-lg mb-3">Education</h2>
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-medium text-primary">Universitat Oberta de Catalunya</h3>
            <span className="text-sm font-medium accent">Jul 2026</span>
          </div>
          <p className="mb-2 text-sm font-medium accent">Bachelor in Computer Science - Computer Engineering</p>
          <p className="text-xs mb-4 text-secondary">Online</p>
          <div className="text-sm">
            <p className="mb-2 font-medium text-primary">Highlighted courses:</p>
            <div className="grid grid-cols-1 gap-1 text-xs">
              <div className="flex justify-between"><span className="text-secondary">Network and Operating System Administration</span><span className="accent font-medium">9.0</span></div>
              <div className="flex justify-between"><span className="text-secondary">Internet Networks and Applications</span><span className="accent font-medium">9.7</span></div>
              <div className="flex justify-between"><span className="text-secondary">Computer Architecture</span><span className="accent font-medium">9.3</span></div>
              <div className="flex justify-between"><span className="text-secondary">Graph Theory and Complexity</span><span className="accent font-medium">9.7</span></div>
              <div className="flex justify-between"><span className="text-secondary">Artificial Intelligence</span><span className="accent font-medium">9.0</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      {renderPrompt()}
      <div className="space-y-4">
        <h2 className="section-title text-lg mb-3">Experience</h2>
        <div className="space-y-4">
          <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-primary">Default Club (E-commerce)</h3>
              <span className="text-xs font-medium accent">Madrid, Spain</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium accent">Cloud Automation Engineer</span>
              <span className="text-xs text-secondary">Feb 2023 – Jul 2025</span>
            </div>
            <div className="text-xs space-y-2 leading-relaxed text-secondary">
              <p>• Automated product catalogue, saving 20h/week via REST/GraphQL APIs</p>
              <p>• Introduced CI/CD with GitHub Actions and Docker on AWS EC2</p>
              <p>• Deployed monitoring with Prometheus, KPIs and Discord alerts</p>
              <p>• Web scraping and market analysis with Python (BeautifulSoup, Pandas)</p>
              <p>• Built cloud pipelines with AWS S3 and Lambda for serverless operations</p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-primary">Default Club</h3>
              <span className="text-xs font-medium accent">Madrid, Spain</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium accent">Founder</span>
              <span className="text-xs text-secondary">Jul 2017 – Jul 2025</span>
            </div>
            <p className="text-xs leading-relaxed text-secondary">Built and scaled e-commerce brand from scratch, serving 25,000+ customers. Led technical automation of core operations focusing on performance, scalability, and low operational overhead.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      {renderPrompt()}
      <div className="space-y-4">
        <h2 className="section-title text-lg mb-3">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5">
            <h4 className="font-medium mb-3 text-sm accent">Programming</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'React', 'Node.js', 'HTML', 'SQL', 'Bash'].map(skill => (
                <span key={skill} className="px-2 py-1 rounded text-xs border" style={{backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', borderColor: 'var(--border)'}}>{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="p-5">
            <h4 className="font-medium mb-3 text-sm accent">DevOps & Cloud</h4>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Kubernetes', 'Terraform', 'Git', 'AWS', 'PostgreSQL', 'Prometheus'].map(skill => (
                <span key={skill} className="px-2 py-1 rounded text-xs border" style={{backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', borderColor: 'var(--border)'}}>{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="p-5 md:col-span-2">
            <h4 className="font-medium mb-3 text-sm accent">Systems</h4>
            <div className="flex flex-wrap gap-2">
              {['Linux Administration', 'CLI Tools', 'bash', 'ssh', 'systemctl', 'journalctl', 'curl'].map(skill => (
                <span key={skill} className="px-2 py-1 rounded text-xs border" style={{backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', borderColor: 'var(--border)'}}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      {renderPrompt()}
      <div className="space-y-4">
        <h2 className="section-title text-lg mb-3">Projects</h2>
        <div className="p-5">
          <h3 className="font-medium mb-2 text-primary">Fbref Scraper</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {['Docker', 'Python', 'Requests', 'BeautifulSoup', 'Pandas', 'GitHub'].map(tech => (
              <span key={tech} className="px-2 py-1 rounded text-xs border" style={{backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)', borderColor: 'var(--border)'}}>{tech}</span>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-secondary">Developed Python scraper collecting 30,000+ advanced football statistics from FBref, exporting data to CSV for external analysis.</p>
        </div>
      </div>
    </div>
  );

  const renderCertifications = () => (
    <div className="space-y-6">
      {renderPrompt()}
      <div className="space-y-4">
        <h2 className="section-title text-lg mb-3">Certifications</h2>
        <div className="space-y-3">
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-sm text-primary">DevOps with Docker & Kubernetes</h3>
              <span className="text-xs font-medium accent">In progress</span>
            </div>
            <p className="text-xs text-secondary">Universidad de Helsinki (240h) - Online</p>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-sm text-primary">Google Professional Certificate in Business Intelligence</h3>
              <span className="text-xs font-medium accent">2025</span>
            </div>
            <p className="text-xs text-secondary">Google (80h) - Online</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(currentSection) {
      case 'about': return renderAbout();
      case 'education': return renderEducation();
      case 'experience': return renderExperience();
      case 'skills': return renderSkills();
      case 'projects': return renderProjects();
      case 'certifications': return renderCertifications();
      default: return renderAbout();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="accent">jon@portfolio</span>
            <span className="text-muted">:~$ </span>
            <span className="animate-pulse text-secondary">portfolio --init</span>
          </div>
          {bootSequence.map((message, index) => (
            <div key={index} className="text-sm opacity-80 mb-1 boot-message">
              <span className="accent">[{String(index + 1).padStart(2, '0')}]</span> <span className="text-secondary">{message}</span>
            </div>
          ))}
          <div className="terminal-cursor"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-mono" style={{backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)'}}>
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-6">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-medium mb-3 text-primary">Jon Hidalgo</h1>
            <p className="text-sm text-secondary">Computer Engineering Student • DevOps & Cloud Automation</p>
          </div>
          
          <nav className="nav-minimal p-4" role="tablist">
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.entries(sections).map(([key, label], index) => (
                <button
                  key={key}
                  onClick={() => setCurrentSection(key)}
                  className={`nav-button px-4 py-2 text-sm font-medium ${
                    currentSection === key ? 'active' : ''
                  }`}
                  aria-label={`Navigate to ${label} section. Press ${index + 1} or use arrow keys`}
                  role="tab"
                  aria-selected={currentSection === key}
                  tabIndex={currentSection === key ? 0 : -1}
                >
                  <span className="text-xs opacity-60 mr-2">{index + 1}</span>
                  {label}
                </button>
              ))}
            </div>
            <div className="text-xs text-center mt-4 text-muted">
              <span className="sr-only">Navigation instructions: </span>
              Use arrow keys or numbers 1-6 to navigate
            </div>
          </nav>
        </header>

        <main 
          ref={mainRef}
          className="card-minimal p-6 min-h-96"
          role="tabpanel"
          aria-labelledby="current-section"
          tabIndex="0"
        >
          <div id="current-section" className="sr-only">
            {sections[currentSection]} section content
          </div>
          {renderContent()}
        </main>

        <footer className="mt-4 text-center text-xs">
          <p className="text-muted">Available for opportunities • <span className="accent hyperlink text-scramble" data-text="contact@jonhidalgo.dev" onMouseEnter={handleTextScramble}>contact@jonhidalgo.dev</span></p>
        </footer>
      </div>
    </div>
  );
}

export default App;