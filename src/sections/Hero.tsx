import { useI18n } from "../i18n/I18nContext";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section
      id="accueil"
      className="py-5 hero-gradient hero-bg"
      style={{ ["--hero-bg" as any]: "url('/AcceuilSna1.jpg')" }}
    >
      <div className="hero-scrim" aria-hidden="true" />
      <div className="container py-5">
        <div className="row align-items-center gy-4">
          <div className="col-lg-8" data-aos="fade-right">
            <div className="hero-text-panel p-3 p-md-4">
              <span className="badge bg-success-subtle text-success mb-3 px-3 py-2 rounded-pill">{t.org.short} • {t.hero.sustainableAgriculture}</span>
              <h1 className="display-4 fw-bold mb-3">{t.hero.title}</h1>
              <p className="lead text-secondary mb-4">{t.hero.subtitle}</p>
              <div className="d-flex gap-3">
                <a href="#services" className="btn btn-gradient-success btn-lg btn-pill">{t.hero.ctaPrimary}</a>
                <a href="#a-propos" className="btn btn-ghost-light btn-lg btn-pill">{t.hero.ctaSecondary}</a>
              </div>
            </div>
            <div className="row mt-4 g-3">
              <div className="col-6 col-md-4">
                <div className="stat" data-aos="fade-up" data-aos-delay="50">
                  <i className="bi bi-people text-success fs-4"></i>
                  <div>
                    <div className="value">10k+</div>
                    <div className="label">{t.hero.stats.producers}</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="stat" data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-globe2 text-success fs-4"></i>
                  <div>
                    <div className="value">25+</div>
                    <div className="label">{t.hero.stats.partnerships}</div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="stat" data-aos="fade-up" data-aos-delay="150">
                  <i className="bi bi-clipboard-data text-success fs-4"></i>
                  <div>
                    <div className="value">{t.hero.stats.realTime}</div>
                    <div className="label">{t.hero.stats.data}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
