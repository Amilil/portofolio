import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="about-label fade-in-up">TENTANG SAYA</span>
          <h2 className="fade-in-up stagger-1">Siapa Aku?</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="fade-in-left">
              Halo! Saya seorang <span className="highlight">Frontend Developer</span> yang passionate 
              dalam membangun website yang menarik dan user-friendly. Saya fokus pada teknologi 
              modern seperti React dan terus belajar hal baru setiap hari.
            </p>
            <p className="fade-in-left stagger-1">
              Selain coding, saya juga suka desain UI/UX dan percaya bahwa tampilan yang bagus 
              adalah kunci pengalaman pengguna yang baik. Saya senang bekerja dalam tim dan 
              selalu terbuka untuk feedback.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="about-card fade-in-up stagger-2">
              <div className="card-icon">🎯</div>
              <h3>Fokus</h3>
              <p>Build web yang responsif, performant, dan easy to use</p>
            </div>
            <div className="about-card fade-in-up stagger-3">
              <div className="card-icon">💡</div>
              <h3>Motivasi</h3>
              <p>Terus belajar dan improve skill untuk hasil terbaik</p>
            </div>
            <div className="about-card fade-in-up stagger-4">
              <div className="card-icon">🤝</div>
              <h3>Kolaborasi</h3>
              <p>Suka bekerja sama dan share knowledge dengan tim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;