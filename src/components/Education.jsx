

const Education = () => {
  const educationData = [
    {
      year: '2022 - Present',
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: 'KL University Hyderabad',
      desc: 'Focusing on advanced coursework in Machine Learning, Deep Learning, Big Data, SQL Databases, Data Warehousing, Web Architectures, and Algorithm Design. Actively engaged in academic projects and programming contests.',
      alignment: 'left',
    },
    {
      year: '2020 - 2022',
      degree: 'Intermediate Education (MPC)',
      institution: 'Narayana Junior College',
      desc: 'Completed pre-university education with a major in Mathematics, Physics, and Chemistry (MPC). Developed analytical and mathematical logic frameworks.',
      alignment: 'right',
    },
    {
      year: '2020',
      degree: 'Secondary School Certificate (SSC)',
      institution: 'St. Johns High School',
      desc: 'Completed secondary education with honors and high academic distinction. Laid strong fundamentals in scientific principles, programming, and mathematical sciences.',
      alignment: 'left',
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className={`timeline-item ${edu.alignment}`}>
              <div className="timeline-content glass-card">
                <span className="timeline-year">{edu.year}</span>
                <h3 className="timeline-degree">{edu.degree}</h3>
                <h4 className="timeline-inst">{edu.institution}</h4>
                <p className="timeline-desc">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
