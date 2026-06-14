
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-wrapper">
          {/* Hero Content Left */}
          <div className="hero-content">
            <span className="greeting">Welcome to My Space</span>
            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">Tejaswini</span>
            </h1>
            <h2 className="hero-role">AI & Data Science Student</h2>
            <p className="hero-desc">
              I am a passionate B.Tech student majoring in Artificial Intelligence and Data Science at KL University Hyderabad. I love building web applications, exploring Machine Learning models, and analyzing data patterns to solve complex real-world problems.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Contact Me</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Glowing Tech Profile Avatar Right */}
          <div className="hero-avatar">
            <div className="avatar-container">
              <div className="avatar-inner">
                <img 
                  src={profileImg} 
                  alt="Tejaswini - AI & Data Science Student" 
                  className="avatar-image" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
