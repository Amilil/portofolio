import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'Website portfolio responsif dengan tema dark, dibangun menggunakan React dan Vite.',
    tags: ['React', 'CSS', 'Vite'],
    link: '#'
  },
  {
    title: 'E-Commerce App',
    desc: 'Aplikasi toko online dengan fitur keranjang, checkout, dan sistem login.',
    tags: ['React', 'Firebase', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Task Manager',
    desc: 'Aplikasi manajemen tugas dengan fitur drag & drop dan local storage.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-label">PROJECT</span>
          <h2>Recent Work</h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image">
                <div className="project-placeholder">🚀</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  Lihat Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;