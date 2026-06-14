

const Projects = () => {
  const projectsData = [
    {
      title: 'Credit Card Fraud Detection',
      desc: 'An end-to-end Machine Learning system that classifies credit card transactions as legitimate or fraudulent. Implements isolation forests, random forest classifiers, and SMOTE for handling imbalanced datasets.',
      tags: ['Python', 'Scikit-Learn', 'Pandas', 'Machine Learning'],
      icon: (
        <svg className="project-icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Academic Course Planning System',
      desc: 'A web portal for college students to map their degree curricula, track prerequisite course trees, balance term credits, and register for courses. Features interactive drag-and-drop course maps.',
      tags: ['React JS', 'Vanilla CSS', 'SQL', 'Node.js'],
      icon: (
        <svg className="project-icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      title: 'Smart Power Grid Optimization System',
      desc: 'An AI-powered load routing and network optimization system. Minimizes distribution power losses and ensures system stability using heuristics and graph algorithms.',
      tags: ['Python', 'AI Algorithms', 'NetworkX', 'Optimization'],
      icon: (
        <svg className="project-icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-icon-wrapper">
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tags" style={{ marginBottom: '1.5rem' }}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link Icons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a href="#projects" aria-label="Github Repo" style={{ color: 'var(--text-secondary)', transition: 'var(--transition-fast)' }} className="project-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a href="#projects" aria-label="Live Demo" style={{ color: 'var(--text-secondary)', transition: 'var(--transition-fast)' }} className="project-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Inline styles for project link hover */}
      <style>{`
        .project-link:hover {
          color: var(--accent-cyan) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Projects;
