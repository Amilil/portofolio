import './Education.css';

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="education-header">
          <span className="education-label fade-in-up">PENDIDIKAN</span>
          <h2 className="fade-in-up stagger-1">Riwayat Pendidikan</h2>
        </div>

        <div className="education-timeline">
          <div className="education-item fade-in-up stagger-2">
            <div className="education-icon">🎓</div>
            <div className="education-info">
              <h3>Nama Universitas</h3>
              <h4>Jurusan / Program Studi</h4>
              <p>Deskripsi singkat tentang pendidikan atau pencapaian akademik.</p>
              <span className="education-year">2022 - Sekarang</span>
            </div>
          </div>

          <div className="education-item fade-in-up stagger-3">
            <div className="education-icon">🏫</div>
            <div className="education-info">
              <h3>Nama Sekolah Menengah</h3>
              <h4>Jurusan / Program</h4>
              <p>Deskripsi singkat tentang sekolah atau pencapaian akademik.</p>
              <span className="education-year">2019 - 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;