

const About = () => {
  const interests = [
    {
      title: 'Web Development',
      desc: 'Designing and building interactive, responsive user interfaces using modern CSS, JavaScript, and React JS.',
      icon: (
        <svg className="interest-icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'Artificial Intelligence',
      desc: 'Developing intelligent systems, decision frameworks, search heuristics, and cognitive architectures to solve complex tasks.',
      icon: (
        <svg className="interest-icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v12M6 12h12M7.5 7.5l9 9M16.5 7.5l-9 9" />
        </svg>
      )
    },
    {
      title: 'Machine Learning',
      desc: 'Creating predictive engines, supervised/unsupervised models, data processing pipelines, and statistical analyses.',
      icon: (
        <svg className="interest-icon" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          {/* About Text */}
          <div className="about-text">
            <p style={{ fontWeight: '600', color: 'var(--accent-cyan)', fontSize: '1.25rem' }}>
              Academic Background & Career Focus
            </p>
            <p>
              Hello! I'm Tejaswini, currently pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at KL University Hyderabad. I am deeply interested in exploring how data can be processed and modeled to create intelligent software that impacts everyday life.
            </p>
            <p>
              My academic coursework has provided me with strong problem-solving skills, algorithmic design methodologies, and solid software foundations. I enjoy bridging the gap between intelligent backend engines (ML/AI) and clean, responsive interfaces.
            </p>
            <p>
              I am always eager to learn new technologies, collaborate on academic/open-source projects, and take on new challenges that expand my technical horizons.
            </p>
          </div>

          {/* Interests Grid */}
          <div className="about-cards-wrapper">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: '600' }}>
              Primary Fields of Interest
            </h3>
            <div className="about-interests">
              {interests.map((interest, index) => (
                <div key={index} className="interest-card">
                  <div className="interest-icon-box">
                    {interest.icon}
                  </div>
                  <h4 className="interest-title" style={{ marginBottom: '0.5rem' }}>{interest.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
