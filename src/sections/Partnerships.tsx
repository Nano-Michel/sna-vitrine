import { useI18n } from "../i18n/I18nContext";

export default function Partnerships() {
  const { t } = useI18n();
  const icons = ["bi-mortarboard", "bi-building", "bi-globe2"];
  return (
    <section id="partenariats" className="section-padding">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="mb-3">
            <span className="section-chip">
              <i className="bi bi-diagram-3 me-1"></i>
              {t.nav.partnerships}
            </span>
          </div>
          <h2 className="display-5 fw-bold mb-3">{t.partnerships.title}</h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 760 }}>{t.partnerships.note}</p>
        </div>
        <div className="partners-marquee" aria-label="Liste des partenaires">
          <div className="partners-track" data-aos="fade-up">
            {[...t.partnerships.items, ...t.partnerships.items].map((it, i) => (
              <div className="partners-item bg-white border shadow-sm" key={i}>
                <div className="icon-badge"><i className={`bi ${icons[i % icons.length]}`}></i></div>
                <span className="label fw-semibold">{it}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
