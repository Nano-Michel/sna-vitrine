import { useI18n } from "../i18n/I18nContext";

export default function CTABanner() {
  const { t } = useI18n();
  return (
    <section className="py-5 cta-gradient text-white">
      <div className="container">
        <div className="row align-items-center gy-3">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-2">{t.cta.title}</h2>
            <p className="mb-0 opacity-90">{t.cta.subtitle}</p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <div className="d-flex gap-3 justify-content-lg-end">
              <a href="#services" className="btn btn-light btn-pill">{t.hero.ctaPrimary}</a>
              <a href="#contact" className="btn btn-outline-light btn-pill">{t.nav.contact}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
