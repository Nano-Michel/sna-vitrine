import { useI18n } from "../i18n/I18nContext";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="accueil" className="hero-section">
      {/* Background Image/Video */}
      <div className="hero-bg-wrapper">
        <img 
          src="/AcceuilSna1.jpg" 
          alt="SNA Hero" 
          className="hero-bg-image"
        />
        {/* Optionnel: Vidéo de fond - décommenter quand vous avez une vidéo
        <video
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        */}
        <div className="hero-gradient-layer" />
      </div>

      {/* Content */}
      <div className="container position-relative z-1">
        <div className="row min-vh-100 align-items-center py-5">
          <div className="col-lg-8 col-xl-7">
            <div className="hero-chip-badge mb-4">
              <i className="bi bi-leaf me-2"></i>
              {t.org.short} • {t.hero.sustainableAgriculture}
            </div>
            <h1 className="hero-title display-3 fw-bold text-white mb-4">
              {t.hero.title}
            </h1>
            <p className="hero-description lead text-white opacity-90 mb-5">
              {t.hero.subtitle}
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#services" className="btn btn-light btn-lg btn-pill px-4">
                {t.hero.ctaPrimary}
              </a>
              <a href="#a-propos" className="btn btn-outline-light btn-lg btn-pill px-4">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar - Fixed at bottom */}
      <div className="hero-stats-container">
        <div className="container">
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-text">{t.hero.stats.producers}</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-text">{t.hero.stats.partnerships}</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-text">{t.hero.stats.data}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#a-propos" className="hero-scroll-btn">
        <i className="bi bi-chevron-down"></i>
      </a>
    </section>
  );
}
