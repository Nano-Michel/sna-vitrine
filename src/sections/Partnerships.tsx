import SectionTitle from "../components/SectionTitle";
import { useI18n } from "../i18n/I18nContext";

export default function Partnerships() {
  const { t } = useI18n();
  const icons = ["bi-mortarboard", "bi-building", "bi-globe2"];
  return (
    <section
      id="partenariats"
      className="py-5 section-bg"
      style={{ ["--section-bg" as any]: "url('/images/partners.jpg')" }}
    >
      <div className="container">
        <div className="text-center">
          <span className="section-chip"><i className="bi bi-diagram-3"></i>{t.nav.partnerships}</span>
        </div>
        <SectionTitle title={t.partnerships.title} subtitle={t.partnerships.note} />
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
