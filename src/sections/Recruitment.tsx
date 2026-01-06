import { useI18n } from "../i18n/I18nContext";
import { useEffect, useRef } from "react";

export default function Recruitment() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6 && !hasPlayedRef.current) {
            try {
              el.muted = true; // ensure no sound
              el.play().catch(() => {});
              hasPlayedRef.current = true; // play only once
              observer.disconnect();
            } catch {
              // ignore autoplay errors
            }
          }
        });
      },
      { threshold: [0, 0.6, 1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="recrutement" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <div className="mb-3">
            <span className="section-chip">
              <i className="bi bi-briefcase me-1"></i>
              {t.nav.recruitment}
            </span>
          </div>
          <h2 className="display-5 fw-bold mb-3">{t.recruitment.title}</h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 760 }}>{t.recruitment.description}</p>
        </div>
        <div className="row align-stretch gy-4">
          <div className="col-lg-5 equal-col position-relative" data-aos="fade-right">
            <div className="shape bg-dot primary w-24 h-24" style={{ position: 'absolute', top: -16, left: -16, zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="overflow-hidden rounded-4 shadow-sm hover-shadow transition-all" style={{ width: '100%' }}>
                <img 
                  src="/recruite.png" 
                  alt={t.recruitment.videoAlt}
                  className="img-fluid w-100 h-auto rounded-4"
                  style={{
                    transition: 'transform 0.3s ease-in-out',
                    objectFit: 'cover',
                    minHeight: '300px',
                    maxHeight: '400px'
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7 equal-col" data-aos="fade-left">
            <div className="bg-white border rounded-4 shadow-sm p-5 text-center w-100 h-100 d-flex align-items-center justify-content-center flex-column">
              <div className="icon-badge mx-auto mb-4" style={{ width: 80, height: 80, fontSize: '2rem' }}>
                <i className="bi bi-briefcase"></i>
              </div>
              <h3 className="fw-bold mb-3">{t.recruitment.joinTeamTitle}</h3>
              <p className="text-secondary mb-4">{t.recruitment.joinTeamDesc}</p>
              <a href="#contact" className="btn btn-success btn-lg btn-pill px-5">{t.recruitment.submitCv}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
