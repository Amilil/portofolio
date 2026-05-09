import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm [Nama Kamu]</h1>
        <p className="hero-tagline">Frontend Developer | React Enthusiast</p>
        <p className="hero-desc">
          Saya membangun website yang menarik dan responsif dengan fokus pada user experience.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Lihat Project</a>
          <a href="#contact" className="btn btn-secondary">Hubungi Saya</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero.jpg" alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;