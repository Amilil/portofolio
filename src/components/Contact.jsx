import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-label">KONTAK</span>
          <h2>Let's Connect</h2>
          <p>Ada yang mau didiskusikan atau kerja sama? Jangan ragu buat Hubungi saya!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>emailkamu@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Lokasi</h4>
                <p>Indonesia</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <h4>Social</h4>
                <div className="social-links">
                  <a href="#" target="_blank">GitHub</a>
                  <a href="#" target="_blank">LinkedIn</a>
                  <a href="#" target="_blank">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Nama" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Pesan" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Kirim Pesan</button>
          </form>
        </div>
      </div>
      
    </section>
  );
}

export default Contact;