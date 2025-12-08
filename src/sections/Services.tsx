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
          <div className="col-lg-6 equal-col order-lg-1 position-relative" data-aos="fade-right">
              <div className="shape bg-dot primary w-24 h-24" style={{ position: 'absolute', top: -16, left: -16, zIndex: 0 }} />
              <figure className="position-relative d-flex flex-column gap-4" style={{ zIndex: 1 }}>
                <div className="overflow-hidden rounded-4 shadow-sm hover-shadow transition-all" style={{ width: '100%' }}>
                  <img 
                    src="/services.jpg" 
                    alt="Nos services" 
                    className="img-fluid w-100 h-auto rounded-4"
                    style={{
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                </div>
                <div className="overflow-hidden rounded-4 shadow-sm hover-shadow transition-all ms-lg-5" style={{ width: '90%' }}>
                  <img 
                    src="/service.jpeg" 
                    alt="Nos services" 
                    className="img-fluid w-100 h-auto rounded-4"
                    style={{
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                </div>
                <div className="overflow-hidden rounded-4 shadow-sm hover-shadow transition-all mx-lg-3" style={{ width: '85%' }}>
                  <img 
                    src="/services3.jpg" 
                    alt="Nos services" 
                    className="img-fluid w-100 h-auto rounded-4"
                    style={{
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                </div>
              </figure>
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
                        <h5 className="mb-1 fw-semibold">{s.icon && <i className={`bi ${s.icon} text-success me-2 small`}></i>}{s.title}</h5>
                        <div className="mini-divider" />
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
