import ImageSlot from "../components/ImageSlot";
import { useI18n } from "../i18n/I18nContext";

export default function Recruitment() {
  const { t } = useI18n();
  return (
    <section id="recrutement" className="py-5">
      <div className="container">
        <div className="text-center">
          <span className="section-chip"><i className="bi bi-briefcase"></i>{t.nav.recruitment}</span>
        </div>
        <div className="row align-stretch gy-4">
          <div className="col-lg-5 equal-col" data-aos="fade-right">
            <ImageSlot ratio="4x3" caption="Section recrutement" />
          </div>
          <div className="col-lg-7 equal-col" data-aos="fade-left">
            <div className="bg-white border rounded shadow-sm card-hover p-4 text-center w-100 h-100 d-flex align-items-center justify-content-center flex-column">
              <div className="icon-badge mx-auto mb-3"><i className="bi bi-briefcase"></i></div>
              <h2 className="fw-bold mb-2">Recrutement & Banque de CV</h2>
              <p className="text-secondary mb-4">Soumettez votre CV pour étude et stockage, puis bénéficiez de mises en relation avec des recruteurs.</p>
              <a href="#contact" className="btn btn-success btn-lg">Soumettre un CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
