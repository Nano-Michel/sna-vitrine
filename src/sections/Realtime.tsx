import SectionTitle from "../components/SectionTitle";
import { useI18n } from "../i18n/I18nContext";

export default function Realtime() {
  const { t } = useI18n();
  return (
    <section id="infos" className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="text-center">
          <span className="section-chip"><i className="bi bi-activity"></i>{t.nav.info}</span>
        </div>
        <SectionTitle title={t.realtime.title} subtitle={t.realtime.text} />
        <div className="row g-4" data-aos="fade-up">
          <div className="col-md-4">
            <div className="h-100 p-4 bg-white border rounded shadow-sm card-hover">
              <div className="fw-semibold mb-2"><i className="bi bi-geo-alt text-success me-2"></i>Localisation</div>
              <div className="text-secondary">Cartographie des ressources et indicateurs locaux.</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100 p-4 bg-white border rounded shadow-sm card-hover">
              <div className="fw-semibold mb-2"><i className="bi bi-flower3 text-success me-2"></i>Culture biologique</div>
              <div className="text-secondary">Documentation des pratiques et conditions de culture.</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100 p-4 bg-white border rounded shadow-sm card-hover">
              <div className="fw-semibold mb-2"><i className="bi bi-exclamation-triangle text-success me-2"></i>Alertes</div>
              <div className="text-secondary">Suivi des pénuries et notifications clés.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
