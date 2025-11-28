import { useI18n } from "../i18n/I18nContext";
import SectionTitle from "../components/SectionTitle";

export default function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="text-center">
          <span className="section-chip"><i className="bi bi-grid"></i>{t.nav.services}</span>
        </div>
        <SectionTitle title={t.servicesHeading} subtitle={t.servicesIntro} />
        <div className="row gx-md-4 gx-xl-5 gy-5 align-stretch">
          {/* Colonne image: même hauteur que la pile de cartes */}
          <div className="col-lg-6 equal-col order-lg-1" data-aos="fade-right">
              <img src="/nosServices.jpg" alt="Nos services" className="img-fluid rounded shadow-sm" />
          </div>
          {/* Colonne cartes */}
          <div className="col-lg-6 order-lg-2 services-stack">
            {t.services.map((s, i) => {
              const num = String(i + 1).padStart(2, '0');
              const base = i === 0 ? '' : 'mt-4';
              const offsetClass = i % 3 === 0 ? `me-lg-4 ${base}` : i % 3 === 1 ? `ms-lg-5 ${base}` : `mx-lg-3 ${base}`;
              return (
                <div className={`card shadow-sm card-hover ${offsetClass} service-step`} key={i} data-aos="fade-up" data-aos-delay={i * 60}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start">
                      <span className="icon-circle-soft pe-none me-3"><span className="number">{num}</span></span>
                      <div>
                        <h5 className="mb-1 fw-semibold">{s.title}</h5>
                        <p className="mb-0 text-secondary">{s.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
