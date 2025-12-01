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
    <section id="recrutement" className="py-5">
      <div className="container">
        <div className="text-center">
          <span className="section-chip"><i className="bi bi-briefcase"></i>{t.nav.recruitment}</span>
        </div>
        <div className="row align-stretch gy-4">
          <div className="col-lg-5 equal-col position-relative" data-aos="fade-right">
            <div className="shape bg-dot primary w-24 h-24" style={{ position: 'absolute', top: -16, left: -16, zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <figure className="rounded mt-3" data-aos="fade-up" data-aos-delay="100">
                <video ref={videoRef} className="w-100 rounded shadow-sm" preload="metadata" muted playsInline aria-label="Vidéo de recrutement SNA">
                  <source src="/recruitement.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo HTML5.
                </video>
              </figure>
            </div>
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
