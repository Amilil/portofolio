import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="fade-in-up">Hi, I'm [Nama Kamu]</h1>
        <p className="hero-tagline fade-in-up stagger-1">Frontend Developer | React Enthusiast</p>
        <p className="hero-desc fade-in-up stagger-2">
          Saya membangun website yang menarik dan responsif dengan fokus pada user experience.
        </p>
        <div className="hero-buttons fade-in-up stagger-3">
          <a href="#projects" className="btn btn-primary">Lihat Project</a>
          <a href="#contact" className="btn btn-secondary">Hubungi Saya</a>
        </div>
      </div>
      <div className="hero-image fade-in-scale stagger-2">
        <img src="/hero.jpg" alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;