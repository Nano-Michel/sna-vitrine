import ImageSlot from "../components/ImageSlot";
import { useI18n } from "../i18n/I18nContext";

export default function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="text-center">
          <span className="section-chip"><i className="bi bi-envelope-paper"></i>{t.nav.contact}</span>
        </div>
        <div className="row gy-10 gx-lg-8 gx-xl-12 align-items-center">
          <div className="col-lg-7 position-relative" data-aos="fade-right">
            <div className="shape bg-dot primary rellax w-18 h-18" style={{ top: 0, left: "-1.4rem", zIndex: 0, position: "absolute" }} />
            <div className="row gx-md-5 gy-5 position-relative" style={{ zIndex: 2 }}>
              <div className="col-md-6">
                <figure className="rounded mt-md-10 position-relative">
                  <ImageSlot ratio="4x3" caption="Présentation de la SNA" />
                </figure>
              </div>
              <div className="col-md-6">
                <div className="row gx-md-5 gy-5">
                  <div className="col-md-12 order-md-2">
                    <figure className="rounded">
                      <ImageSlot ratio="4x3" caption="Présentation de la SNA" />
                    </figure>
                  </div>
                  <div className="col-md-10">
                    <div className="card bg-pale-primary text-center counter-wrapper">
                      <div className="card-body py-11">
                        <h3 className="counter text-nowrap">5000+</h3>
                        <p className="mb-0">Acteurs accompagnés</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5" data-aos="fade-left">
            <h2 className="display-4 mb-3">{t.contact.title}</h2>
            <p className="lead fs-lg">{t.contact.subtitle}</p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2"><i className="bi bi-geo-alt text-success me-2"></i><span className="fw-semibold me-1">{t.contact.addressLabel}:</span>{t.org.address}</li>
              <li className="mb-2"><i className="bi bi-telephone text-success me-2"></i><span className="fw-semibold me-1">{t.contact.phoneLabel}:</span>{t.org.phone}</li>
              <li><i className="bi bi-envelope text-success me-2"></i><span className="fw-semibold me-1">{t.contact.emailLabel}:</span>{t.org.email}</li>
            </ul>
            <a href={`mailto:${t.org.email}`} className="btn btn-soft-primary btn-circle me-2" aria-label="Email"><i className="bi bi-envelope"></i></a>
            <a href="#" className="btn btn-success rounded-pill mt-2">Prendre contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
