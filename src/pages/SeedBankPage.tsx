import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SeedBankPage() {
  const { t } = useI18n();
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="seedbank-hero">
          <div className="hero-bg-wrapper">
            <img src="/stockageSemence.jpg" alt={t.nav.seedBank} className="hero-bg-image" />
            <div className="hero-gradient-layer" />
          </div>
          
          <div className="container position-relative z-1">
            <div className="row min-vh-100 align-items-center py-5">
              <div className="col-lg-8">
                <div className="hero-chip-badge mb-4">
                  <i className="bi bi-box-seam me-2"></i>
                  {t.seedBank.tagline}
                </div>
                <h1 className="hero-title display-2 fw-bold text-white mb-4">
                  {t.seedBank.title}
                </h1>
                <p className="hero-description lead text-white opacity-90 mb-5">
                  {t.seedBank.subtitle}
                </p>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="hero-stats-container">
            <div className="container">
              <div className="hero-stats-row">
                <div className="hero-stat-item">
                  <span className="stat-number">50,000+</span>
                  <span className="stat-text">{t.seedBank.stats.samples}</span>
                </div>
                <div className="hero-stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-text">{t.seedBank.stats.species}</span>
                </div>
                <div className="hero-stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-text">{t.seedBank.stats.partners}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="row align-items-center gy-5">
              <div className="col-lg-6">
                <img 
                  src="/discussion.jpg" 
                  alt={t.seedBank.missionTitle} 
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <span className="section-chip">
                    <i className="bi bi-bullseye me-1"></i>
                    {t.seedBank.missionTitle}
                  </span>
                </div>
                <h2 className="display-5 fw-bold mb-4">{t.seedBank.missionTitle}</h2>
                <p className="lead text-secondary lh-lg mb-4">
                  {t.seedBank.mission}
                </p>
                <ul className="list-unstyled">
                  {t.seedBank.missionBullets.map((b, i) => (
                    <li className="mb-2" key={i}>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-dark text-white">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold mb-3">
                  <i className="bi bi-microscope me-2"></i>
                  {t.seedBank.servicesHeading}
                </h2>
                <p className="lead opacity-75">{t.seedBank.servicesIntro}</p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="feature-card-dark h-100">
                  <div className="feature-number">01</div>
                  <div className="feature-icon-dark">
                    <i className="bi bi-archive-fill"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3">{t.seedBank.features.conservation.title}</h3>
                  <p className="opacity-75 mb-0">{t.seedBank.features.conservation.desc}</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-card-dark h-100">
                  <div className="feature-number">02</div>
                  <div className="feature-icon-dark">
                    <i className="bi bi-truck"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3">{t.seedBank.features.distribution.title}</h3>
                  <p className="opacity-75 mb-0">{t.seedBank.features.distribution.desc}</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-card-dark h-100">
                  <div className="feature-number">03</div>
                  <div className="feature-icon-dark">
                    <i className="bi bi-search"></i>
                  </div>
                  <h3 className="h4 fw-bold mb-3">{t.seedBank.features.research.title}</h3>
                  <p className="opacity-75 mb-0">{t.seedBank.features.research.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <div className="mb-3">
                  <span className="section-chip">
                    <i className="bi bi-play-circle me-1"></i>
                    {t.seedBank.actionVideo.chip}
                  </span>
                </div>
                <h2 className="display-5 fw-bold mb-3">{t.seedBank.actionVideo.title}</h2>
                <p className="lead text-secondary">{t.seedBank.actionVideo.subtitle}</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="video-container-modern">
                  {!videoPlaying ? (
                    <div className="video-poster">
                      <img src="/discussions.jpg" alt={t.seedBank.actionVideo.posterAlt} className="w-100 rounded-4" />
                      <button className="play-btn-modern" onClick={() => setVideoPlaying(true)} aria-label={t.seedBank.actionVideo.playAriaLabel}>
                        <i className="bi bi-play-fill"></i>
                      </button>
                    </div>
                  ) : (
                    <video controls autoPlay className="w-100 rounded-4">
                      <source src="/seedbank-presentation.mp4" type="video/mp4" />
                    </video>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section className="py-0">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="audience-panel farmers-panel">
                <div className="audience-content">
                  <div className="audience-badge">
                    <i className="bi bi-person-fill"></i>
                  </div>
                  <h3 className="display-6 fw-bold mb-3">{t.seedBank.forFarmers.title}</h3>
                  <p className="lead mb-4">{t.seedBank.forFarmers.desc}</p>
                  <Link to="/#contact" className="btn btn-outline-dark btn-pill">
                    {t.contact.contactButton}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="audience-panel partners-panel">
                <div className="audience-content">
                  <div className="audience-badge light">
                    <i className="bi bi-building"></i>
                  </div>
                  <h3 className="display-6 fw-bold mb-3 text-white">{t.seedBank.forPartners.title}</h3>
                  <p className="lead mb-4 text-white opacity-90">{t.seedBank.forPartners.desc}</p>
                  <Link to="/#contact" className="btn btn-outline-light btn-pill">
                    {t.contact.contactButton}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding cta-gradient text-white">
          <div className="container text-center">
            <h2 className="display-5 fw-bold mb-4">{t.seedBank.joinNetwork}</h2>
            <p className="lead mb-5 opacity-90 col-lg-8 mx-auto">
              {t.seedBank.joinNetworkDesc}
            </p>
            <Link to="/#contact" className="btn btn-light btn-lg btn-pill px-5">
              <i className="bi bi-envelope me-2"></i>
              {t.contact.contactButton}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
