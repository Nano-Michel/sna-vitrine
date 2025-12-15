import { useI18n } from "../i18n/I18nContext";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="a-propos" className="section-padding">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Image */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="about-image-wrapper">
              <img 
                src="/apropos.jpg" 
                alt="Présentation de la SNA" 
                className="img-fluid rounded-4 shadow-lg" 
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="mb-3">
              <span className="section-chip">
                <i className="bi bi-info-circle me-1"></i>
                {t.nav.about}
              </span>
            </div>
            <h2 className="display-5 fw-bold mb-4">{t.about.title}</h2>
            <p className="lead text-secondary mb-4">{t.about.intro}</p>
            
            <div className="about-features mb-4">
              {t.about.bullets.map((b, i) => (
                <div key={i} className="about-feature-item">
                  <div className="feature-check">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            
            <p className="text-secondary fst-italic">{t.about.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
