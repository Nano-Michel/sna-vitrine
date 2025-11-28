import SectionTitle from "../components/SectionTitle";
import { useI18n } from "../i18n/I18nContext";

export default function About() {
  const { t } = useI18n();
  return (
    <section id="a-propos" className="py-5">
      <div className="container">
        <div className="text-center">
          <span className="section-chip"><i className="bi bi-info-circle"></i>{t.nav.about}</span>
        </div>
        <SectionTitle title={t.about.title} subtitle={t.about.intro} />
        <div className="row align-items-start gy-4">
          <div className="col-lg-7">
            <ul className="list-group list-group-flush list-check" data-aos="fade-up">
              {t.about.bullets.map((b, i) => (
                <li key={i} className="list-group-item">
                  <i className="bi bi-check2-circle text-success me-2"></i>
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-secondary" data-aos="fade-up">{t.about.closing}</p>
          </div>
          <div className="col-lg-5" data-aos="fade-left">
            <figure className="rounded">
              <img src="/Apropos3.jpg" alt="Présentation de la SNA" className="img-fluid rounded shadow-sm" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
