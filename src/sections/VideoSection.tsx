import { useState } from "react";
import { useI18n } from "../i18n/I18nContext";

export default function VideoSection() {
  const { t } = useI18n();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="section-padding bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center" data-aos="fade-up">
            <div className="mb-3">
              <span className="section-chip">
                <i className="bi bi-play-circle me-1"></i>
                {t.video.chip}
              </span>
            </div>
            <h2 className="display-5 fw-bold mb-3">{t.video.title}</h2>
            <p className="lead text-secondary">
              {t.video.subtitle}
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="zoom-in">
            <div className="video-wrapper">
              {!isPlaying ? (
                <div className="video-placeholder">
                  <img 
                    src="/AcceuilSna1.jpg" 
                    alt={t.video.thumbnailAlt}
                    className="video-thumbnail"
                  />
                  <button 
                    className="play-button"
                    onClick={() => setIsPlaying(true)}
                    aria-label={t.video.playAriaLabel}
                  >
                    <i className="bi bi-play-fill"></i>
                  </button>
                  <div className="video-overlay-text">
                    <span className="video-duration">02:45</span>
                  </div>
                </div>
              ) : (
                <div className="video-player">
                  <video
                    controls
                    autoPlay
                    className="w-100 rounded-4"
                  >
                    {/* Remplacer par votre vidéo */}
                    <source src="/presentation-sna.mp4" type="video/mp4" />
                    {t.recruitment.browserNotSupported}
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
