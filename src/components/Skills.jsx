import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      name: 'HTML',
      level: 90,
      icon: (
        <svg className="skill-icon" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zM12 6l6.5 13h-13L12 6z" />
        </svg>
      ),
    },
    {
      name: 'CSS',
      level: 85,
      icon: (
        <svg className="skill-icon" viewBox="0 0 24 24">
          <path d="M4 2h16l-2 16-6 4-6-4-2-16zM12 18l3.5-2.5.5-6H8v2h6l-.2 2.5-3.8 1.5-3.8-1.5-.2-2.5H4.2l.4 5.5 7.4 3z" />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      level: 80,
      icon: (
        <svg className="skill-icon" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm13.2 13.8c-.8.6-1.6.8-2.6.8-1.8 0-2.8-1-2.8-2.8h2c0 .8.4 1 1 .1v-.1c.3.5 1 .7 1.4.1v-.1c0-1.2-1.8-1.5-2.8-2.2-.8-.6-1.2-1.2-1.2-2.2 0-1.8 1-2.8 2.8-2.8 1.2 0 2 .4 2.6 1l-1.2 1.2c-.4-.4-.8-.6-1.4-.6-.8 0-1.2.4-1.2 1 0 .8 1.2 1 2.2 1.6 1 .6 1.8 1.2 1.8 2.2 0 1-.4 1.8-1.2 2.2z" />
        </svg>
      ),
    },
    {
      name: 'React JS',
      level: 75,
      icon: (
        <svg className="skill-icon" viewBox="0 0 24 24">
          <path d="M12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0-6.5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      ),
    },
    {
      name: 'Python',
      level: 85,
      icon: (
        <svg className="skill-icon" viewBox="0 0 24 24">
          <path d="M12 2c-3.14 0-5.83.69-7.16 2.16-1.33 1.47-1.33 3.69-1.33 6.84h3.14v-.7c0-1.52.88-2.42 2.37-2.42h6c1.5 0 2.38.9 2.38 2.42v3.7c0 1.5-.88 2.42-2.38 2.42H9.25V19.6h2.75c3.14 0 5.83-.69 7.16-2.16 1.33-1.47 1.33-3.69 1.33-6.84h-3.14v.7c0 1.52-.88 2.42-2.37 2.42h-6c-1.5 0-2.38-.9-2.38-2.42v-3.7c0-1.5.88-2.42 2.38-2.42h5.75V2.02L12 2z" />
        </svg>
      ),
    },
    {
      name: 'Java',
      level: 70,
      icon: (
        <svg className="skill-icon" viewBox="0 0 24 24">
          <path d="M2 10s1.5-2 5-2 6 2 9 0 3-3 3-3-1 4-5 5-7-1-9-1-3 1-3 1zm18 4s-1.5 2-5 2-6-2-9 0-3 3-3 3 1-4 5-5 7 1 9 1 3-1 3-1zM6 22s4.5 1 7.5-1 4.5-3 4.5-3-1.5 1-4.5 1.5-6-.5-7.5-1.5v4z" />
        </svg>
      ),
    },
    {
      name: 'SQL',
      level: 80,
      icon: (
        <svg className="skill-icon" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 18c-5.52 0-10-1.35-10-3v-4.5c0 1.65 4.48 3 10 3s10-1.35 10-3v4.5c0 1.65-4.48 3-10 3zm0-6c-5.52 0-10-1.35-10-3V6.5c0 1.65 4.48 3 10 3s10-1.35 10-3v4.5c0 1.65-4.48 3-10 3z" />
        </svg>
      ),
    },
    {
      name: 'Machine Learning',
      level: 75,
      icon: (
        <svg className="skill-icon" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.92V15h-2v2.92c-2.03-.43-3.64-2.04-4.07-4.07H10v-2H6.93C7.36 9.82 8.97 8.21 11 7.78V10h2V7.78c2.03.43 3.64 2.04 4.07 4.07H14v2h3.07c-.43 2.03-2.04 3.64-4.07 4.07z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-logo">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level-bar">
                <div 
                  className="skill-level-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginTop: '0.5rem', fontWeight: '600' }}>
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
