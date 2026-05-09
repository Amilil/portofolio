import './Skills.css';

const skills = [
  { name: 'HTML', level: 90, icon: '📄' },
  { name: 'CSS', level: 85, icon: '🎨' },
  { name: 'JavaScript', level: 80, icon: '⚡' },
  { name: 'React', level: 75, icon: '⚛️' },
  { name: 'Git', level: 70, icon: '📚' },
  { name: 'Figma', level: 65, icon: '✏️' },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="skills-label fade-in-up">KEMAMPUAN</span>
          <h2 className="fade-in-up stagger-1">Skills & Tools</h2>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              className={`skill-item fade-in-up stagger-${index + 1}`} 
              key={index}
            >
              <div className="skill-info">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>
        
        <div className="tech-stack">
          <h3 className="fade-in-up">Tech yang lagi dipelajari</h3>
          <div className="tech-tags">
            <span className="fade-in-up stagger-1">TypeScript</span>
            <span className="fade-in-up stagger-2">Next.js</span>
            <span className="fade-in-up stagger-3">Tailwind</span>
            <span className="fade-in-up stagger-4">Node.js</span>
            <span className="fade-in-up stagger-5">PostgreSQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;